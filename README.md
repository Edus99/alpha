# ALPAALE — Landing Next.js

Proyecto listo para desplegar (Next.js 14 + Tailwind). Incluye ruta API para enviar el formulario por correo con Nodemailer.

## Requisitos
- Node 18+
- Cuenta SMTP (puede ser empresarial o un proveedor como SendGrid, Mailersend, etc.)

## Uso local
```bash
npm install
cp .env.example .env.local
# edita .env.local con tus credenciales SMTP
npm run dev
```
Abrir http://localhost:3000

## Deploy en Vercel
1. Crea un proyecto nuevo y sube estos archivos.
2. En **Project Settings → Environment Variables** agrega las variables del archivo `.env.example`.
3. Deploy. La ruta POST `/api/contact` quedará lista para recibir el formulario.

## Email marketing
- En la carpeta `email/` está el archivo `alpaale_landing_email.html` (listo para pegar en Outlook/Gmail).
