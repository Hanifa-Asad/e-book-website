// components/BigSplitHeadingMarquee.jsx
"use client";
import React from "react";

export default function BigSplitHeadingMarquee({
  text,
  speed = 22,
  solidRatio = 0.55,
  repeat = 6,
  gap = 64,
}) {
  const mask = `linear-gradient(to right, black 0%, black ${solidRatio * 100}%, transparent ${solidRatio *
    100}%, transparent 100%)`;

  return (
    <section className="relative overflow-hidden bg-[var(--ink-black)]">
      {/* subtle top/bottom fades (optional) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[var(--ink-black)] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[var(--ink-black)] to-transparent" />

      {/* viewport */}
      <div
        className="relative mx-auto max-w-[100vw] py-8 md:py-10 lg:py-12 overflow-hidden"
        style={{ "--gap": `${gap}px`, "--speed": `${speed}s` }}
      >
        {/* track (two identical rows -> seamless loop) */}
        <div className="marquee-track flex will-change-transform"
             style={{ animation: "marquee var(--speed) linear infinite" }}>
          <Row text={text} repeat={repeat} mask={mask} />
          <Row text={text} repeat={repeat} mask={mask} aria-hidden />
        </div>
      </div>

      {/* keyframes */}
      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); } /* move by exactly one row width */
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
      {/* Outlined base */}
      <span
        className="pointer-events-none block font-extrabold uppercase leading-none whitespace-nowrap
                   [font-size:clamp(64px,12vw,220px)]"
        style={{
          WebkitTextStroke: "1px rgba(255,255,255,0.15)",
          color: "transparent",
        }}
        aria-hidden="true"
      >
        {text}
      </span>

      {/* Solid overlay (masked to left portion) */}
      <span
        className="absolute inset-0 block text-white font-extrabold uppercase leading-none whitespace-nowrap
                   [font-size:clamp(64px,12vw,220px)]"
        style={{
          WebkitMaskImage: mask,
          maskImage: mask,
        }}
      >
        {text}
      </span>
    </div>
  );
}
