import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Container from "../Components/Container";

export default function ContactSection() {
  const formRef = useRef();

  const publickey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  console.log(serviceId, templateid, publickey);
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        serviceId, // EmailJS Service ID
        templateid, // EmailJS Template ID
        formRef.current,
        publickey // EmailJS Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          alert("Failed to send message");
        }
      );
  };

  return (
    <section id="contact" className="bg-neutral-950 py-16 text-white">
      <Container>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact
        </h2>

        {/* 👇 UI SAME AS YOURS */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:grid-cols-2"
        >
          <div className="grid gap-2">
            <label className="text-sm text-white/70">Name</label>
            <input
              name="user_name"
              required
              className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white"
              placeholder="Your name"
            />
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-white/70">Email</label>
            <input
              type="email"
              name="reply_to"
              required
              className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white"
              placeholder="you@domain.com"
            />
          </div>

          <div className="grid gap-2 sm:col-span-2">
            <label className="text-sm text-white/70">Message</label>
            <textarea
              name="message"
              rows={4}
              required
              className="rounded-xl border border-white/10 bg-neutral-900 px-4 py-3 text-white"
              placeholder="Tell me about your project"
            />
          </div>

          <div className="sm:col-span-2">
            <button className="w-full rounded-2xl bg-emerald-400 px-6 py-3 font-semibold text-neutral-900">
              Send
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
