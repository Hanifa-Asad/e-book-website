"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-charcoal-gray">
      <Header />

      {/* Hero Banner Section */}
      <section
        className="relative h-[500px] bg-cover bg-center bg-no-repeat flex items-center"
        style={{
          backgroundImage: `url('https://globaldesignsagency.com/assets/images/services/Contact.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Design Ideas Brewing?</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Let's <span className="bg-flame-orange px-4 py-[0px] rounded-lg">Connect</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div className="bg-flame-orange p-8 rounded-2xl shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Connect for Quality Designs</h2>
              <p className="text-black mb-8">
                Transform Your Vision into Reality - Get in Touch with Us Now!
              </p>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-flame-orange"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-flame-orange"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-flame-orange"
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-flame-orange"
                  />
                </div>

                <textarea
                  name="message"
                  placeholder="Write Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-flame-orange resize-none"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="bg-flame-orange text-white px-8 py-4 rounded-full font-semibold bg-charcoal-gray hover:bg-black transition-colors duration-300"
                >
                  Submit Comment
                </button>

                {status && <p className="mt-4 text-gray-700">{status}</p>}
              </form>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <img
                src="https://globaldesignsagency.com/assets/images/contact-girl.png"
                alt="Woman working on laptop"
                className="w-full h-auto relative z-10"
              />
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-flame-orange/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
