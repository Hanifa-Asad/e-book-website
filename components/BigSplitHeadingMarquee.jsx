// components/BigSplitHeadingMarquee.jsx — UPDATED: reduced height & font size
"use client";
import React from "react";

export default function BigSplitHeadingMarquee({
  text,
  speed = 22,
  solidRatio = 0.55,
  repeat = 6,
  gap = 40,
}) {
  const mask = `linear-gradient(to right, black 0%, black ${solidRatio * 100}%, transparent ${solidRatio * 100}%, transparent 100%)`;

  return (
    <section className="relative overflow-hidden bg-[var(--ink-black)]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-[var(--ink-black)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-[var(--ink-black)] to-transparent" />

      {/* viewport — reduced vertical padding */}
      <div
        className="relative mx-auto max-w-[100vw] py-3 md:py-4 overflow-hidden"
        style={{ "--gap": `${gap}px`, "--speed": `${speed}s` }}
      >
        <div
          className="marquee-track flex will-change-transform"
          style={{ animation: "marquee var(--speed) linear infinite" }}
        >
          <Row text={text} repeat={repeat} mask={mask} />
          <Row text={text} repeat={repeat} mask={mask} aria-hidden />
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}

function Row({ text, repeat, mask }) {
  return (
    <div className="flex items-center shrink-0">
      {Array.from({ length: repeat }).map((_, i) => (
        <Word key={i} text={text} mask={mask} />
      ))}
    </div>
  );
}

function Word({ text, mask }) {
  return (
    <div className="relative mr-[var(--gap)] last:mr-0 select-none">
      {/* Outlined base — reduced font size from clamp(64px,12vw,220px) to clamp(36px,6vw,100px) */}
      <span
        className="pointer-events-none block font-extrabold uppercase leading-none whitespace-nowrap"
        style={{
          fontSize: "clamp(36px, 6vw, 100px)",
          WebkitTextStroke: "1px rgba(255,255,255,0.15)",
          color: "transparent",
        }}
        aria-hidden="true"
      >
        {text}
      </span>

      {/* Solid overlay */}
      <span
        className="absolute inset-0 block text-white font-extrabold uppercase leading-none whitespace-nowrap"
        style={{
          fontSize: "clamp(36px, 6vw, 100px)",
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      >
        {text}
      </span>
    </div>
  );
}
