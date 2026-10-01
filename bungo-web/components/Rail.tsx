'use client';

import { useEffect, useState } from 'react';

const items = [
  { href: '#prologue', label: '序' },
  { href: '#v1', label: '壱' },
  { href: '#v2', label: '弐' },
  { href: '#v3', label: '参' },
  { href: '#v4', label: '四' },
  { href: '#v5', label: '五' },
  { href: '#v6', label: '六' },
  { href: '#v7', label: '七' },
  { href: '#bunko', label: '文庫' },
  { href: '#plan', label: '構成' },
];

/**
 * 背表紙の帯をナビゲーションに昇格させたもの。
 * デスクトップでは左端に縦、モバイルでは上部に横で並ぶ。
 */
export default function Rail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const targets = items.map((it) => document.querySelector(it.href));
    let ticking = false;

    const sync = () => {
      const y = window.scrollY + window.innerHeight * 0.32;
      let best = -1;
      targets.forEach((t, i) => {
        if (t && (t as HTMLElement).offsetTop <= y) best = i;
      });
      setActive(best);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        sync();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    sync();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="rail" aria-label="巻の目次">
      <div className="rail-mark">多摩平文庫</div>
      <ul className="rail-list">
        {items.map((it, i) => (
          <li key={it.href}>
            {it.label === '文庫' || it.label === '構成' ? (
              <span className="rail-sep" aria-hidden="true" />
            ) : null}
            <a href={it.href} className={active === i ? 'on' : undefined}>
              {it.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
