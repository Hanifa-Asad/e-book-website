"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, CheckCircle, Star, Award, Users, Clock, Shield, Zap } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface Feature { title: string; description: string; }
interface Crumb   { label: string; href: string; }
interface ProcessStep { title: string; description: string; }
interface WhyChooseItem { title: string; description: string; icon: string; }
interface HeroImage { src: string; alt: string; label?: string; }
interface PortfolioItem { title: string; description: string; badge?: string; image?: string; actionText?: string; actionHref?: string; }

interface Props {
  breadcrumb: Crumb[];
  subtitle: string;
  title: string;
  heroDescription: string;
  heroImages?: HeroImage[];
  features: Feature[];
  processSteps?: ProcessStep[];
  whyChooseItems?: WhyChooseItem[];
  portfolio?: PortfolioItem[];
  ctaText?: string;
}

const iconMap = {
  check: CheckCircle,
  star: Star,
  award: Award,
  users: Users,
  clock: Clock,
  shield: Shield,
  zap: Zap,
};

export default function ServicePageTemplate({
  breadcrumb,
  subtitle,
  title,
  heroDescription,
  heroImages = [],
  features,
  processSteps = [],
  whyChooseItems = [],
  portfolio = [],
  ctaText = "Get a Free Quote"
}: Props) {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const hasHeroImages = heroImages.length > 0;
  const activeHero = heroImages[activeHeroIndex] || heroImages[0];

  const selectPreviousHero = () => {
    if (!heroImages.length) return;
    setActiveHeroIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const selectNextHero = () => {
    if (!heroImages.length) return;
    setActiveHeroIndex((prev) => (prev + 1) % heroImages.length);
  };
  return (
    <>
      <Header />
      <main className="pt-[88px]">

        {/* Breadcrumb */}
        <div style={{ background:"var(--charcoal-gray)", borderBottom:"1px solid rgba(255,255,255,0.08)", padding:"0.6rem 1.5rem" }}>
          <div style={{ maxWidth:1280, margin:"0 auto", display:"flex", alignItems:"center", flexWrap:"wrap", gap:"0.3rem", fontSize:"0.72rem", letterSpacing:"0.04em" }}>
            {breadcrumb.map((c, i) => (
              <span key={c.href} style={{ display:"flex", alignItems:"center", gap:"0.25rem" }}>
                {i > 0 && <ChevronRight size={12} style={{ color:"rgba(249,247,242,0.3)" }} />}
                {i === breadcrumb.length - 1
                  ? <span style={{ color:"var(--flame-orange)", fontWeight:600 }}>{c.label}</span>
                  : <Link href={c.href} style={{ color:"rgba(249,247,242,0.55)", textDecoration:"none" }}>{c.label}</Link>}
              </span>
            ))}
          </div>
        </div>

        {/* Enhanced Hero */}
        <section style={{
          background:"linear-gradient(135deg, var(--charcoal-gray) 0%, #2a2a2a 100%)",
          padding:"6rem 1.5rem 5rem",
          position:"relative",
          overflow:"hidden"
        }}>
          <div style={{
            position:"absolute",
            top:0,
            left:0,
            right:0,
            bottom:0,
            background:"radial-gradient(circle at 30% 20%, rgba(255,107,0,0.1) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,107,0,0.05) 0%, transparent 50%)",
            pointerEvents:"none"
          }} />
          <div style={{ maxWidth:1280, margin:"0 auto", position:"relative", zIndex:1 }}>
            <p style={{
              fontSize:"0.8rem",
              fontWeight:700,
              letterSpacing:"0.15em",
              textTransform:"uppercase",
              color:"var(--flame-orange)",
              marginBottom:"1.5rem",
              display:"inline-block",
              padding:"0.5rem 1rem",
              background:"rgba(255,107,0,0.1)",
              borderRadius:"25px",
              border:"1px solid rgba(255,107,0,0.2)"
            }}>{subtitle}</p>
            <div style={{
              display:"grid",
              gridTemplateColumns: hasHeroImages ? "1.15fr 0.85fr" : "1fr",
              gap:"2rem",
              alignItems:"center"
            }}>
              <div style={{ textAlign: hasHeroImages ? "left" : "center" }}>
                <h1 style={{
                  fontSize:"clamp(2.5rem,6vw,4rem)",
                  fontWeight:900,
                  color:"var(--warm-white)",
                  lineHeight:1.05,
                  marginBottom:"1.5rem",
                  textShadow:"0 2px 4px rgba(0,0,0,0.3)"
                }}>{title}</h1>
                <p style={{
                  fontSize:"1.1rem",
                  color:"rgba(249,247,242,0.8)",
                  lineHeight:1.75,
                  marginBottom:"2.5rem",
                  maxWidth: hasHeroImages ? "100%" : "700px",
                }}>{heroDescription}</p>
                <div style={{ display:"flex", gap:"1rem", flexWrap:"wrap", justifyContent: hasHeroImages ? "flex-start" : "center", alignItems:"center" }}>
                  <Link href="/contact" style={{
                    display:"inline-block",
                    padding:"1rem 2.5rem",
                    background:"var(--flame-orange)",
                    color:"#fff",
                    fontSize:"0.9rem",
                    fontWeight:700,
                    letterSpacing:"0.08em",
                    textTransform:"uppercase",
                    textDecoration:"none",
                    borderRadius:"8px",
                    boxShadow:"0 4px 15px rgba(255,107,0,0.3)",
                    transition:"all 0.3s ease",
                    border:"2px solid var(--flame-orange)"
                  }}>{ctaText}</Link>
                  <a href="tel:+13136127389" style={{
                    display:"inline-block",
                    padding:"1rem 2.5rem",
                    background:"transparent",
                    color:"var(--warm-white)",
                    fontSize:"0.9rem",
                    fontWeight:700,
                    letterSpacing:"0.08em",
                    textTransform:"uppercase",
                    textDecoration:"none",
                    borderRadius:"8px",
                    border:"2px solid rgba(249,247,242,0.3)",
                    transition:"all 0.3s ease"
                  }}>Call Now</a>
                </div>
              </div>

              {hasHeroImages && activeHero && (
                <div style={{ display:"flex", flexDirection:"column", gap:"1rem" }}>
                  <div style={{
                    position:"relative",
                    minHeight:"420px",
                    borderRadius:"24px",
                    overflow:"hidden",
                    boxShadow:"0 30px 80px rgba(0,0,0,0.45)"
                  }}>
                    <Image src={activeHero.src} alt={activeHero.alt} fill style={{ objectFit:"cover" }} />
                    <div style={{
                      position:"absolute",
                      left:0,
                      right:0,
                      bottom:0,
                      padding:"1rem 1.25rem",
                      background:"linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.7) 100%)",
                      color:"#fff",
                      display:"flex",
                      justifyContent:"space-between",
                      alignItems:"center"
                    }}>
                      <span style={{ fontSize:"0.95rem", fontWeight:700 }}>{activeHero.label || `${activeHeroIndex + 1} of ${heroImages.length}`}</span>
                      <span style={{ fontSize:"0.85rem", opacity:0.9 }}>{activeHero.alt}</span>
                    </div>
                  </div>

                  <div style={{ display:"flex", justifyContent:"space-between", gap:"0.75rem" }}>
                    <button onClick={selectPreviousHero} type="button" style={{
                      flex:1,
                      padding:"0.95rem 1rem",
                      background:"rgba(255,255,255,0.08)",
                      color:"#fff",
                      border:"1px solid rgba(255,255,255,0.15)",
                      borderRadius:"12px",
                      cursor:"pointer",
                      transition:"all 0.25s ease"
                    }}>Previous</button>
                    <button onClick={selectNextHero} type="button" style={{
                      flex:1,
                      padding:"0.95rem 1rem",
                      background:"var(--flame-orange)",
                      color:"#111",
                      border:"1px solid var(--flame-orange)",
                      borderRadius:"12px",
                      cursor:"pointer",
                      transition:"all 0.25s ease"
                    }}>Next</button>
                  </div>

                  <div style={{ display:"flex", gap:"0.75rem", flexWrap:"wrap", justifyContent:"center" }}>
                    {heroImages.map((item, index) => (
                      <button key={item.src} onClick={() => setActiveHeroIndex(index)} type="button" style={{
                        width:72,
                        height:56,
                        borderRadius:14,
                        border: index === activeHeroIndex ? "2px solid var(--flame-orange)" : "1px solid rgba(255,255,255,0.18)",
                        overflow:"hidden",
                        background:"rgba(255,255,255,0.03)",
                        padding:0,
                        cursor:"pointer"
                      }} aria-label={`Show slide ${index + 1}`}>
                        <Image src={item.src} alt={item.alt} width={72} height={56} style={{ objectFit:"cover" }} />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Features */}
        <section style={{ padding:"5rem 1.5rem", background:"#1a1a1a" }}>
          <div style={{ maxWidth:1280, margin:"0 auto" }}>
            <div style={{ textAlign:"center", marginBottom:"3rem" }}>
              <h2 style={{
                fontSize:"clamp(2rem,4vw,2.5rem)",
                fontWeight:800,
                color:"var(--warm-white)",
                marginBottom:"1rem"
              }}>What We Offer</h2>
              <p style={{
                fontSize:"1rem",
                color:"rgba(249,247,242,0.7)",
                maxWidth:"600px",
                margin:"0 auto",
                lineHeight:1.6
              }}>Professional services tailored to bring your vision to life with excellence and precision.</p>
            </div>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill,minmax(320px,1fr))",
              gap:"2rem"
            }}>
              {features.map((f, index) => (
                <div key={f.title} style={{
                  background:"var(--charcoal-gray)",
                  borderRadius:"12px",
                  padding:"2rem",
                  border:"1px solid rgba(255,255,255,0.08)",
                  transition:"all 0.3s ease",
                  position:"relative",
                  overflow:"hidden"
                }}
                  onMouseEnter={(e)=>{
                    (e.currentTarget as HTMLDivElement).style.transform="translateY(-8px)";
                    (e.currentTarget as HTMLDivElement).style.boxShadow="0 20px 40px rgba(0,0,0,0.4)";
                    (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,107,0,0.3)";
                  }}
                  onMouseLeave={(e)=>{
                    (e.currentTarget as HTMLDivElement).style.transform="";
                    (e.currentTarget as HTMLDivElement).style.boxShadow="";
                    (e.currentTarget as HTMLDivElement).style.borderColor="rgba(255,255,255,0.08)";
                  }}>
                  <div style={{
                    position:"absolute",
                    top:0,
                    left:0,
                    width:"4px",
                    height:"100%",
                    background:"var(--flame-orange)",
                    opacity:0.8
                  }} />
                  <div style={{
                    width:40,
                    height:4,
                    background:"var(--flame-orange)",
                    borderRadius:2,
                    marginBottom:"1.5rem"
                  }} />
                  <h3 style={{
                    fontSize:"1.1rem",
                    fontWeight:700,
                    color:"var(--warm-white)",
                    marginBottom:"1rem",
                    lineHeight:1.3
                  }}>{f.title}</h3>
                  <p style={{
                    fontSize:"0.9rem",
                    color:"rgba(249,247,242,0.7)",
                    lineHeight:1.6
                  }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        {portfolio.length > 0 && (
          <section style={{ padding:"5rem 1.5rem", background:"#111" }}>
            <div style={{ maxWidth:1280, margin:"0 auto" }}>
              <div style={{ textAlign:"center", marginBottom:"3rem" }}>
                <h2 style={{
                  fontSize:"clamp(2rem,4vw,2.5rem)",
                  fontWeight:800,
                  color:"var(--warm-white)",
                  marginBottom:"1rem"
                }}>Sample Work</h2>
                <p style={{
                  fontSize:"1rem",
                  color:"rgba(249,247,242,0.7)",
                  maxWidth:"620px",
                  margin:"0 auto",
                  lineHeight:1.6
                }}>A selection of sample projects that show our premium quality, storytelling, and design expertise for every service.</p>
              </div>
              <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
                gap:"1.75rem"
              }}>
                {portfolio.map((item) => (
                  <div key={item.title} style={{
                    background:"var(--charcoal-gray)",
                    borderRadius:"20px",
                    overflow:"hidden",
                    border:"1px solid rgba(255,255,255,0.08)",
                    boxShadow:"0 30px 60px rgba(0,0,0,0.22)",
                    transition:"transform 0.3s ease, box-shadow 0.3s ease"
                  }}>
                    {item.image && (
                      <div style={{ position:"relative", width:"100%", aspectRatio:"16 / 10", overflow:"hidden" }}>
                        <Image src={item.image} alt={item.title} fill style={{ objectFit:"cover" }} />
                      </div>
                    )}
                    <div style={{ padding:"1.75rem 1.75rem 2rem" }}>
                      {item.badge && (
                        <span style={{
                          display:"inline-block",
                          padding:"0.35rem 0.9rem",
                          background:"rgba(255,107,0,0.12)",
                          color:"var(--flame-orange)",
                          fontSize:"0.78rem",
                          fontWeight:700,
                          borderRadius:"999px",
                          marginBottom:"1rem"
                        }}>{item.badge}</span>
                      )}
                      <h3 style={{
                        fontSize:"1.2rem",
                        fontWeight:800,
                        color:"var(--warm-white)",
                        marginBottom:"1rem"
                      }}>{item.title}</h3>
                      <p style={{
                        fontSize:"0.96rem",
                        color:"rgba(249,247,242,0.75)",
                        lineHeight:1.75,
                        marginBottom:"1.75rem"
                      }}>{item.description}</p>
                      <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", gap:"1rem", flexWrap:"wrap" }}>
                        <Link href={item.actionHref || "/contact"} style={{
                          display:"inline-flex",
                          alignItems:"center",
                          justifyContent:"center",
                          padding:"0.95rem 1.25rem",
                          background:"var(--flame-orange)",
                          color:"#111",
                          fontWeight:700,
                          textDecoration:"none",
                          borderRadius:"999px",
                          transition:"background 0.3s ease"
                        }}>{item.actionText || "View Case Study"}</Link>
                        <span style={{
                          color:"rgba(249,247,242,0.65)",
                          fontSize:"0.85rem",
                          letterSpacing:"0.08em"
                        }}>Portfolio sample</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Process Steps */}
        {processSteps.length > 0 && (
          <section style={{ padding:"5rem 1.5rem", background:"var(--charcoal-gray)" }}>
            <div style={{ maxWidth:1280, margin:"0 auto" }}>
              <div style={{ textAlign:"center", marginBottom:"3rem" }}>
                <h2 style={{
                  fontSize:"clamp(2rem,4vw,2.5rem)",
                  fontWeight:800,
                  color:"var(--warm-white)",
                  marginBottom:"1rem"
                }}>Our Process</h2>
                <p style={{
                  fontSize:"1rem",
                  color:"rgba(249,247,242,0.7)",
                  maxWidth:"600px",
                  margin:"0 auto",
                  lineHeight:1.6
                }}>A streamlined approach to deliver exceptional results every time.</p>
              </div>
              <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
                gap:"2rem"
              }}>
                {processSteps.map((step, index) => (
                  <div key={step.title} style={{
                    textAlign:"center",
                    padding:"2rem",
                    background:"rgba(255,255,255,0.02)",
                    borderRadius:"12px",
                    border:"1px solid rgba(255,255,255,0.05)",
                    position:"relative"
                  }}>
                    <div style={{
                      width:"60px",
                      height:"60px",
                      background:"var(--flame-orange)",
                      borderRadius:"50%",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                      margin:"0 auto 1.5rem",
                      fontSize:"1.5rem",
                      fontWeight:"bold",
                      color:"#fff",
                      boxShadow:"0 4px 15px rgba(255,107,0,0.3)"
                    }}>
                      {index + 1}
                    </div>
                    <h3 style={{
                      fontSize:"1.1rem",
                      fontWeight:700,
                      color:"var(--warm-white)",
                      marginBottom:"1rem"
                    }}>{step.title}</h3>
                    <p style={{
                      fontSize:"0.9rem",
                      color:"rgba(249,247,242,0.7)",
                      lineHeight:1.6
                    }}>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us */}
        <section style={{
          background:"linear-gradient(135deg, var(--flame-orange) 0%, #e55a00 100%)",
          padding:"5rem 1.5rem",
          textAlign:"center",
          color:"#fff",
          position:"relative",
          overflow:"hidden"
        }}>
          <div style={{
            position:"absolute",
            top:0,
            left:0,
            right:0,
            bottom:0,
            background:"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%)",
            pointerEvents:"none"
          }} />
          <div style={{ maxWidth:800, margin:"0 auto", position:"relative", zIndex:1 }}>
            <h2 style={{
              fontSize:"clamp(2rem,4vw,2.5rem)",
              fontWeight:800,
              marginBottom:"1rem",
              textShadow:"0 2px 4px rgba(0,0,0,0.3)"
            }}>Ready to Transform Your Vision?</h2>
            <p style={{
              fontSize:"1rem",
              opacity:0.95,
              marginBottom:"2.5rem",
              lineHeight:1.6,
              maxWidth:"600px",
              margin:"0 auto 2.5rem"
            }}>Join thousands of satisfied clients who have turned their publishing dreams into reality with our expert services.</p>
            <div style={{ display:"flex", gap:"1.5rem", flexWrap:"wrap", justifyContent:"center", alignItems:"center" }}>
              <Link href="/contact" style={{
                display:"inline-block",
                padding:"1rem 2.5rem",
                background:"var(--ink-black,#000)",
                color:"#fff",
                fontSize:"0.9rem",
                fontWeight:700,
                letterSpacing:"0.08em",
                textTransform:"uppercase",
                textDecoration:"none",
                borderRadius:"8px",
                boxShadow:"0 4px 15px rgba(0,0,0,0.3)",
                transition:"all 0.3s ease",
                border:"2px solid var(--ink-black,#000)"
              }}>Start Your Journey</Link>
              <a href="tel:+13136127389" style={{
                display:"inline-block",
                padding:"1rem 2.5rem",
                background:"transparent",
                color:"#fff",
                fontSize:"0.9rem",
                fontWeight:700,
                letterSpacing:"0.08em",
                textTransform:"uppercase",
                textDecoration:"none",
                borderRadius:"8px",
                border:"2px solid #fff",
                transition:"all 0.3s ease"
              }}>+1 3136127389</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
