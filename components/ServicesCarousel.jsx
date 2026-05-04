// components/ServicesCarousel.jsx
"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";

const SERVICES = [
  {
    tag: "Mobile Solutions",
    title: "Mobile App Development",
    desc:
      "Creating a higher spacing and how people move through a unique.",
    href: "#",
    img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200&q=80&auto=format&fit=crop",
  },
  {
    tag: "Digital Marketing",
    title: "SEO & Marketing",
    desc:
      "Creating a higher spacing and how people move through a unique.",
    href: "#",
    img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&q=80&auto=format&fit=crop",
  },
  {
    tag: "Product Design",
    title: "Digital Product Design",
    desc:
      "Creating a higher spacing and how people move through a unique.",
    href: "#",
    img: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=200&q=80&auto=format&fit=crop",
  },
  {
    tag: "Creative Services",
    title: "Branding & Design",
    desc:
      "Creating a higher spacing and how people move through a unique.",
    href: "#",
    img: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=200&q=80&auto=format&fit=crop",
  },
  {
    tag: "Product Development",
    title: "Web Development",
    desc:
      "Creating a higher spacing and how people move through a unique.",
    href: "#",
    img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=200&q=80&auto=format&fit=crop",
  },
];

export default function ServicesCarousel() {
  const [active, setActive] = useState(2); // start center
  const n = SERVICES.length;
  const intervalRef = useRef(null);
  const isHovering = useRef(false);

  // ----- auto play (infinite) -----
  useEffect(() => {
    const tick = () => !isHovering.current && setActive((i) => (i + 1) % n);
    intervalRef.current = setInterval(tick, 3200);
    return () => clearInterval(intervalRef.current);
  }, [n]);

  const STEP = 380; // px distance between cards (card width + gap)

  // map -> position for each card relative to active (circular)
  const positions = useMemo(() => {
    return Array.from({ length: n }).map((_, i) => {
      const raw = (i - active + n) % n; // 0..n-1
      const offset = raw > n / 2 ? raw - n : raw; // shortest path [-floor(n/2), ceil(n/2)]
      const abs = Math.abs(offset);
      return {
        x: offset * STEP,
        scale: 1 - Math.min(abs * 0.06, 0.24),
        opacity: abs <= 2 ? 1 - abs * 0.2 : 0, // show only 5 around
        z: 100 - abs,
        isActive: offset === 0,
      };
    });
  }, [active, n]);

  return (
    <section
      className="relative py-16 md:py-24 bg-[var(--ink-black)] text-white overflow-hidden"
      onMouseEnter={() => (isHovering.current = true)}
      onMouseLeave={() => (isHovering.current = false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading (optional) */}
        <div className="mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold">Our Services</h2>
          <p className="mt-2 text-sm text-white/60">What we can help you with</p>
        </div>

        {/* Carousel stage */}
        <div className="relative h-[420px] md:h-[460px]">
          <div className="absolute inset-0">
            {SERVICES.map((item, i) => {
              const { x, scale, opacity, z, isActive } = positions[i];
              return (
                <ServiceCard
                  key={i}
                  item={item}
                  style={{
                    transform: `translateX(${x}px) scale(${scale})`,
                    opacity,
                    zIndex: z,
                  }}
                  active={isActive}
                />
              );
            })}
          </div>
        </div>

        {/* Dots (no arrows) */}
        <div className="mt-8 flex justify-center gap-3">
          {SERVICES.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === active
                  ? "w-6 bg-lime-400"
                  : "bg-white/25 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* subtle fades like screenshot */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--ink-black)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--ink-black)] to-transparent" />
    </section>
  );
}

function ServiceCard({ item, style, active }) {
  return (
    <article
      style={style}
      className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[360px] rounded-2xl p-6 md:p-8
        bg-[var(--charcoal-gray)]/70 backdrop-blur-[1px] border
        transition-all duration-500 ease-out
        ${active ? "border-lime-400/40 shadow-[0_20px_70px_rgba(0,0,0,.45)]" : "border-white/10"}
      `}
    >
      {/* tiny image */}
      <img
        src={item.img}
        alt=""
        className="h-6 w-6 object-cover rounded-sm opacity-80"
        loading="lazy"
      />

      {/* meta */}
      <div className="mt-4 text-xs tracking-widest uppercase text-white/60">
        {item.tag}
      </div>

      {/* title */}
      <h3
        className={`mt-1 text-xl md:text-2xl font-extrabold ${
          active ? "text-white" : "text-white"
        }`}
      >
        {item.title}
      </h3>

      {/* description */}
      <p className="mt-3 text-sm text-white/60">{item.desc}</p>

      {/* read more */}
      <a
        href={item.href}
        className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-lime-400 hover:text-lime-300"
      >
        READ MORE
        <svg width="14" height="14" viewBox="0 0 20 20" className="fill-current">
          <path d="M12.293 3.293 18 9l-5.707 5.707-1.414-1.414L13.172 10H2v-2h11.172l-2.293-3.293 1.414-1.414Z" />
        </svg>
      </a>
    </article>
  );
}
