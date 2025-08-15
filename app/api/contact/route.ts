import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!email || !message) {
      return NextResponse.json({ ok: false, error: "Datos incompletos" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });

    const to = process.env.CONTACT_TO || "atencion@alpaale.com.mx";
    await transporter.sendMail({
      from: `ALPAALE Web <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to,
      subject: `Nuevo mensaje desde la web — ${name || "Sin nombre"}`,
      replyTo: email,
      text: `Nombre: ${name || "Sin nombre"}\nCorreo: ${email}\n\nMensaje:\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name || "Sin nombre"}</p><p><strong>Correo:</strong> ${email}</p><p><strong>Mensaje:</strong><br/>${(message || "").replace(/\n/g, "<br/>")}</p>`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ ok: false, error: "No se pudo enviar" }, { status: 500 });
  }
}
