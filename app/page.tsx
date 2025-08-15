"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, FileText, Building2, Mail, Phone, Globe2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | string>(null);

  const features = [
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Rigor legal", desc: "Verificación en RPPyC y RUG con controles de calidad." },
    { icon: <FileText className="w-6 h-6" />, title: "Entrega ejecutiva", desc: "Informes claros en Word/PDF, listos para decisión." },
    { icon: <Building2 className="w-6 h-6" />, title: "Cobertura nacional", desc: "Para bancos, financieras, arrendadoras e inmobiliarias." },
  ];

  const services = [
    { title: "Búsqueda y verificación registral", desc: "Sociedades y propiedades en RPPyC a nivel nacional; consultas en RUG." },
    { title: "Certificados oficiales", desc: "Libertad de gravamen y no propiedad; gestión y seguimiento integral." },
    { title: "Estudios y trámites", desc: "Crédito y socioeconómicos; Registro Civil y Tesorería." },
  ];

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Enviando…");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Error de servidor");
      setStatus("Mensaje enviado. Te contactaremos en breve.");
      setName(""); setEmail(""); setMessage("");
    } catch (err) {
      setStatus("No se pudo enviar. Intenta de nuevo o escribe a atencion@alpaale.com.mx");
    }
  }

  return (
    <div className="min-h-screen text-neutral-800">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-neutral-200">
        <nav className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="ALPAALE" width={40} height={40} className="rounded-xl" />
            <span className="font-semibold tracking-tight">ALPAALE</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-orange-600">Servicios</a>
            <a href="#ventajas" className="hover:text-orange-600">Ventajas</a>
            <a href="#contacto" className="hover:text-orange-600">Contacto</a>
          </div>
          <a href="#contacto" className="btn btn-primary">Solicitar cotización <ArrowRight className="w-4 h-4" /></a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
          <div className="absolute -top-24 -right-24 w-[40rem] h-[40rem] rounded-full bg-orange-500 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
            <p className="inline-flex items-center gap-2 text-xs font-medium bg-white border rounded-full px-3 py-1 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-green-500" /> Servicio corporativo
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Validamos la certeza legal que impulsa tus decisiones financieras.</h1>
            <p className="text-lg text-neutral-600 max-w-prose">
              Búsqueda y verificación de propiedades y sociedades; certificados oficiales; estudios de crédito y trámites ante RPPyC, RUG, Registro Civil y Tesorería.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#contacto" className="btn btn-primary">Agenda una llamada <ArrowRight className="w-4 h-4" /></a>
              <a href="#servicios" className="btn btn-outline hover:border-orange-600">Ver servicios</a>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" />+52 55 5306 4285 · 55 5912 3573 · 55 7096 8583</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" />atencion@alpaale.com.mx</div>
              <div className="flex items-center gap-2"><Globe2 className="w-4 h-4" />www.alpaale.com.mx</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white border shadow-xl grid place-items-center overflow-hidden">
              <div className="p-8 text-center">
                <div className="text-sm uppercase tracking-widest text-neutral-500">ALPAALE</div>
                <h3 className="mt-2 text-xl font-semibold">Gestoría registral para decisiones seguras</h3>
                <p className="mt-2 text-neutral-600">Mockup de informes y casos de éxito.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="ventajas" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">¿Por qué ALPAALE?</h2>
        <p className="mt-2 text-neutral-600 max-w-prose">Proceso claro y entregables de alto impacto, con foco en la toma de decisiones.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-700 grid place-items-center mb-3">{f.icon}</div>
              <h3 className="font-medium text-lg">{f.title}</h3>
              <p className="text-neutral-600 mt-1 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicios" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-neutral-600 mt-2 text-sm">{s.desc}</p>
              <a href="#contacto" className="inline-flex items-center gap-2 mt-4 text-orange-700 hover:underline">Solicitar información <ArrowRight className="w-4 h-4" /></a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contacto" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Cuéntanos sobre tu solicitud</h2>
            <p className="mt-2 text-neutral-600 max-w-prose">En menos de 24 horas te compartimos una propuesta con tiempos y costos claros.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700 list-disc pl-4">
              <li>Tipo de trámite (propiedad, sociedad, certificado, RUG…)</li>
              <li>Entidad federativa y folios disponibles</li>
              <li>Urgencia y formato requerido (Word/PDF)</li>
              <li>Datos de facturación (opcional)</li>
            </ul>
          </div>
          <form onSubmit={onSubmit} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="grid gap-4">
              <label className="text-sm font-medium">Nombre</label>
              <input value={name} onChange={e=>setName(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Tu nombre" />
              <label className="text-sm font-medium">Correo</label>
              <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="nombre@empresa.com" />
              <label className="text-sm font-medium">Mensaje</label>
              <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={4} className="mt-1 w-full rounded-xl border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Cuéntanos brevemente tu necesidad" />
              <button className="btn btn-primary" type="submit">Enviar mensaje</button>
              {status && <p className="text-sm text-neutral-600">{status}</p>}
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-10 grid md:grid-cols-2 gap-6 items-center">
          <p className="text-sm text-neutral-500">© {new Date().getFullYear()} ALPAALE Servicios Mercantiles, S.A. de C.V.</p>
          <div className="flex gap-6 justify-start md:justify-end text-sm">
            <a href="#" className="hover:text-orange-700">Aviso de privacidad</a>
            <a href="#" className="hover:text-orange-700">Términos</a>
            <a href="#contacto" className="hover:text-orange-700">Contacto</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
