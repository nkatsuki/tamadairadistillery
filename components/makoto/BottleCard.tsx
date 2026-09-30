'use client';

import { useState } from 'react';

type Bottle = {
  role: string;
  kana: string;
  name: string;
  color: string;
  copy: string;
  spec: string;
  desc: string;
  img: string;
};

export default function BottleCard({ bottle: b }: { bottle: Bottle }) {
  const [view, setView] = useState<'label' | 'bottle'>('label');
  const bottleSrc = b.img.replace('/label-', '/bottle-').replace('-sil', '') + '?v=4';

  return (
    <article className="flex flex-col overflow-hidden border border-line bg-card sm:flex-row">
      <div className="w-full flex-none sm:w-2/5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={view === 'label' ? b.img : bottleSrc}
          alt={view === 'label' ? `${b.role} ${b.name} ラベル(シルエット)` : `${b.role} ${b.name} 完成ボトルイメージ`}
          loading="lazy"
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="min-w-0 p-4">
        <div className="flex items-center justify-between gap-2">
          <p className="flex flex-wrap items-center gap-2 font-gothic text-[11px] tracking-[0.15em] text-gold">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full border border-black/15"
              style={{ backgroundColor: b.color }}
            />
            <span className="rounded-sm bg-deep px-2 py-0.5 text-[10px] text-[#f2ecdd]">
              {b.role}
            </span>
          </p>
          <div className="flex flex-none overflow-hidden rounded-sm border border-line font-gothic text-[10px] tracking-[0.15em]">
            <button
              type="button"
              onClick={() => setView('label')}
              aria-pressed={view === 'label'}
              className={`px-2.5 py-1 ${view === 'label' ? 'bg-ink text-paper' : 'bg-card text-ink2'}`}
            >
              ラベル
            </button>
            <button
              type="button"
              onClick={() => setView('bottle')}
              aria-pressed={view === 'bottle'}
              className={`px-2.5 py-1 ${view === 'bottle' ? 'bg-ink text-paper' : 'bg-card text-ink2'}`}
            >
              ボトル
            </button>
          </div>
        </div>
        <h3 className="mt-2 text-xl font-semibold">
          {b.name}
          <span className="ml-2 text-xs font-normal text-ink2">{b.kana}</span>
        </h3>
        <p className="mt-1 text-[15px] font-medium tracking-wide text-shu">
          {b.copy}
        </p>
        <p className="mt-2 text-xs leading-6 text-ink2">{b.spec}</p>
        <p className="mt-2 text-xs leading-6 text-ink2">{b.desc}</p>
      </div>
    </article>
  );
}
