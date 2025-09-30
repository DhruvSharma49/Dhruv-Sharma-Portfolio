import React from "react";
import Container from "./Container";
export default function ContactSection() {
  return (
    <section id="contact" className="bg-neutral-950 py-16 text-white">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Contact</h2>
        <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-white/70">Name</label>
            <input id="name" required className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-white/70">Email</label>
            <input id="email" type="email" required className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="you@domain.com" />
          </div>
          <div className="grid gap-2 sm:col-span-2">
            <label htmlFor="message" className="text-sm text-white/70">Message</label>
            <textarea id="message" rows={4} className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400" placeholder="Tell me about your project" />
          </div>
          <div className="sm:col-span-2">
            <button className="w-full rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-neutral-900 transition hover:brightness-95">Send</button>
          </div>
        </form>
      </Container>
    </section>
  );
}
