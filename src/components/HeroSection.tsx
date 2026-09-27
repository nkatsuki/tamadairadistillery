'use client'

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[640px] overflow-hidden flex items-center"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/tamadaira-img-hero.jpg"
          alt="多摩平蒸留所 ヒーロービジュアル — 樽貯蔵庫"
          fill
          priority
          sizes="100vw"
          className="object-cover hero-pan"
          style={{ objectPosition: 'center 40%' }}
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(14,16,19,0.85) 0%, rgba(14,16,19,0.55) 50%, rgba(14,16,19,0.3) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40"
          style={{
            background: 'linear-gradient(to top, #0E1013 0%, transparent 100%)',
          }}
        />
      </div>

      {/* ── Water-line center accent ── */}
      <div
        className="absolute top-0 bottom-0 z-10 hidden lg:block"
        style={{ left: '50%', width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.18) 30%, rgba(212,175,55,0.18) 70%, transparent)' }}
      />

      {/* ── Drip Animation ── */}
      <div
        className="absolute z-10 hidden lg:flex flex-col items-center"
        style={{ left: '50%', top: '30%', transform: 'translateX(-50%)' }}
        aria-hidden="true"
      >
        {/* Drop */}
        <svg
          width="10"
          height="14"
          viewBox="0 0 10 14"
          className="drip-drop"
          style={{ fill: 'rgba(212,175,55,0.7)' }}
        >
          <path d="M5 0 C5 0 0 6 0 9 a5 5 0 0 0 10 0 C10 6 5 0 5 0Z" />
        </svg>
        {/* Ripple ring */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          className="drip-ripple -mt-1"
          style={{ fill: 'none', stroke: 'rgba(212,175,55,0.35)', strokeWidth: '1' }}
        >
          <ellipse cx="9" cy="9" rx="8" ry="4" />
        </svg>
      </div>

      {/* ── Main Content ── */}
      <div
        className="relative z-20 w-full max-w-6xl mx-auto px-[clamp(24px,5vw,80px)]
          flex items-center justify-between gap-12"
      >
        {/* Left: headline block */}
        <div className="flex flex-col max-w-xl">
          {/* Eyebrow */}
          <div className="section-label hero-fade-1">
            Craft Whisky · Hino-shi Tokyo
          </div>

          {/* Main title */}
          <h1
            className="hero-fade-2 font-serif leading-[1.25] tracking-[0.18em] mb-6"
            style={{ fontSize: 'clamp(2.4rem,6vw,4.2rem)' }}
          >
            多摩平蒸留所
          </h1>

          {/* Sub title EN */}
          <p
            className="hero-fade-2 font-latin tracking-[0.32em] text-gold mb-8"
            style={{ fontSize: 'clamp(0.85rem,1.6vw,1.05rem)' }}
          >
            TAMADAIRA DISTILLERY
          </p>

          {/* Tagline */}
          <p
            className="hero-fade-3 font-serif text-muted leading-[2.2] mb-10"
            style={{ fontSize: 'clamp(0.95rem,1.8vw,1.15rem)', letterSpacing: '0.1em' }}
          >
            緑と水が織りなす、<br className="hidden sm:block" />
            多摩平の新しい一滴。
          </p>

          {/* CTA */}
          <div className="hero-fade-4 flex flex-wrap gap-4">
            <a
              href="#news"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-sm tracking-[0.2em]
                font-medium transition-all duration-300"
              style={{
                background: 'linear-gradient(135deg,#D4AF37,#C59B27)',
                color: '#0E1013',
              }}
            >
              <span>最新情報を受け取る</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a
              href="#concept"
              className="inline-flex items-center gap-3 px-8 py-3.5 text-sm tracking-[0.2em]
                border border-[rgba(248,249,250,0.3)] text-offwhite
                hover:border-gold hover:text-gold transition-all duration-300"
            >
              コンセプトを見る
            </a>
          </div>
        </div>

        {/* Right: vertical copy */}
        <div
          className="hidden lg:flex flex-col items-center gap-6 hero-fade-3"
          style={{ minHeight: '260px' }}
        >
          <p
            className="writing-vertical font-serif text-muted leading-[2.5]
              tracking-[0.22em] text-sm"
          >
            緑と水が織りなす、多摩平の新しい一滴。
          </p>
          <div className="w-px flex-1 bg-gradient-to-b from-transparent via-[var(--line)] to-transparent" />
          <span className="font-latin text-[10px] tracking-[0.38em] text-gold rotate-90 whitespace-nowrap">
            EST. 2025
          </span>
        </div>
      </div>

      {/* ── Scroll Hint ── */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20
          flex flex-col items-center gap-2 scroll-hint"
        aria-hidden="true"
      >
        <span className="font-latin text-[9px] tracking-[0.38em] text-muted uppercase">Scroll</span>
        <svg width="14" height="22" viewBox="0 0 14 22" fill="none"
          stroke="rgba(160,174,192,0.7)" strokeWidth="1.2" strokeLinecap="round">
          <rect x="1" y="1" width="12" height="20" rx="6"/>
          <line x1="7" y1="5" x2="7" y2="9"/>
        </svg>
      </div>
    </section>
  )
}
