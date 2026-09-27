import Reveal from './Reveal';

export default function Access() {
  return (
    <section id="access">
      <div className="wrap">
        <Reveal as="div" className="eyebrow"><span className="dia"></span><span className="en">Access</span><span className="jp">アクセス</span></Reveal>
        <Reveal as="h2">新宿から30分。緑と湧水の街へ。</Reveal>
        <div className="access-grid">
          <Reveal as="dl" className="access-info">
            <div className="access-row"><dt>所在地</dt><dd>東京都日野市多摩平◯丁目<small>詳細な住所・開所日は決まり次第発表します</small></dd></div>
            <div className="access-row"><dt>電車</dt><dd>京王線「聖蹟桜ヶ丘」駅から徒歩 約◯分<small>JR中央線「日野」駅からも徒歩圏(いずれも仮表記)</small></dd></div>
            <div className="access-row"><dt>新宿から</dt><dd>約30分<small>京王線特急・JR中央線快速 利用</small></dd></div>
            <div className="access-row"><dt>営業(構想)</dt><dd>試飲バー・ショップ 併設<small>開所後の運営時間は改めてお知らせします</small></dd></div>
          </Reveal>
          <Reveal as="div" className="route-map" delay={1}>
            <p className="route-title">Shinjuku → Tamadaira</p>
            <svg viewBox="0 0 460 190" width="100%" aria-label="新宿から多摩平へのアクセス図">
              <defs>
                <linearGradient id="gd" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#E9CE7A"/>
                  <stop offset="1" stopColor="#A8842B"/>
                </linearGradient>
              </defs>
              <line x1="30" y1="70" x2="430" y2="70" stroke="rgba(212,175,55,.4)" strokeWidth="1.6"/>
              <line x1="250" y1="70" x2="250" y2="120" stroke="rgba(111,168,176,.5)" strokeWidth="1.4"/>
              <line x1="250" y1="120" x2="430" y2="120" stroke="rgba(111,168,176,.5)" strokeWidth="1.4" strokeDasharray="5 5"/>
              <circle cx="30" cy="70" r="6" fill="#0F1115" stroke="#D4AF37" strokeWidth="1.6"/>
              <circle cx="170" cy="70" r="4" fill="#0F1115" stroke="rgba(212,175,55,.7)" strokeWidth="1.2"/>
              <circle cx="430" cy="70" r="4" fill="#0F1115" stroke="rgba(212,175,55,.7)" strokeWidth="1.2"/>
              <path d="M440 108l10 12-10 12-10-12Z" fill="url(#gd)"/>
              <text x="30" y="46" fill="#F8F9FA" fontSize="13" fontFamily="var(--serif)" textAnchor="middle">新宿</text>
              <text x="30" y="94" fill="#A0AEC0" fontSize="9.5" fontFamily="var(--sans)" textAnchor="middle">京王線 特急 / JR中央線</text>
              <text x="170" y="46" fill="#A0AEC0" fontSize="11" fontFamily="var(--sans)" textAnchor="middle">調布・日野</text>
              <text x="430" y="46" fill="#A0AEC0" fontSize="11" fontFamily="var(--sans)" textAnchor="middle">聖蹟桜ヶ丘・日野</text>
              <line x1="240" y1="70" x2="260" y2="70" stroke="#0F1115" strokeWidth="5"/>
              <text x="250" y="152" fill="#D4AF37" fontSize="13" fontFamily="var(--serif)" textAnchor="middle">多摩平蒸留所</text>
              <text x="250" y="170" fill="#6FA8B0" fontSize="9.5" fontFamily="var(--sans)" textAnchor="middle">徒歩圏 — 武蔵野台地・日野市多摩平</text>
            </svg>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
