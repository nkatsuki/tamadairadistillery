import Reveal from './Reveal';

export default function News() {
  return (
    <section id="news">
      <div className="vein" aria-hidden="true"></div>
      <div className="wrap">
        <Reveal as="div" className="eyebrow"><span className="dia"></span><span className="en">News</span><span className="jp">お知らせ</span></Reveal>
        <Reveal as="h2">多摩平から、ゆるやかな便り。</Reveal>
        <Reveal as="div" className="news-list" delay={1}>
          <article className="news-item">
            <time className="news-date" dateTime="2026-09-27">2026.09.27</time>
            <span className="news-cat">お知らせ</span>
            <h3 className="news-title">公式サイト(コンセプト版)を先行公開しました<small>ブランドストーリーと蒸留所構想を掲載しています</small></h3>
            <span className="news-arrow" aria-hidden="true">→</span>
          </article>
          <article className="news-item">
            <time className="news-date" dateTime="2026-10">2026.10(予定)</time>
            <span className="news-cat">プロジェクト</span>
            <h3 className="news-title">クラウドファンディングの準備を進めています<small>開所と初期仕込みにむけた支援スキームを構想中</small></h3>
            <span className="news-arrow" aria-hidden="true">→</span>
          </article>
          <article className="news-item">
            <time className="news-date">2027(目標)</time>
            <span className="news-cat">開所情報</span>
            <h3 className="news-title">蒸留所・試飲バーの開所にむけて<small>着工・初仕込みの時期は決まり次第お知らせします</small></h3>
            <span className="news-arrow" aria-hidden="true">→</span>
          </article>
        </Reveal>
        <p className="note">※ 日付・内容は先行公開時点の表記例です。</p>
      </div>
    </section>
  );
}
