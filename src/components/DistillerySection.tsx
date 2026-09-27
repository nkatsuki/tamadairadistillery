import Image from 'next/image'

const specs = [
  { label: 'ポットスチル', value: '銅製 2基（仕込み釜・スピリッツスチル）' },
  { label: '仕込み水',     value: '武蔵野台地 地下水(黒川清流公園水脈系統)' },
  { label: '糖化設備',     value: 'ステンレス製マッシュタン 1基' },
  { label: '発酵槽',       value: 'オレゴン松製 ウォッシュバック 4基' },
  { label: '熟成庫',       value: '多摩平敷地内 熟成倉庫(建設中)' },
  { label: '見学',         value: '蒸留所ツアー ※ 開所後に受付予定' },
]

export default function DistillerySection() {
  return (
    <section
      id="distillery"
      className="relative py-[clamp(80px,12vw,140px)]"
    >
      {/* Subtle background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, #0E1013 0%, #13161A 50%, #0E1013 100%)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-[clamp(20px,5vw,60px)]">

        {/* Heading */}
        <div className="reveal mb-[clamp(48px,8vw,80px)]">
          <div className="section-label">Distillery &amp; Bar / Shop</div>
          <h2
            className="font-serif leading-[1.4] tracking-[0.16em] mb-4"
            style={{ fontSize: 'clamp(1.9rem,4vw,2.9rem)' }}
          >
            蒸留所・試飲バー・ショップ
          </h2>
          <div className="w-10 h-px mb-6" style={{ background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
          <p className="text-muted text-sm leading-[2.2] max-w-lg">
            多摩平の地に設けられる本格的な蒸留設備と、訪れる人が原酒の物語を
            五感で体験できる試飲バーカウンター・限定ショップを構想しています。
          </p>
        </div>

        {/* Cards */}
        <div className="reveal-group grid grid-cols-1 md:grid-cols-2 gap-6 mb-[clamp(60px,10vw,100px)]">

          {/* Bar card */}
          <article className="distillery-card border border-[var(--line-soft)] overflow-hidden group">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src="/tamadaira-img-bar.jpg"
                alt="試飲バーカウンターイメージ"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(14,16,19,0.9) 0%, rgba(14,16,19,0.2) 60%)' }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="font-latin text-[10px] tracking-[0.38em] text-gold mb-2">TASTING BAR</div>
                <h3 className="font-serif text-xl tracking-[0.14em]">試飲バーカウンター</h3>
              </div>
              {/* Corner accent */}
              <div
                className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
                style={{ borderTop: '1px solid rgba(212,175,55,0.45)', borderLeft: '1px solid rgba(212,175,55,0.45)' }}
                aria-hidden="true"
              />
            </div>
            <div className="p-6" style={{ background: 'rgba(26,30,35,0.8)' }}>
              <p className="text-muted text-sm leading-[2.1]">
                蒸留所に併設する試飲バーカウンターでは、ニューメイクから
                熟成中の原酒、完成ウイスキーまでを直接体験できます。
                テイスティングセッション・ペアリングイベントなども企画中。
              </p>
              <div className="mt-4 text-xs text-muted">
                <span className="text-gold">営業時間 : </span>
                開所後にご案内予定
              </div>
            </div>
          </article>

          {/* Shop card */}
          <article className="distillery-card border border-[var(--line-soft)] overflow-hidden group">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <Image
                src="/tamadaira-img-shop.jpg"
                alt="限定ショップイメージ"
                fill
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(14,16,19,0.9) 0%, rgba(14,16,19,0.2) 60%)' }}
              />
              <div className="absolute bottom-0 left-0 p-6">
                <div className="font-latin text-[10px] tracking-[0.38em] text-gold mb-2">LIMITED SHOP</div>
                <h3 className="font-serif text-xl tracking-[0.14em]">限定ショップ</h3>
              </div>
              <div
                className="absolute top-0 left-0 w-6 h-6 pointer-events-none"
                style={{ borderTop: '1px solid rgba(212,175,55,0.45)', borderLeft: '1px solid rgba(212,175,55,0.45)' }}
                aria-hidden="true"
              />
            </div>
            <div className="p-6" style={{ background: 'rgba(26,30,35,0.8)' }}>
              <p className="text-muted text-sm leading-[2.1]">
                蒸留所直売ショップでは、ここでしか手に入らない限定ボトルや
                バッチ販売、蒸留所オリジナルグッズを展開予定。
                訪れる価値のある場所を目指します。
              </p>
              <div className="mt-4 text-xs text-muted">
                <span className="text-gold">営業時間 : </span>
                開所後にご案内予定
              </div>
            </div>
          </article>

        </div>

        {/* Equipment specs */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="section-label">Equipment</div>
            <h3
              className="font-serif tracking-[0.14em] leading-[1.5] mb-6"
              style={{ fontSize: 'clamp(1.3rem,2.5vw,1.7rem)' }}
            >
              蒸留設備 — 構想
            </h3>
            <p className="text-muted text-sm leading-[2.2] mb-8">
              本場スコットランドの伝統製法をベースに、日本の職人技術と
              多摩平の素材を組み合わせた独自のプロセスを確立します。
              ポットスチルは銅製の直火式を採用し、複雑な香味を目指します。
            </p>
          </div>

          <div
            className="border border-[var(--line-soft)] divide-y divide-[var(--line-soft)]"
            style={{ background: 'rgba(26,30,35,0.5)' }}
          >
            {specs.map(({ label, value }) => (
              <div key={label} className="flex gap-4 px-6 py-4">
                <span
                  className="font-latin text-[10px] tracking-[0.28em] text-gold uppercase shrink-0"
                  style={{ minWidth: '100px', lineHeight: '1.8' }}
                >
                  {label}
                </span>
                <span className="text-sm text-muted leading-relaxed">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
