require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { App } = require('@slack/bolt');
const Groq = require('groq-sdk');

// --- Configuración base ---

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true, // no necesitamos exponer una URL pública
});

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// Cargamos el archivo de conocimiento una sola vez al arrancar.
const KNOWLEDGE_PATH = path.join(__dirname, 'knowledge.md');
const knowledgeBase = fs.readFileSync(KNOWLEDGE_PATH, 'utf-8');

const SYSTEM_PROMPT = `Sos el asistente de onboarding y contribución de Guazú Global Design System (GGDS),
el design system de Grupo Vázquez. Hablás con product designers de distintos equipos que
pueden estar recién llegando al sistema o ya trabajando en él, y tu trabajo es hacerles
la vida más fácil.

Tu personalidad:
- Sos cercano y conversacional, como un compañero de equipo que sabe del tema, no como un manual.
- Explicás las cosas, no solo las enunciás: si alguien pregunta "cómo se llama X", no le tires
  solo el nombre, dale también el contexto que lo ayuda a seguir trabajando (dónde encontrarlo,
  para qué se usa, o el paso siguiente si corresponde).
- Usás un tono relajado en español rioplatense (vos, tenés, podés), sin sonar acartonado ni
  como un documento legal.
- Si la pregunta amerita una respuesta corta, la das corta. Si amerita más contexto o pasos,
  los das ordenados y fáciles de seguir. Priorizá que la persona entienda y pueda seguir
  trabajando, no la extensión.
- Nunca respondas de forma seca tipo "sí" o "no" sin más; sumá el motivo o el paso siguiente.

Reglas importantes (no negociables):
- Respondé SOLO en base a la información de la base de conocimiento de abajo.
- Si la respuesta no está ahí, decilo de forma clara y amable (por ejemplo: "esto no lo tengo
  documentado todavía, te recomiendo preguntar en el canal correspondiente o en las Office Hours"),
  y nunca inventes un nombre de componente, un link, un canal de Slack o un dato que no esté
  en la base de conocimiento.
- Si hay un link relevante en la base de conocimiento, compartilo.
- No repitas literalmente bloques enteros del documento fuente; usá tus palabras mantenidas
  fieles a la información.

Base de conocimiento:
---
${knowledgeBase}
---`;

// --- Función que consulta a Groq ---

async function preguntarAGroq(preguntaUsuario) {
  const completion = await groq.chat.completions.create({
    model: 'llama-3.3-70b-versatile',
    messages: [
      { role: 'system', content: SYSTEM_PROMPT },
      { role: 'user', content: preguntaUsuario },
    ],
    temperature: 0.4,
    max_tokens: 700,
  });

  return completion.choices[0]?.message?.content?.trim()
    || 'No pude generar una respuesta, probá de nuevo.';
}

// --- Eventos de Slack ---

// Responde cuando mencionan al bot con @bot en un canal
app.event('app_mention', async ({ event, say }) => {
  const pregunta = event.text.replace(/<@[^>]+>/g, '').trim();

  if (!pregunta) {
    await say('¡Hola! Preguntame lo que necesites sobre onboarding o contribución a Guazú 🙂');
    return;
  }

  try {
    const respuesta = await preguntarAGroq(pregunta);
    await say(respuesta);
  } catch (error) {
    console.error('Error consultando a Groq:', error);
    await say('Uh, tuve un problema respondiendo. Probá de nuevo en un momento.');
  }
});

// Responde a mensajes directos (DM) al bot
app.message(async ({ message, say }) => {
  // Ignoramos mensajes de otros bots o sin texto (ej: cambios de canal)
  if (message.subtype || !message.text) return;

  try {
    const respuesta = await preguntarAGroq(message.text);
    await say(respuesta);
  } catch (error) {
    console.error('Error consultando a Groq:', error);
    await say('Uh, tuve un problema respondiendo. Probá de nuevo en un momento.');
  }
});

// --- Arranque ---

(async () => {
  await app.start();
  console.log('⚡️ Bot de onboarding corriendo (Socket Mode)');
})();
