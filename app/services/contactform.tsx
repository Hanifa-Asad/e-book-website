"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subject: "Website quick inquiry", // default subject (API optional hai)
  });
  const [status, setStatus] = useState({ type: "", msg: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", msg: "" });

    // basic front-end validation
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", msg: "Name, Email aur Message required hain." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", msg: "Message sent successfully! ✅" });
        setForm({ name: "", email: "", phone: "", message: "", subject: "Website quick inquiry" });
      } else {
        setStatus({ type: "error", msg: data.message || "Failed to send message." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ type: "error", msg: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[var(--light-bg)] from-warm-orange via-warm-orange to-warm-orange/80 rounded-2xl p-8 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-xl font-semibold text-white">We will always provide the best service.</h3>
      </div>

      <form className="space-y-4" onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
            required
          />
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
            required
          />
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-500"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            name="message"
            placeholder="I am looking for..."
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/90 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-white resize-none placeholder-gray-500"
            required
          ></textarea>
        </div>

        {/* Hidden/Default Subject (optional UI) */}
        {/* <input type="hidden" name="subject" value={form.subject} /> */}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-warm-orange text-white py-3 rounded-lg font-bold text-lg hover:bg-warm-orange/90 transition-colors border-2 border-warm-orange hover:border-warm-orange/90 disabled:opacity-60"
        >
          {loading ? "Sending..." : "SUBMIT"}
        </button>
    
        {status.msg && (
          <p
            className={`text-center text-sm mt-2 ${
              status.type === "success" ? "text-green-100" : "text-red-100"
            }`}
          >
            {status.msg}
          </p>
        )}
      </form>
    </div>
  );
}
