"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import ModifiersPlugin from "gsap/all"
import Progress from "@/components/progress"
import Number from "../number"
import ContactForm from "../contactform"
import ContactButton from '../contact_button'

gsap.registerPlugin(Draggable, ModifiersPlugin)

export default function LogoDesignPage() {

  // Animation page
  const heading = "Video Editing"
  const banner_text = "Transform raw footage into powerful visual stories."
  const service_type = "Shaping Stories Frame by Frame"
  const service_para = "Our video editing services at InkspireFolio turn simple clips into cinematic experiences. Whether it’s for social media, promotional campaigns, or brand storytelling, we enhance visuals with seamless editing, professional pacing, and impactful transitions. Each video is tailored to reflect your voice while capturing audience attention and driving results."
  const Portfolio_heading = "Video Portfolio"
  const Portfolio_para = "We don’t just edit videos — we craft stories that connect emotionally and leave a lasting impact."
  const banner_img = "url(/logoDesign/banner.jpg)"
  const section_right_logo =
    "https://globaldesignsagency.com/assets/images/services/first-section/logo.png"

  const transforming_heading = "Transforming Visions into Brands";
  const transforming_text = "We do not tell you our story. We write it together. Partnering with us means a seat at the table where you will be heard.";

  return (
    <div className="min-h-screen bg-charcoal-gray">
      <Header />

      {/* Hero Banner Section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: banner_img }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-20 flex items-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="text-white">
              <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                {heading}
              </h1>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                {banner_text}
              </p>
            </div>

            {/* Right Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Logo Design Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl font-bold text-flame-orange mb-6">
                {service_type}
              </h2>
              <p className="text-white mb-6 leading-relaxed">
                {service_para}
              </p>
              <button className="bg-warm-orange text-white px-8 py-3 rounded-lg font-semibold bg-flame-orange hover:bg-warm-orange/90 transition-colors">
                Get Quote
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src={section_right_logo}
                alt="Logo Design Process"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Portfolio Section */}
      <section className="py-20">
        <div className="mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {Portfolio_heading}
            </h2>
            <p className="text-white max-w-2xl mx-auto">
              {Portfolio_para}
            </p>
          </div>

          <GsapReelSlider />
        </div>
      </section>

      {/* Progress Section */}
      <Progress />

      {/* Transforming Visions Section */}
      <section
        className="py-20 bg-white relative overflow-hidden"
        style={{
          backgroundImage:
            "url(https://globaldesignsagency.com/assets/images/call-background.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal-gray mb-6">
            {transforming_heading}
          </h2>
        <p className="text-charcoal-gray mb-12 max-w-3xl mx-auto text-lg leading-relaxed">
            {transforming_text}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactButton/>
            <div className="flex items-center gap-3 text-charcoal-gray">
              <div className="w-12 h-12 bg-flame-orange rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-sm text-charcoal-gray/70">Call Us 24/7</p>
                <p className="font-bold text-lg text-charcoal-gray"><Number/></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

type VideoItem = { id: number; src: string; poster: string; title?: string }

function GsapReelSlider() {
  const videos: VideoItem[] = [
    { id: 1, src: "https://cdn.pixabay.com/video/2025/08/20/298643_large.mp4", poster: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", title: "Logo Sketch Process" },
    { id: 2, src: "https://cdn.coverr.co/videos/coverr-graphic-designer-working-7884/1080p.mp4", poster: "https://images.unsplash.com/photo-1511871893393-82e9c16b81e2?q=80&w=600&auto=format&fit=crop", title: "Monogram Iterations" },
    { id: 3, src: "https://cdn.coverr.co/videos/coverr-creative-brainstorming-1250/1080p.mp4", poster: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop", title: "Brand Board Preview" },
    { id: 4, src: "https://cdn.coverr.co/videos/coverr-woman-sketching-1278/1080p.mp4", poster: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", title: "Sketch Process 2" },
    { id: 5, src: "https://cdn.coverr.co/videos/coverr-graphic-designer-working-7884/1080p.mp4", poster: "https://images.unsplash.com/photo-1511871893393-82e9c16b81e2?q=80&w=600&auto=format&fit=crop", title: "Monogram 2" },
    { id: 6, src: "https://cdn.coverr.co/videos/coverr-creative-brainstorming-1250/1080p.mp4", poster: "/logos/logo-05.png", title: "Brand Board 2" },
  ]

  // UI state
  const [open, setOpen] = useState(false)
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null)

  // Refs
  const viewportRef = useRef<HTMLDivElement | null>(null)   // mask/viewport
  const trackRef = useRef<HTMLDivElement | null>(null)      // slides track
  const wasDragging = useRef(false)                         // click vs drag guard

  // autoplay
  const directionRef = useRef<1 | -1>(1)                    // 1 => left, -1 => right
  const speedPxPerSec = 60                                 // autoplay speed
  const rafId = useRef<number | null>(null)

  // duplicate slides once to enable seamless wrap
  const items = [...videos, ...videos]

  // helper: measure & keep x within [-contentWidth, 0]
  const stateRef = useRef({ x: 0, contentWidth: 0 })

  const startAutoplay = () => {
    stopAutoplay()
    const tick = () => {
      const track = trackRef.current
      if (!track) return
      // delta time normalized to 60fps
      const delta = gsap.ticker.deltaRatio()
      const move = directionRef.current * (speedPxPerSec / 60) * delta
      stateRef.current.x += -move // move left for dir=1
      // wrap within [-contentWidth, 0]
      const w = stateRef.current.contentWidth
      if (w > 0) {
        if (stateRef.current.x <= -w) stateRef.current.x += w
        if (stateRef.current.x > 0) stateRef.current.x -= w
      }
      gsap.set(track, { x: stateRef.current.x, force3D: true })
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)
  }

  const stopAutoplay = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current)
    rafId.current = null
  }

  // measure widths on mount & resize
  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current
      if (!track) return
      // contentWidth = width of first set (half of children)
      const slides = track.children
      const half = Math.floor(slides.length / 2)
      let width = 0
      for (let i = 0; i < half; i++) {
        const el = slides[i] as HTMLElement
        const rect = el.getBoundingClientRect()
        const style = window.getComputedStyle(el)
        const marginLeft = parseFloat(style.marginLeft || "0")
        const marginRight = parseFloat(style.marginRight || "0")
        width += rect.width + marginLeft + marginRight
      }
      stateRef.current.contentWidth = width
      // keep x in bounds
      if (stateRef.current.x <= -width) stateRef.current.x += width
      if (stateRef.current.x > 0) stateRef.current.x -= width
      gsap.set(track, { x: stateRef.current.x })
    }

    measure()
    const ro = new ResizeObserver(measure)
    if (viewportRef.current) ro.observe(viewportRef.current)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener("resize", measure)

    startAutoplay() // ensure autoplay running

    return () => {
      ro.disconnect()
      window.removeEventListener("resize", measure)
      stopAutoplay()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // GSAP Draggable for swipe/drag
  useEffect(() => {
    const track = trackRef.current
    const viewport = viewportRef.current
    if (!track || !viewport) return

    let lastX = 0

    const d = Draggable.create(track, {
      type: "x",
      bounds: { minX: -Infinity, maxX: Infinity },
      edgeResistance: 0.85,
      onPress() {
        stopAutoplay()
        wasDragging.current = false
        lastX = this.x
      },
      onDrag() {
        wasDragging.current = true
        // manual wrap while dragging
        const w = stateRef.current.contentWidth
        let nx = this.x
        if (w > 0) {
          while (nx <= -w) nx += w
          while (nx > 0) nx -= w
        }
        stateRef.current.x = nx
        gsap.set(track, { x: nx })
      },
      onRelease() {
        // detect drag direction & set autoplay direction accordingly
        const dx = this.x - lastX
        if (Math.abs(dx) > 6) {
          directionRef.current = dx < 0 ? 1 : -1 // left drag → forward
        }
        startAutoplay()
        // small tap shouldn't open modal by accident; handled in onClick below with wasDragging flag
        setTimeout(() => (wasDragging.current = false), 0)
      },
      // We don't use inertia (paid plugin). Keeps behavior predictable.
    })[0]

    return () => {
      d && d.kill()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const openModal = (item: VideoItem) => {
    setActiveVideo(item)
    setOpen(true)
  }
  const closeModal = () => {
    setOpen(false)
    setTimeout(() => setActiveVideo(null), 150)
  }

  return (
    <>
      {/* Viewport */}
      <div ref={viewportRef} className="relative w-full overflow-hidden">
        {/* Track */}
        <div
          ref={trackRef}
          className="flex gap-4 will-change-transform select-none cursor-grab active:cursor-grabbing"
          style={{ touchAction: "pan-y" }} // allow horizontal dragging
        >
          {items.map((v, idx) => (
            <SlideCard
              key={`${v.id}-${idx}`}
              item={v}
              onClick={() => {
                // If there was a real drag, ignore the click
                if (wasDragging.current) return
                openModal(v)
              }}
            />
          ))}
        </div>
      </div>

      <VideoModal open={open} onClose={closeModal} video={activeVideo} />
    </>
  )
}

function SlideCard({ item, onClick }: { item: VideoItem; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      role="button"
      className="shrink-0"
      // Fixed widths give consistent feel; more slides appear as screen grows
      style={{ width: "clamp(200px, 23vw, 320px)" }}
    >
      <div className="relative rounded-xl overflow-hidden shadow-lg border border-gray-200">
        {/* Reel aspect */}
        <div className="aspect-[9/16] bg-black">
          <img
            src={item.poster}
            alt={item.title ?? "video thumbnail"}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors" />
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-white/90 hover:bg-white shadow-md transition">
              <svg viewBox="0 0 24 24" className="h-7 w-7 text-charcoal-gray">
                <path d="M8 5v14l11-7z" fill="currentColor" />
              </svg>
            </span>
          </div>
        </div>
        <div className="p-3 bg-white text-center">
          <p className="text-sm font-medium text-charcoal-gray line-clamp-1">{item.title}</p>
          <p className="text-xs text-gray-500 mt-0.5">Tap to play</p>
        </div>
      </div>
    </div>
  )
}

function VideoModal({
  open,
  onClose,
  video,
}: {
  open: boolean
  onClose: () => void
  video: VideoItem | null
}) {
  if (!open || !video) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center" aria-modal="true" role="dialog">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" onClick={onClose} />
      <div className="relative z-10 w-full max-w-[420px] md:max-w-[520px] px-4">
        <div className="rounded-2xl overflow-hidden bg-black shadow-2xl border border-white/10">
          <div className="aspect-[9/16]">
            <video
              key={video.src}
              src={video.src}
              controls
              autoPlay
              playsInline
              className="h-full w-full object-contain bg-black"
            />
          </div>
          <div className="flex items-center justify-between px-3 py-2 bg-black">
            <p className="text-white/90 text-sm truncate">{video.title ?? "Video"}</p>
            <button
              onClick={onClose}
              className="rounded-md p-2 hover:bg-white/10 text-white"
              aria-label="Close"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
