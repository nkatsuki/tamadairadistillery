'use client';

import { useEffect, useState } from 'react';

const KEY = 'makoto-age-ok';

export default function AgeGate() {
  const [checked, setChecked] = useState(false);
  const [confirmed, setConfirmed] = useState(true);

  useEffect(() => {
    try {
      setConfirmed(sessionStorage.getItem(KEY) === '1');
    } catch {
      setConfirmed(true);
    }
    setChecked(true);
  }, []);

  if (!checked || confirmed) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 p-6">
      <div className="max-w-sm border border-line bg-card p-8 text-center shadow-2xl">
        <p className="text-xs tracking-[0.35em] text-gold">AGE VERIFICATION</p>
        <h2 className="mt-3 text-2xl font-semibold">年齢確認</h2>
        <p className="mt-4 text-left text-sm leading-8 text-ink2">
          このサイトにはアルコールに関する情報が含まれます。20歳未満の方の飲酒は法律で禁じられています。あなたは20歳以上ですか?
        </p>
        <button
          onClick={() => {
            try {
              sessionStorage.setItem(KEY, '1');
            } catch {}
            setConfirmed(true);
          }}
          className="mt-6 w-full bg-shu px-6 py-3 text-sm tracking-[0.2em] text-white hover:opacity-90"
        >
          20歳以上です
        </button>
        <a
          href="https://www.city.hino.lg.jp/"
          className="mt-3 block text-xs text-ink2 underline"
        >
          いいえ(日野市のサイトへ離脱します)
        </a>
      </div>
    </div>
  );
}
