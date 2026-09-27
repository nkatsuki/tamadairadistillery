const FOOTER_LINKS = [
  { href: '#concept',    label: 'コンセプト' },
  { href: '#distillery', label: '蒸留所・バー' },
  { href: '#products',   label: '商品' },
  { href: '#news',       label: 'お知らせ・登録' },
  { href: '#access',     label: 'アクセス' },
]

const SOCIAL = [
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.743l7.73-8.835L2.18 2.25h6.962l4.265 5.636 5.837-6.387Zm-1.161 17.52h1.833L7.084 4.126H5.117Z"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-[var(--line-soft)] pt-16 pb-10"
      style={{ background: 'var(--char)' }}
    >
      <div className="max-w-6xl mx-auto px-[clamp(20px,5vw,60px)]">

        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-10 mb-12">

          {/* Brand */}
          <div className="shrink-0">
            <div className="font-serif text-xl font-semibold tracking-[0.32em] text-[var(--text)] mb-1">
              多摩平蒸留所
            </div>
            <div className="font-latin text-[11px] tracking-[0.38em] text-[var(--gold)]">
              TAMADAIRA DISTILLERY
            </div>
            <p className="text-[var(--muted)] text-xs mt-3 leading-relaxed max-w-xs">
              東京都日野市多摩平<br />
              都市型マイクロディスティラリー — 開所準備中
            </p>
          </div>

          {/* Nav */}
          <nav>
            <ul className="flex flex-wrap gap-x-8 gap-y-2">
              {FOOTER_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[var(--muted)] text-[12.5px] tracking-wide hover:text-[var(--gold)] transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex gap-4">
            {SOCIAL.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full border border-[var(--line-soft)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>

        </div>

        {/* Bottom row */}
        <div className="border-t border-[var(--line-soft)] pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5 text-[11px] text-[var(--muted)] tracking-wide">

          {/* Age notice */}
          <p className="border border-[var(--line-soft)] px-4 py-2 rounded leading-relaxed">
            ⚠️ 当サイトは20歳以上の方を対象としています。20歳未満の方の飲酒は法律で禁止されています。
          </p>

          {/* Legal links */}
          <div className="flex flex-wrap gap-4 items-center">
            <a href="#" className="hover:text-[var(--gold)] transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-[var(--gold)] transition-colors">特定商取引法に基づく表記</a>
            <span className="text-[var(--line)]">|</span>
            <span>© {year} 多摩平蒸留所 All rights reserved.</span>
          </div>
        </div>

      </div>
    </footer>
  )
}
