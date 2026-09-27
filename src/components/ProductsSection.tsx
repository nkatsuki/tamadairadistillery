/* Products – SVG bottle illustrations inline to avoid external deps */

const BottleSVG = ({ accent = '#D4AF37' }: { accent?: string }) => (
  <svg
    viewBox="0 0 80 200"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full"
    aria-hidden="true"
  >
    {/* Bottle body */}
    <defs>
      <linearGradient id={`bg-${accent}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="#1A1E23" />
        <stop offset="50%"  stopColor="#232830" />
        <stop offset="100%" stopColor="#1A1E23" />
      </linearGradient>
      <linearGradient id={`hl-${accent}`} x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%"   stopColor="transparent" />
        <stop offset="45%"  stopColor={`${accent}22`} />
        <stop offset="100%" stopColor="transparent" />
      </linearGradient>
    </defs>

    {/* Cap */}
    <rect x="30" y="4" width="20" height="14" rx="3" fill={accent} opacity="0.85" />

    {/* Neck */}
    <path d="M33 18 L28 46 H52 L47 18 Z" fill={`url(#bg-${accent})`} stroke={`${accent}40`} strokeWidth="0.8" />

    {/* Shoulder */}
    <path d="M28 46 Q20 56 18 68 H62 Q60 56 52 46 Z"
      fill={`url(#bg-${accent})`} stroke={`${accent}40`} strokeWidth="0.8" />

    {/* Body */}
    <rect x="18" y="68" width="44" height="110" rx="4"
      fill={`url(#bg-${accent})`} stroke={`${accent}40`} strokeWidth="0.8" />

    {/* Liquid fill */}
    <rect x="19" y="105" width="42" height="72" rx="3" fill={`${accent}18`} />

    {/* Highlight */}
    <rect x="18" y="68" width="44" height="110" rx="4" fill={`url(#hl-${accent})`} />

    {/* Label area */}
    <rect x="22" y="82" width="36" height="52" rx="2"
      fill="none" stroke={`${accent}55`} strokeWidth="0.8" />

    {/* Label text lines */}
    <line x1="28" y1="95"  x2="52" y2="95"  stroke={`${accent}55`} strokeWidth="0.6" />
    <line x1="30" y1="101" x2="50" y2="101" stroke={`${accent}33`} strokeWidth="0.5" />
    <line x1="28" y1="107" x2="52" y2="107" stroke={`${accent}33`} strokeWidth="0.5" />
    <line x1="30" y1="113" x2="50" y2="113" stroke={`${accent}22`} strokeWidth="0.5" />

    {/* Bottom */}
    <ellipse cx="40" cy="178" rx="22" ry="4" fill={`${accent}15`} />
  </svg>
)

const products = [
  {
    id: 'new-make',
    accent: '#D4AF37',
    label: 'NEW MAKE',
    title: 'ニューメイク',
    subtitle: '多摩平 ニューメイクスピリッツ',
    desc: '蒸留直後のクリアな原酒。多摩平テロワールが宿る第一弾。熟成前の生命力あふれる味わいをそのままボトルに。',
    vol: '63%',
    vol_label: 'アルコール度数',
    status: 'COMING SOON',
    statusColor: '#D4AF37',
  },
  {
    id: 'single-malt',
    accent: '#C59B27',
    label: 'SINGLE MALT',
    title: 'シングルモルト',
    subtitle: '多摩平 シングルモルト ウイスキー',
    desc: '多摩平の四季の寒暖差が育む熟成。バーボンバレルとシェリーカスクのダブルウッド熟成で複雑な香りと甘みを追求。',
    vol: '3年〜',
    vol_label: '熟成期間(予定)',
    status: '熟成中 — MATURING',
    statusColor: '#8FBFB0',
  },
  {
    id: 'craft-gin',
    accent: '#8FBFB0',
    label: 'CRAFT GIN',
    title: 'クラフトジン',
    subtitle: '多摩平 ボタニカル ジン',
    desc: '黒川清流公園周辺で採取したボタニカルを使用。武蔵野の森の香りをまとった、多摩平ならではのジャパニーズジン。',
    vol: '45%',
    vol_label: 'アルコール度数(予定)',
    status: '開発中 — IN DEVELOPMENT',
    statusColor: '#8FBFB0',
  },
]

export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative py-[clamp(80px,12vw,140px)]"
      style={{ background: 'linear-gradient(to bottom, #0E1013, #13161A 40%, #0E1013)' }}
    >
      <div className="max-w-6xl mx-auto px-[clamp(20px,5vw,60px)]">

        {/* Heading */}
        <div className="reveal mb-[clamp(48px,8vw,80px)]">
          <div className="section-label">Product Preview</div>
          <h2
            className="font-serif leading-[1.4] tracking-[0.16em] mb-4"
            style={{ fontSize: 'clamp(1.9rem,4vw,2.9rem)' }}
          >
            ラインナップ（Coming Soon）
          </h2>
          <div className="w-10 h-px mb-6" style={{ background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
          <p className="text-muted text-sm leading-[2.2] max-w-lg">
            多摩平蒸留所のウイスキー・ジンはただいま仕込み・熟成中です。
            リリース時にはEC・蒸留所直売でご案内します。
            メールマガジン登録で最速お知らせを受け取れます。
          </p>
        </div>

        {/* Product cards */}
        <div className="reveal-group grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {products.map(({ id, accent, label, title, subtitle, desc, vol, vol_label, status, statusColor }) => (
            <article
              key={id}
              className="product-card border border-[var(--line-soft)] flex flex-col"
              style={{ background: 'rgba(26,30,35,0.7)' }}
            >
              {/* Bottle illustration */}
              <div
                className="relative flex items-center justify-center py-10 px-12"
                style={{ background: `radial-gradient(ellipse at center, ${accent}0A 0%, transparent 70%)` }}
              >
                <div className="w-24 h-44 relative">
                  <BottleSVG accent={accent} />
                </div>
                {/* Status badge */}
                <div
                  className="absolute top-4 right-4 font-latin text-[9px] tracking-[0.28em]
                    border px-2.5 py-1 shimmer"
                  style={{ color: statusColor, borderColor: `${statusColor}55` }}
                >
                  {status}
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-6 pt-2">
                <div
                  className="font-latin text-[10px] tracking-[0.38em] mb-2"
                  style={{ color: accent }}
                >
                  {label}
                </div>
                <h3 className="font-serif text-xl tracking-[0.14em] text-offwhite mb-1">{title}</h3>
                <p className="text-muted text-[11px] tracking-wide mb-4">{subtitle}</p>
                <div className="w-8 h-px mb-4" style={{ background: `${accent}55` }} />
                <p className="text-muted text-sm leading-[2.1] flex-1">{desc}</p>

                {/* Volume */}
                <div className="mt-6 pt-4 border-t border-[var(--line-soft)] flex items-end gap-2">
                  <span
                    className="font-latin font-light leading-none"
                    style={{ fontSize: '1.7rem', color: accent }}
                  >
                    {vol}
                  </span>
                  <span className="text-muted text-xs pb-0.5">{vol_label}</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* EC teaser banner */}
        <div
          className="reveal border border-[var(--line)] p-8 md:p-10
            flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(212,175,55,0.04)' }}
        >
          <div>
            <div className="font-latin text-[10px] tracking-[0.38em] text-gold mb-3">ONLINE SHOP — COMING SOON</div>
            <h3
              className="font-serif tracking-[0.14em] text-offwhite leading-snug"
              style={{ fontSize: 'clamp(1.1rem,2.2vw,1.5rem)' }}
            >
              オンラインショップ 準備中
            </h3>
            <p className="text-muted text-sm mt-2 leading-relaxed">
              第一弾リリース時にオンライン販売を開始予定です。
              登録いただいた方に先行購入の機会をご案内します。
            </p>
          </div>
          <a
            href="#news"
            className="shrink-0 border border-gold text-gold text-sm tracking-[0.2em]
              px-8 py-3 whitespace-nowrap hover:bg-gold hover:text-ink transition-colors"
          >
            先行登録はこちら
          </a>
        </div>

      </div>
    </section>
  )
}
