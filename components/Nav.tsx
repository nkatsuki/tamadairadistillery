'use client';
import { useEffect, useState } from 'react';
import DistilleryMark from './DistilleryMark';

const LINKS = [
  { href: '#concept', label: 'コンセプト' },
  { href: '#distillery', label: '蒸留所・バー' },
  { href: '#product', label: 'プロダクト' },
  { href: '#news', label: 'ニュース' },
  { href: '#access', label: 'アクセス' },
  { href: '/makoto/', label: '誠コレクション' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`site-nav${scrolled ? ' scrolled' : ''}`} aria-label="メインナビゲーション">
      <a className="brand" href="#hero" aria-label="多摩平蒸留所 トップへ">
        <DistilleryMark className="brand-mark" />
        <span className="brand-jp">多摩平蒸留所</span>
        <span className="brand-en">Tamadaira Distillery</span>
      </a>
      <button
        className="nav-toggle"
        aria-label="メニューを開く"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 6h18M3 12h18M3 18h12"/></svg>
      </button>
      <ul className={`nav-links${open ? ' open' : ''}`}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li><a className="nav-cta" href="#register" onClick={() => setOpen(false)}>事前登録</a></li>
      </ul>
    </nav>
  );
}
