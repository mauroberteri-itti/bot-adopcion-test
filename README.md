# Bot de onboarding — prueba

Bot de Slack que responde preguntas sobre onboarding y migración al Design
System, usando el contenido de `knowledge.md` como única fuente de verdad, y
Groq (modelo Llama) como motor de respuesta.

## Qué falta para que funcione

1. **Reemplazar `knowledge.md`** con el contenido real del proceso de
   onboarding.

2. **Crear la Slack App** en https://api.slack.com/apps
   - Activar **Socket Mode**.
   - Generar un **App-Level Token** (`xapp-...`) con el scope
     `connections:write`.
   - En **OAuth & Permissions**, agregar los Bot Token Scopes:
     `app_mentions:read`, `chat:write`, `im:history`, `im:read`, `im:write`.
   - Instalar la app en el workspace y copiar el **Bot Token** (`xoxb-...`).
   - En **Event Subscriptions**, suscribirse a `app_mention` y `message.im`.

3. **Cargar las variables de entorno en Railway** (ver `.env.example`):
   - `SLACK_BOT_TOKEN`
   - `SLACK_APP_TOKEN`
   - `GROQ_API_KEY`

4. **Deploy en Railway**: conectar este repo, Railway detecta el
   `package.json` y corre `npm start` automáticamente.

## Correrlo local (opcional, para probar antes de subir)

```bash
npm install
cp .env.example .env   # completar con las keys reales
npm start
```
