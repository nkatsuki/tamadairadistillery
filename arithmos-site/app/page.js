import Link from 'next/link';
import { BOTTLES, ITEMS } from '../lib/data';

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="glyph" aria-hidden="true">φ</div>
        <div className="hero-inner">
          <p className="kicker">TAMADAIRA DISTILLERY · MATHEMATICAL SERIES · ARITHMOS</p>
          <h1>
            数学シリーズ
            <br />
            <span className="thin">「数(アリトモス)」</span>
          </h1>
          <div className="rule" />
          <p className="lede">
            日野・多摩平の台地と水脈から、世界のしかたを証明の形式で瓶詰めにする。
            公理から数列まで——7つの数学が、7本のウイスキーになる。
          </p>
          <div className="cta">
            <Link className="btn solid" href="lineup/">ラインナップを見る</Link>
            <Link className="btn" href="distillery/">なぜ、多摩平で数学なのか</Link>
          </div>
        </div>
        <p className="tanzaku">味わいは、証明される。</p>
      </section>

      <section>
        <p className="section-eyebrow">WHY HERE · WHY MATH</p>
        <h2>なぜ、多摩平で「数学」なのか</h2>
        <p className="section-lede">
          多摩平蒸留所は、日野台地の平坦面——「多摩平」の「平」が示す台地の上に立つ。
          幾何学(geometry)の語源は geo(地)+ metria(測る)。土地を測る学問が、
          平坦な大地に直線と円を引ける場所から始まったように、このシリーズも台地のまちから始まる。
          南へは、少数の原理から建てられた計画都市・多摩ニュータウン。東へは、多摩川と浅川が合流する土地。
          仕込み水は黒川清流公園の水脈——水と森と測られた街が、数学の背景になる。
        </p>
        <Link className="btn" href="distillery/">土地との必然性を詳しく</Link>
      </section>

      <section>
        <p className="section-eyebrow">THE SEVEN PROPOSITIONS</p>
        <h2>7本の定理</h2>
        <p className="section-lede">
          数 → 予想 → 群 → 定理 → 恒等式 → 数列。数学の断面を、そのまま棚に並べる。
          ラベルは理論の図形そのものが形になり、墨黒の地に金で浮かぶ。
        </p>
        <div className="grid-7">
          {BOTTLES.map((b) => (
            <Link key={b.no} className="card" href={`lineup/#no${b.no}`}>
              <div className="ph"><img src={b.bottleImg} alt={`${b.name} ボトル`} /></div>
              <div className="meta">
                <span className="no">No.{b.no}</span>
                <span className="abv">{b.abv}</span>
                <h3>{b.name}</h3>
                <span className="lat">{b.latin}</span>
                <span className="more">命題をひらく →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <p className="section-eyebrow">ITEMS &amp; GOODS</p>
        <h2>理論は、グラスの外にも</h2>
        <p className="section-lede">
          墨黒 × シャンパンゴールド × 朱の一点——ボトルと同じ言葉で、グッズを設計する。
        </p>
        <div className="grid-3">
          {ITEMS.map((it) => (
            <div className="item" key={it.name}>
              <div className="ph"><img src={it.img} alt={it.name} /></div>
              <h3>{it.name}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
