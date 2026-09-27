/* Access section – Route diagram via inline SVG */

const routeStops = [
  { name: '新宿', en: 'Shinjuku', highlight: false },
  { name: '分倍河原', en: 'Bubaigawara', highlight: false },
  { name: '豊田', en: 'Toyoda', highlight: false },
  { name: '日野', en: 'Hino', highlight: false },
  { name: '多摩平の森', en: 'Tamadaira-no-Mori', highlight: true },
]

function RouteDiagram() {
  const W = 560
  const H = 80
  const stopCount = routeStops.length
  const margin = 40
  const spacing = (W - margin * 2) / (stopCount - 1)

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="新宿から多摩平の森駅への路線図"
      role="img"
      className="w-full max-w-lg"
    >
      {/* Line */}
      <line
        x1={margin} y1={H / 2}
        x2={W - margin} y2={H / 2}
        stroke="rgba(212,175,55,0.35)"
        strokeWidth="1.5"
      />

      {routeStops.map(({ name, en, highlight }, i) => {
        const cx = margin + i * spacing
        const cy = H / 2
        return (
          <g key={en}>
            {/* Circle */}
            <circle
              cx={cx} cy={cy} r={highlight ? 8 : 5}
              fill={highlight ? '#D4AF37' : '#1A1E23'}
              stroke={highlight ? '#D4AF37' : 'rgba(212,175,55,0.5)'}
              strokeWidth={highlight ? 2 : 1.2}
            />
            {/* Station name JP */}
            <text
              x={cx} y={cy - 16}
              textAnchor="middle"
              fontSize={highlight ? '11' : '9.5'}
              fill={highlight ? '#D4AF37' : 'rgba(160,174,192,0.85)'}
              fontFamily="'Zen Kaku Gothic New', sans-serif"
              fontWeight={highlight ? '600' : '400'}
            >
              {name}
            </text>
            {/* EN small */}
            <text
              x={cx} y={cy + 22}
              textAnchor="middle"
              fontSize="7"
              fill="rgba(160,174,192,0.5)"
              fontFamily="'Cormorant Garamond', serif"
              letterSpacing="0.04em"
            >
              {en}
            </text>
            {/* Destination pin */}
            {highlight && (
              <text
                x={cx} y={cy - 29}
                textAnchor="middle"
                fontSize="8"
                fill="rgba(212,175,55,0.8)"
                fontFamily="'Cormorant Garamond', serif"
                letterSpacing="0.08em"
              >
                ▼ DESTINATION
              </text>
            )}
          </g>
        )
      })}

      {/* Time annotation */}
      <text
        x={W / 2} y={H - 4}
        textAnchor="middle"
        fontSize="8"
        fill="rgba(160,174,192,0.4)"
        fontFamily="'Cormorant Garamond', serif"
        letterSpacing="0.1em"
      >
        京王線 ／ JR中央線 経由 — 新宿から約30分
      </text>
    </svg>
  )
}

