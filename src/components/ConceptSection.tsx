import Image from 'next/image'

const pillars = [
  {
    num: '壹',
    title: '水',
    subtitle: 'The Water',
    body: '仕込み水は黒川清流公園の水脈に連なる清冽な地下水。武蔵野台地が長年かけて育んだ軟水が、ウイスキーの骨格を決める。',
  },
  {
    num: '貳',
    title: '気候',
    subtitle: 'The Climate',
    body: '多摩平の四季は寒暖差が大きく、樽の呼吸を促す。夏の温度で液が広がり、冬の収縮で木の成分を深く取り込む——多摩平テロワールの核心。',
  },
  {
    num: '參',
    title: '街',
    subtitle: 'The Town',
    body: '新宿から30分。緑豊かな日野市多摩平は都市と自然が交差する場所。蒸留所は地域と呼吸を合わせ、街の記憶を一滴に込める。',
  },
]

export default function ConceptSection() {
  return (
    <section
      id="concept"
      className="relative py-[clamp(80px,12vw,140px)] overflow-hidden"
    >
      {/* Background water image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/tamadaira-img-water.jpg"
          alt="黒川清流公園 清冽な水流"
          fill
          sizes="100vw"
          className="object-cover opacity-[0.10]"
          style={{ objectPosition: 'center 55%' }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, #0E1013 0%, transparent 30%, transparent 70%, #0E1013 100%)' }}
        />
      </div>

      {/* Water-line accent */}
      <div
        className="absolute top-0 bottom-0 left-1/2 w-px pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.15) 20%, rgba(212,175,55,0.15) 80%, transparent)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-[clamp(20px,5vw,60px)]">

        {/* Heading */}
        <div className="reveal mb-[clamp(48px,8vw,80px)]">
          <div className="section-label">Concept &amp; Story</div>
          <h2
            className="font-serif leading-[1.4] tracking-[0.16em] mb-6"
            style={{ fontSize: 'clamp(1.9rem,4vw,2.9rem)' }}
          >
            多摩平テロワール
          </h2>
          <div
            className="w-10 h-px mb-6"
            style={{ background: 'linear-gradient(90deg,#D4AF37,transparent)' }}
          />
          <p
            className="text-muted leading-[2.2] max-w-xl"
            style={{ fontSize: 'clamp(0.9rem,1.5vw,1rem)' }}
          >
            東京・新宿から電車でわずか30分。武蔵野台地の一角、日野市多摩平に
            クラフトウイスキーの聖地を作る。街の緑、地下水脈、四季の温度差——
            この場所にしか宿らない「テロワール」がウイスキーに命を吹き込む。
          </p>
        </div>

        {/* Three pillars */}
        <div className="reveal-group grid grid-cols-1 md:grid-cols-3 gap-8 mb-[clamp(60px,10vw,100px)]">
          {pillars.map(({ num, title, subtitle, body }) => (
            <article
              key={num}
              className="border border-[var(--line-soft)] p-8 relative"
              style={{ background: 'rgba(26,30,35,0.6)' }}
            >
              {/* Number */}
              <div
                className="font-latin text-[56px] leading-none font-light mb-4"
                style={{ color: 'rgba(212,175,55,0.18)', letterSpacing: '-0.02em' }}
                aria-hidden="true"
              >
                {num}
              </div>
              {/* Title */}
              <h3 className="font-serif text-2xl tracking-[0.18em] text-offwhite mb-1">{title}</h3>
              <div className="font-latin text-[11px] tracking-[0.38em] text-gold mb-4">{subtitle}</div>
              <div className="w-8 h-px mb-4" style={{ background: 'rgba(212,175,55,0.4)' }} />
              <p className="text-muted text-sm leading-[2.1]">{body}</p>
              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-6 h-6 pointer-events-none"
                style={{
                  borderTop: '1px solid rgba(212,175,55,0.4)',
                  borderRight: '1px solid rgba(212,175,55,0.4)',
                }}
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* Story block */}
        <div className="reveal grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label">Our Story</div>
            <h3
              className="font-serif leading-[1.5] tracking-[0.14em] mb-6"
              style={{ fontSize: 'clamp(1.4rem,3vw,2rem)' }}
            >
              都市と自然が交差する<br />
              マイクロディスティラリー
            </h3>
            <div className="space-y-5 text-muted text-sm leading-[2.2]">
              <p>
                多摩平蒸留所は、東京の喧騒からほど近い日野市多摩平に設立を準備しているクラフトウイスキー蒸留所です。
                蒸留・熟成をこの地で行い、地産地消の精神で「都市型テロワール」を追求します。
              </p>
              <p>
                蒸留所内には試飲バーカウンターと限定ショップを併設。
                地域の人々が気軽に立ち寄り、ウイスキーの物語に触れられる——
                街とともに育つ蒸留所を目指しています。
              </p>
              <p>
                現在は蒸留設備の設置、熟成庫の整備を進めています。
                ニューメイクの第一弾リリースに向け、鋭意準備中です。
              </p>
            </div>
          </div>

          {/* Stats block */}
          <div
            className="border border-[var(--line-soft)] p-8 md:p-10"
            style={{ background: 'rgba(26,30,35,0.5)' }}
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '30', unit: '分', label: '新宿から電車で', en: 'from Shinjuku' },
                { value: '400', unit: 'L', label: '初期仕込み規模(予定)', en: 'initial batch size' },
                { value: '2', unit: '基', label: 'ポットスチル(予定)', en: 'pot stills planned' },
                { value: '黒川', unit: '', label: '清流公園の水脈', en: 'source water' },
              ].map(({ value, unit, label, en }) => (
                <div key={en} className="flex flex-col gap-1">
                  <div className="flex items-end gap-1">
                    <span
                      className="font-latin font-light leading-none text-offwhite"
                      style={{ fontSize: 'clamp(2rem,4vw,2.8rem)' }}
                    >
                      {value}
                    </span>
                    {unit && (
                      <span className="font-serif text-gold text-sm pb-1">{unit}</span>
                    )}
                  </div>
                  <div className="text-xs text-muted leading-relaxed">{label}</div>
                  <div className="font-latin text-[10px] tracking-[0.24em] text-gold opacity-60 uppercase">{en}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
