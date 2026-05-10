"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { navItems, type NavItem } from "@/lib/navigation";

/* ── Desktop dropdown panel ───────────────────────────────────────────── */
function DropdownPanel({ items, onClose }: { items: NavItem[]; onClose: () => void }) {
  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[220px] bg-[var(--warm-white)] rounded-2xl shadow-xl border border-flame-orange/20 py-2 z-50">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href!}
          onClick={onClose}
          className="block px-5 py-2.5 text-sm font-medium text-[var(--charcoal-gray)] hover:text-[var(--flame-orange)] hover:bg-[var(--flame-orange)]/5 transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

/* ── Single nav item (link or dropdown trigger) ───────────────────────── */
function NavItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (!item.children) {
    return (
      <Link href={item.href!} className="text-sm font-medium text-[var(--charcoal-gray)] hover:text-[var(--flame-orange)] transition-colors whitespace-nowrap">
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm font-medium text-[var(--charcoal-gray)] hover:text-[var(--flame-orange)] transition-colors whitespace-nowrap cursor-pointer"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <DropdownPanel items={item.children} onClose={() => setOpen(false)} />}
    </div>
  );
}

/* ── Mobile accordion item ────────────────────────────────────────────── */
function MobileItem({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link href={item.href!} onClick={onClose}
        className="block px-3 py-2 text-sm font-medium text-[var(--charcoal-gray)] hover:text-[var(--flame-orange)] rounded-lg hover:bg-[var(--flame-orange)]/5">
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button type="button" onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-[var(--charcoal-gray)] hover:text-[var(--flame-orange)] rounded-lg hover:bg-[var(--flame-orange)]/5 cursor-pointer">
        {item.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="ml-4 mt-1 space-y-1 border-l-2 border-[var(--flame-orange)]/20 pl-3">
          {item.children.map((child) => (
            <Link key={child.href} href={child.href!} onClick={onClose}
              className="block py-1.5 text-sm text-[var(--charcoal-gray)]/80 hover:text-[var(--flame-orange)] transition-colors">
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Header ──────────────────────────────────────────────────────── */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-18 py-3">
      <div className="container mx-auto">
        <div className="bg-[var(--warm-white)] rounded-2xl px-6 py-4 shadow-lg">
          <div className="flex items-center justify-between gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image src="/logos/logo-01.png" alt="Inkspire Folio" width={180} height={60} className="h-12 w-auto" />
              <Image src="/logos/logo-03.png" alt="Inkspire Folio" width={180} height={60} className="h-12 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-4 flex-nowrap">
              {navItems.map((item) => (
                <NavItem key={item.label} item={item} />
              ))}
            </nav>

            {/* Mobile toggle */}
            <button type="button" onClick={() => setIsMenuOpen((v) => !v)} className="lg:hidden text-[var(--charcoal-gray)] hover:text-[var(--flame-orange)] cursor-pointer">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile drawer */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 space-y-1">
              {navItems.map((item) => (
                <MobileItem key={item.label} item={item} onClose={() => setIsMenuOpen(false)} />
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
