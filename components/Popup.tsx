"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function Popup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Shows on every page load / refresh — no session suppression
    const t = setTimeout(() => setIsVisible(true), 700);
    return () => clearTimeout(t);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      onClick={() => setIsVisible(false)}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        backgroundColor: "rgba(0,0,0,0.78)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "1rem",
        animation: "popupFadeIn 0.4s ease forwards",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
          aspectRatio: "1 / 1",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          animation: "popupSlideUp 0.4s ease forwards",
          maxHeight: "calc(100vh - 2rem)",
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close"
          style={{
            position: "absolute", top: "12px", right: "12px", zIndex: 10,
            background: "rgba(0,0,0,0.55)", border: "2px solid rgba(255,255,255,0.25)",
            borderRadius: "50%", width: "38px", height: "38px",
            display: "flex", alignItems: "center", justifyContent: "center",
            cursor: "pointer", color: "#fff", transition: "background 0.2s, transform 0.2s",
          }}
          onMouseEnter={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background="rgba(0,0,0,0.9)"; b.style.transform="scale(1.1)"; }}
          onMouseLeave={(e) => { const b = e.currentTarget as HTMLButtonElement; b.style.background="rgba(0,0,0,0.55)"; b.style.transform="scale(1)"; }}
        >
          <X size={18} />
        </button>

        {/* Image — place your banner at /public/popup-banner.jpg */}
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/popup-banner.jpg"
            alt="Special Offer"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>

      <style jsx global>{`
        @keyframes popupFadeIn  { from { opacity:0 } to { opacity:1 } }
        @keyframes popupSlideUp { from { opacity:0; transform:translateY(28px) } to { opacity:1; transform:translateY(0) } }
      `}</style>
    </div>
  );
}
