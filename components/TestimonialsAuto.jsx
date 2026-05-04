// components/TestimonialsAuto.jsx
"use client";
import React from "react";

const ITEMS = [
  {
    quote:
      "I have been hiring people in this space for a number of years and I have never seen this level of professionalism. It really feels like you are working with a team that can get the job done.",
    name: "Leonard Heiser",
    role: "CEO",
    avatar:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=96&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "From kickoff to delivery, their communication and quality are next level. Deadlines were met, and expectations were surpassed.",
    name: "Amelia Carter",
    role: "CEO",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=96&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Reliable, fast, and creative. If you need a partner who ‘gets it’, this is the team you want by your side.",
    name: "Noah Bennett",
    role: "CEO",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=96&q=80&auto=format&fit=crop",
  },
  {
    quote:
      "Their UX instincts are spot-on. We shipped on time with confidence and the results look fantastic.",
    name: "Sophia Malik",
    role: "CEO",
    avatar:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=96&q=80&auto=format&fit=crop",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-[var(--flame-orange)]" aria-label="5 star rating">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current">
          <path d="M10 15.27 15.18 18l-1.64-5.03L18 8.24l-5.19-.04L10 3 7.19 8.2 2 8.24l4.46 4.73L4.82 18z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }) {
  return (
    <article className="rounded-3xl bg-[var(--charcoal-gray)] ring-1 ring-white/5 p-8 md:p-10 text-white/90 shadow-[0_8px_40px_rgba(0,0,0,.35)]">
      <Stars />
      <p className="mt-4 text-white/80 leading-relaxed">{t.quote}</p>
      <div className="mt-6 flex items-center gap-4">
        <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" loading="lazy" />
        <div>
          <div className="font-semibold text-white">{t.name}</div>
          <div className="text-xs tracking-widest uppercase text-[var(--flame-orange)]">{t.role}</div>
        </div>
      </div>
    </article>
  );
}

export default function TestimonialsAuto() {
  // Speed: lower = faster (seconds for one full loop of the list)
  const SPEED_SECONDS = 24;

  return (
    <section className="relative py-20 bg-[var(--ink-black)] text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* LEFT SIDE: heading + copy + stats */}
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">Since from 2008</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Keep pushing forward.
            <br /> We&apos;ve got your back.
          </h2>
          <p className="mt-4 text-white/60 max-w-xl">
            Things go wrong have questions. We’ve understand. So we have people
          </p>
          <hr className="my-8 border-white/10" />
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-5xl font-extrabold">12k</div>
              <div className="mt-1 text-sm text-white/60 leading-5">
                Happy Users
                <br />
                Around World
              </div>
            </div>
            <div>
              <div className="text-5xl font-extrabold">150k</div>
              <div className="mt-1 text-sm text-white/60 leading-5">
                Projects
                <br />
                Already Done
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: vertical auto slider */}
        <div className="relative">
          {/* mask/fade edges like the screenshot */}
          <div className="pointer-events-none absolute -top-4 left-0 right-0 h-16 bg-gradient-to-b from-[var(--ink-black)] to-transparent z-10" />
          <div className="pointer-events-none absolute -bottom-4 left-0 right-0 h-16 bg-gradient-to-t from-[var(--ink-black)] to-transparent z-10" />

          {/* viewport */}
          <div className="h-[540px] overflow-hidden">
            {/* track (duplicate items for seamless loop) */}
            <ul
              className="flex flex-col gap-8 will-change-transform"
              style={{
                animation: `testimonial-scroll ${SPEED_SECONDS}s linear infinite`,
              }}
            >
              {ITEMS.map((t, i) => (
                <li key={`a-${i}`}>
                  <Card t={t} />
                </li>
              ))}
              {/* duplicate set for looping */}
              {ITEMS.map((t, i) => (
                <li key={`b-${i}`} aria-hidden="true">
                  <Card t={t} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* subtle vignette over whole section */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      {/* local keyframes */}
      <style jsx global>{`
        @keyframes testimonial-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </section>
  );
}
