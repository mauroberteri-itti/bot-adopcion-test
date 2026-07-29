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
// Para una prueba de 500 líneas esto es más que suficiente:
// no hace falta chunking ni búsqueda semántica todavía.
const KNOWLEDGE_PATH = path.join(__dirname, 'knowledge.md');
const knowledgeBase = fs.readFileSync(KNOWLEDGE_PATH, 'utf-8');

const SYSTEM_PROMPT = `Sos un asistente interno que ayuda a diseñadores a hacer onboarding
y migrar al Design System de la compañía.

Reglas importantes:
- Respondé SOLO en base a la información de la base de conocimiento de abajo.
- Si la respuesta no está en la base de conocimiento, decilo claramente y no inventes nada.
- Sé puntual, conciso y amable. Evitá respuestas largas si no son necesarias.
- Si corresponde, indicá el nombre exacto del componente o el paso del proceso.

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
    temperature: 0.3,
    max_tokens: 500,
  });

  return completion.choices[0]?.message?.content?.trim()
    || 'No pude generar una respuesta, probá de nuevo.';
}

// --- Eventos de Slack ---

// Responde cuando mencionan al bot con @bot en un canal
app.event('app_mention', async ({ event, say }) => {
  const pregunta = event.text.replace(/<@[^>]+>/g, '').trim();

  if (!pregunta) {
    await say('¡Hola! Preguntame algo sobre el proceso de onboarding o migración al Design System.');
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
