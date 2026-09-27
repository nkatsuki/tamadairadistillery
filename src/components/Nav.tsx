'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { href: '#concept',    label: 'コンセプト' },
  { href: '#distillery', label: '蒸留所・バー' },
  { href: '#products',   label: '商品' },
  { href: '#news',       label: 'お知らせ' },
  { href: '#access',     label: 'アクセス' },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* lock body scroll while mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      {/* ── Desktop / sticky nav ── */}
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-[1000]',
          'flex items-center justify-between',
          'px-[clamp(20px,4vw,56px)]',
          'transition-all duration-300',
          scrolled
            ? 'h-[58px] bg-[rgba(14,16,19,0.88)] backdrop-blur-md border-b border-[var(--line-soft)]'
            : 'h-[68px] border-b border-transparent',
        ].join(' ')}
      >
        {/* Brand */}
        <a href="#" className="flex flex-col leading-tight">
          <span className="font-serif text-[17px] font-semibold tracking-[0.32em] text-[var(--text)]">
            多摩平蒸留所
          </span>
          <span className="font-latin text-[10px] tracking-[0.42em] text-[var(--gold)] mt-0.5">
            TAMADAIRA DISTILLERY
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-[clamp(14px,2.2vw,34px)]">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={[
                  'text-[12.5px] tracking-[0.14em] text-[var(--muted)]',
                  'relative py-1.5 transition-colors duration-300 hover:text-[var(--text)]',
                  'after:absolute after:left-0 after:bottom-0 after:h-px after:w-0',
                  'after:bg-[var(--gold)] after:transition-all after:duration-300',
                  'hover:after:w-full',
                ].join(' ')}
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#news"
              className={[
                'text-[12.5px] tracking-[0.14em]',
                'border border-[var(--gold)] text-[var(--gold)]',
                'px-5 py-2 transition-colors duration-300',
                'hover:bg-[var(--gold)] hover:text-[var(--ink)]',
              ].join(' ')}
            >
              事前登録
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[6px] w-11 h-11 items-center justify-center bg-transparent border-none cursor-pointer z-[1001]"
          aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          <span className={`block w-6 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block w-6 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[var(--text)] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* ── Mobile overlay ── */}
      <div
        className={`nav-mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="font-serif text-2xl tracking-[0.28em] text-[var(--text)] hover:text-[var(--gold)] transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
        <a
          href="#news"
          className="border border-[var(--gold)] text-[var(--gold)] px-8 py-3 text-sm tracking-widest mt-4 hover:bg-[var(--gold)] hover:text-[var(--ink)] transition-colors"
          onClick={() => setMenuOpen(false)}
        >
          事前登録
        </a>
      </div>
    </>
  )
}
