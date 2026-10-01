import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';

export default function ProductPreview() {
  return (
    <section id="product">
      <div className="wrap">
        <Reveal as="div" className="eyebrow"><span className="dia"></span><span className="en">Product — Coming Soon</span><span className="jp">プロダクト</span></Reveal>
        <Reveal as="h2">熟成は、まだ始まったばかり。</Reveal>
        <Reveal as="p" className="lead" delay={1}>最初の樽が静かに眠る日まで、もう少しだけ。開所から順をおって、多摩平の一滴をお届けします。</Reveal>
        <div className="products">
          <Reveal as="div" className="pcard">
            <span className="badge">First</span>
            <svg className="bottle" width="88" height="150" viewBox="0 0 88 150" fill="none" aria-hidden="true">
              <path d="M36 4h16v34c8 6 14 16 14 30v66a8 8 0 0 1-8 8H30a8 8 0 0 1-8-8V68c0-14 6-24 14-30V4Z" stroke="#D4AF37" strokeWidth="1.3"/>
              <path d="M26 92h36" stroke="#6FA8B0" strokeWidth="1" strokeDasharray="3 4"/>
              <rect x="30" y="52" width="28" height="14" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7"/>
            </svg>
            <h3>ニューメイク</h3>
            <p className="en-name">New Make Spirit</p>
            <p>蒸留したての透明な原酒。穀物の甘さと多摩平の水の余韻をそのままに、開所記念の限定ボトルとして。</p>
            <p className="timeline">開所時 リリース予定</p>
          </Reveal>
          <Reveal as="div" className="pcard" delay={1}>
            <span className="badge">Signature</span>
            <svg className="bottle" width="88" height="150" viewBox="0 0 88 150" fill="none" aria-hidden="true">
              <path d="M37 4h14v22c0 6 10 12 10 26v82a8 8 0 0 1-8 8H35a8 8 0 0 1-8-8V52c0-14 10-20 10-26V4Z" stroke="#D4AF37" strokeWidth="1.3"/>
              <path d="M28 84h32" stroke="#C59B27" strokeWidth="1"/>
              <rect x="32" y="64" width="24" height="12" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7"/>
            </svg>
            <h3>シングルモルト 多摩平</h3>
            <p className="en-name">Single Malt Tamadaira</p>
            <p>多摩平テロワールを映す看板ボトル。バーボン樽・シェリー樽・ミズナラ樽の組み合わせで、年号ごとの個性を。</p>
            <p className="timeline">熟成後 順次リリース</p>
          </Reveal>
          <Reveal as="div" className="pcard" delay={2}>
            <span className="badge">Early</span>
            <svg className="bottle" width="88" height="150" viewBox="0 0 88 150" fill="none" aria-hidden="true">
              <path d="M36 4h16v26c6 8 10 18 10 32v72a8 8 0 0 1-8 8H34a8 8 0 0 1-8-8V62c0-14 4-24 10-32V4Z" stroke="#6FA8B0" strokeWidth="1.3"/>
              <path d="M28 96h32" stroke="#6FA8B0" strokeWidth="1"/>
              <circle cx="44" cy="76" r="8" stroke="#6FA8B0" strokeWidth="0.8" opacity="0.7"/>
            </svg>
            <h3>クラフトジン 多摩平</h3>
            <p className="en-name">Tamadaira Craft Gin</p>
            <p>湧水と多摩の植物(ボタニカル)を浸漬するクラフトジン。ウイスキーの熟成を待つあいだの、先にお届けする一滴。</p>
            <p className="timeline">先行リリース予定</p>
          </Reveal>
        </div>
        <Reveal>
          <a
            href="/makoto/"
            className="series-feature"
            aria-label="誠コレクションの製品紹介を見る"
          >
            <span className="series-feature-mark" aria-hidden="true">誠</span>
            <span className="series-feature-copy">
              <span className="series-feature-eyebrow">FLAGSHIP SERIES</span>
              <span className="series-feature-title">誠コレクション</span>
              <span className="series-feature-description">
                新選組のふるさと・日野から生まれる、全12瓶の旗艦シリーズ。
              </span>
            </span>
            <span className="series-feature-link">
              シリーズを見る
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </a>
        </Reveal>
        <Reveal>
          <a
            href="/bungo/"
            className="series-feature bungo-feature"
            aria-label="文豪シリーズ、多摩平文庫の紹介を見る"
          >
            <span className="series-feature-mark" aria-hidden="true">文</span>
            <span className="series-feature-copy">
              <span className="series-feature-eyebrow">LITERARY SERIES</span>
              <span className="series-feature-title">文豪シリーズ ─ 多摩平文庫</span>
              <span className="series-feature-description">
                七人の作家を、七つの樽に。日野台地の水から始まる全七編。
              </span>
            </span>
            <span className="series-feature-link">
              シリーズを見る
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </a>
        </Reveal>
        <Reveal>
          <a
            href="/arithmos/"
            className="series-feature arithmos-feature"
            aria-label="数学シリーズ 数(アリトモス)の紹介を見る"
          >
            <span className="series-feature-mark" aria-hidden="true">数</span>
            <span className="series-feature-copy">
              <span className="series-feature-eyebrow">MATHEMATICAL SERIES</span>
              <span className="series-feature-title">数学シリーズ「数（アリトモス）」</span>
              <span className="series-feature-description">
                7つの数学を、7本のウイスキーに。味わいは、証明される。
              </span>
            </span>
            <span className="series-feature-link">
              シリーズを見る
              <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </span>
          </a>
        </Reveal>
        <p className="note">※ ラベル・デザイン・リリース時期はすべてイメージです。オンラインストア(EC)は開所後に開始予定です。</p>
      </div>
    </section>
  );
}
