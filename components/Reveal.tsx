'use client';
import React, { useEffect, useRef } from 'react';

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: 0 | 1 | 2;
  children?: React.ReactNode;
};

export default function Reveal({ as = 'div', className = '', delay = 0, children, ...rest }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    document.documentElement.classList.add('js');
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      el.classList.add('on');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            el.classList.add('on');
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const d = delay === 1 ? ' d1' : delay === 2 ? ' d2' : '';
  return React.createElement(
    as,
    { ref, className: `reveal${d}${className ? ' ' + className : ''}`, ...rest },
    children
  );
}
