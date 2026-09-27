'use client'

import { useState, FormEvent } from 'react'

const newsItems = [
  {
    date: '2025.09',
    category: 'お知らせ',
    title: '多摩平蒸留所 公式ティザーサイト オープン',
    body: '日野市多摩平に設立予定のクラフトウイスキー蒸留所、多摩平蒸留所の公式ティザーサイトを公開しました。開所・クラウドファンディング等の最新情報は本サイトおよびメールマガジンにてご案内します。',
  },
  {
    date: '2025.秋',
    category: '予定',
    title: 'クラウドファンディング 開始予定',
    body: '蒸留設備・熟成庫の整備費用の一部をクラウドファンディングにより調達予定です。応援いただける方はメール登録にてお知らせをお受け取りください。',
  },
  {
    date: '2026',
    category: '予定',
    title: 'ニューメイク 第一弾リリース予定',
    body: '蒸留開始後、最初の原酒をニューメイクスピリッツとして限定リリース予定です。蒸留所直売・オンラインショップにて販売します。登録者さまへ先行ご案内を予定しています。',
  },
]

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function NewsSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setStatus('submitting')
    // Demo: simulate async
    await new Promise(r => setTimeout(r, 900))
    setStatus('success')
    setEmail('')
  }

  return (
    <section
      id="news"
      className="relative py-[clamp(80px,12vw,140px)]"
    >
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #0E1013, #14171B 50%, #0E1013)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-[clamp(20px,5vw,60px)]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* News list */}
          <div>
            <div className="reveal">
              <div className="section-label">News &amp; Updates</div>
              <h2
                className="font-serif leading-[1.4] tracking-[0.16em] mb-4"
                style={{ fontSize: 'clamp(1.9rem,4vw,2.9rem)' }}
              >
                お知らせ
              </h2>
              <div className="w-10 h-px mb-10" style={{ background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
            </div>

            <div className="space-y-4 reveal-group">
              {newsItems.map(({ date, category, title, body }) => (
                <article
                  key={title}
                  className="news-item border border-[var(--line-soft)] p-6 cursor-default"
                  style={{ background: 'rgba(26,30,35,0.5)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <time className="font-latin text-[11px] tracking-[0.28em] text-muted">{date}</time>
                    <span
                      className="text-[10px] tracking-[0.2em] px-2 py-0.5 border"
                      style={{ color: '#D4AF37', borderColor: 'rgba(212,175,55,0.35)' }}
                    >
                      {category}
                    </span>
                  </div>
                  <h3 className="font-serif text-base tracking-[0.1em] text-offwhite mb-3">{title}</h3>
                  <p className="text-muted text-sm leading-[2.1]">{body}</p>
                </article>
              ))}
            </div>
          </div>

          {/* Registration form */}
          <div className="reveal">
            <div className="section-label">Pre-register</div>
            <h2
              className="font-serif leading-[1.4] tracking-[0.16em] mb-4"
              style={{ fontSize: 'clamp(1.9rem,4vw,2.9rem)' }}
            >
              事前登録
            </h2>
            <div className="w-10 h-px mb-6" style={{ background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
            <p className="text-muted text-sm leading-[2.2] mb-10">
              オープン情報・クラウドファンディング開始・先行販売など、
              大切なお知らせを最速でお届けします。
              メールアドレスをご登録いただくだけでOKです。
            </p>

            {status === 'success' ? (
              /* Success state */
              <div
                className="border border-[var(--line)] p-8 text-center"
                style={{ background: 'rgba(212,175,55,0.06)' }}
              >
                <div className="text-3xl mb-4">🥃</div>
                <h3 className="font-serif text-xl tracking-[0.16em] text-gold mb-3">
                  ご登録ありがとうございます
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  多摩平蒸留所からの最新情報をお届けします。<br />
                  楽しみにお待ちください。
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div
                  className="border border-[var(--line-soft)] p-8 md:p-10"
                  style={{ background: 'rgba(26,30,35,0.6)' }}
                >
                  {/* Benefits */}
                  <ul className="space-y-3 mb-8">
                    {[
                      'オープン日時・クラウドファンディング情報',
                      'ニューメイク先行購入の案内',
                      '蒸留所ツアー・テイスティングイベント招待',
                      'EC開始・新商品リリース最速通知',
                    ].map(item => (
                      <li key={item} className="flex items-start gap-3 text-sm text-muted">
                        <span className="text-gold mt-0.5 shrink-0">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="w-full h-px mb-8" style={{ background: 'var(--line-soft)' }} />

                  {/* Email input */}
                  <label className="block mb-2 text-xs tracking-[0.22em] text-muted">
                    メールアドレス
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent border border-[var(--line-soft)] px-4 py-3 text-sm
                      text-offwhite placeholder:text-muted focus:outline-none focus:border-gold
                      transition-colors mb-4"
                  />

                  {/* Name input */}
                  <label className="block mb-2 text-xs tracking-[0.22em] text-muted">
                    お名前（任意）
                  </label>
                  <input
                    type="text"
                    placeholder="山田 太郎"
                    className="w-full bg-transparent border border-[var(--line-soft)] px-4 py-3 text-sm
                      text-offwhite placeholder:text-muted focus:outline-none focus:border-gold
                      transition-colors mb-6"
                  />

                  {/* Privacy note */}
                  <p className="text-[11px] text-muted leading-relaxed mb-6">
                    ご登録いただいた情報は多摩平蒸留所のご案内にのみ使用し、
                    第三者に提供することはありません。
                    <a href="#" className="text-gold underline ml-1 hover:opacity-80">プライバシーポリシー</a>
                  </p>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full py-3.5 text-sm tracking-[0.22em] font-medium
                      disabled:opacity-60 transition-opacity"
                    style={{
                      background: 'linear-gradient(135deg, #D4AF37, #C59B27)',
                      color: '#0E1013',
                    }}
                  >
                    {status === 'submitting' ? '送信中...' : '登録する — 無料'}
                  </button>
                </div>
              </form>
            )}

            {/* LINE teaser */}
            <div
              className="mt-4 border border-[var(--line-soft)] p-5 flex items-center gap-4"
              style={{ background: 'rgba(26,30,35,0.4)' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'rgba(0,185,0,0.15)', border: '1px solid rgba(0,185,0,0.3)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#00B900">
                  <path d="M12 2C6.48 2 2 6.02 2 11c0 3.54 2.22 6.62 5.5 8.36l-.5 2.64 3.1-1.64c.6.16 1.22.24 1.9.24 5.52 0 10-4.02 10-9S17.52 2 12 2Zm1.5 12.5H9v-1.5h4.5v1.5Zm1-3H9V10h5.5v1.5Z"/>
                </svg>
              </div>
              <div>
                <div className="text-xs text-muted leading-relaxed">
                  <span className="text-offwhite font-medium">LINE公式アカウント</span> も準備中。
                  フォローしてお知らせを受け取れます。（近日公開）
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