export default function AccessSection() {
  return (
    <section
      id="access"
      className="relative py-[clamp(80px,12vw,140px)]"
      style={{ background: '#13161A' }}
    >
      <div className="max-w-6xl mx-auto px-[clamp(20px,5vw,60px)]">

        {/* Heading */}
        <div className="reveal mb-[clamp(48px,8vw,80px)]">
          <div className="section-label">Access &amp; Overview</div>
          <h2
            className="font-serif leading-[1.4] tracking-[0.16em] mb-4"
            style={{ fontSize: 'clamp(1.9rem,4vw,2.9rem)' }}
          >
            アクセス
          </h2>
          <div className="w-10 h-px" style={{ background: 'linear-gradient(90deg,#D4AF37,transparent)' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: info */}
          <div className="reveal space-y-8">

            {/* Address */}
            <div
              className="border border-[var(--line-soft)] p-6 md:p-8"
              style={{ background: 'rgba(26,30,35,0.6)' }}
            >
              <div className="section-label text-[10px] mb-4">Location</div>
              <address className="not-italic space-y-3">
                <div className="flex gap-3 items-start">
                  <svg className="shrink-0 mt-1 text-gold" width="16" height="16" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <div className="text-offwhite font-medium tracking-wide text-sm">
                      東京都日野市多摩平◯丁目◯◯番◯号
                    </div>
                    <div className="text-muted text-xs mt-1">（開所時に確定・公開予定）</div>
                  </div>
                </div>
              </address>
            </div>

            {/* Access details */}
            <div className="space-y-4">
              {[
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2"/>
                      <path d="M2 10h20"/>
                      <path d="M7 6V4M17 6V4"/>
                    </svg>
                  ),
                  label: '多摩都市モノレール',
                  value: '「多摩平の森」駅 徒歩約◯分',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  ),
                  label: 'JR 中央線 経由',
                  value: '「豊田」駅 → モノレール 乗換 約◯分',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/>
                      <path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
                      <path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/>
                      <path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/>
                      <path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"/>
                      <path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"/>
                      <path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"/>
                      <path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"/>
                    </svg>
                  ),
                  label: '京王線 分倍河原駅 経由',
                  value: '「多摩平の森」駅 約◯分',
                },
                {
                  icon: (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                      stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/>
                      <rect x="9" y="11" width="14" height="10" rx="2"/>
                      <circle cx="12" cy="16" r="1"/>
                    </svg>
                  ),
                  label: 'お車でお越しの場合',
                  value: '中央自動車道 国立府中IC より約◯分（駐車場あり・開所後）',
                },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <span className="mt-1 text-gold shrink-0">{icon}</span>
                  <div>
                    <div className="text-xs text-muted tracking-wide">{label}</div>
                    <div className="text-sm text-offwhite mt-0.5">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Hours teaser */}
            <div
              className="border border-[var(--line-soft)] px-6 py-5"
              style={{ background: 'rgba(26,30,35,0.5)' }}
            >
              <div className="font-latin text-[10px] tracking-[0.38em] text-gold mb-3">HOURS &amp; INFO</div>
              <div className="grid grid-cols-2 gap-y-2 text-sm">
                <span className="text-muted">営業時間</span>
                <span className="text-offwhite">開所後にご案内</span>
                <span className="text-muted">定休日</span>
                <span className="text-offwhite">未定</span>
                <span className="text-muted">見学・ツアー</span>
                <span className="text-offwhite">要予約（開所後）</span>
              </div>
            </div>
          </div>

          {/* Right: map placeholder + route diagram */}
          <div className="reveal space-y-6">
            {/* Map placeholder */}
            <div
              className="relative w-full overflow-hidden border border-[var(--line-soft)]"
              style={{ aspectRatio: '4/3', background: '#1A1E23' }}
            >
              {/* Stylised grid map */}
              <svg
                viewBox="0 0 400 300"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full"
                aria-label="多摩平の地図（開所後に詳細を公開）"
              >
                {/* Background */}
                <rect width="400" height="300" fill="#14171B" />
                {/* Grid lines */}
                {Array.from({ length: 9 }).map((_, i) => (
                  <line key={`v${i}`} x1={44 * i + 4} y1="0" x2={44 * i + 4} y2="300"
                    stroke="rgba(212,175,55,0.06)" strokeWidth="1" />
                ))}
                {Array.from({ length: 7 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={44 * i + 4} x2="400" y2={44 * i + 4}
                    stroke="rgba(212,175,55,0.06)" strokeWidth="1" />
                ))}
                {/* Monorail line */}
                <path d="M60 250 Q100 200 200 150 Q280 110 380 80"
                  stroke="rgba(212,175,55,0.4)" strokeWidth="2.5" fill="none" strokeDasharray="6 3" />
                {/* Green areas */}
                <ellipse cx="200" cy="160" rx="70" ry="50" fill="rgba(143,191,176,0.07)" />
                <ellipse cx="130" cy="200" rx="45" ry="30" fill="rgba(143,191,176,0.06)" />
                {/* Streets */}
                <line x1="0" y1="150" x2="400" y2="150" stroke="rgba(248,249,250,0.08)" strokeWidth="6" />
                <line x1="200" y1="0" x2="200" y2="300" stroke="rgba(248,249,250,0.08)" strokeWidth="6" />
                <line x1="0" y1="200" x2="400" y2="220" stroke="rgba(248,249,250,0.05)" strokeWidth="3" />
                {/* Destination pin */}
                <circle cx="200" cy="155" r="12" fill="rgba(212,175,55,0.15)"
                  stroke="#D4AF37" strokeWidth="1.5" />
                <circle cx="200" cy="155" r="5" fill="#D4AF37" />
                {/* Pulse rings */}
                <circle cx="200" cy="155" r="22" fill="none"
                  stroke="rgba(212,175,55,0.2)" strokeWidth="1" />
                <circle cx="200" cy="155" r="32" fill="none"
                  stroke="rgba(212,175,55,0.1)" strokeWidth="1" />
                {/* Station label */}
                <rect x="120" y="170" width="160" height="28" rx="4" fill="rgba(14,16,19,0.85)" />
                <text x="200" y="189" textAnchor="middle" fontSize="11" fill="#D4AF37"
                  fontFamily="'Zen Kaku Gothic New', sans-serif" fontWeight="600">
                  多摩平の森 駅周辺
                </text>
                {/* Corner label */}
                <text x="12" y="285" fontSize="9" fill="rgba(160,174,192,0.4)"
                  fontFamily="'Cormorant Garamond', serif" letterSpacing="0.08em">
                  © 多摩平蒸留所 — 詳細地図は開所時に公開
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                {/* intentionally empty – map drawn in SVG above */}
              </div>
            </div>

            {/* Route diagram */}
            <div
              className="border border-[var(--line-soft)] p-6"
              style={{ background: 'rgba(26,30,35,0.6)' }}
            >
              <div className="font-latin text-[10px] tracking-[0.38em] text-gold mb-5">ROUTE GUIDE</div>
              <RouteDiagram />
              <p className="text-muted text-[11px] mt-4 leading-relaxed">
                ※ 所要時間は乗り換えにより異なります。確定情報は開所時に公開します。
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
