import Reveal from './Reveal';

export default function DistilleryBarShop() {
  return (
    <section id="distillery">
      <div className="wrap">
        <Reveal as="div" className="eyebrow"><span className="dia"></span><span className="en">Distillery · Bar · Shop</span><span className="jp">蒸留所と、隣り合う一杯の時間</span></Reveal>
        <Reveal as="h2">つくる場所で、味わう場所へ。</Reveal>
        <Reveal as="p" className="lead" delay={1}>
          単身・小型のポットスチルで小さく始め、多摩平の水と気候で丁寧に仕込むマイクロディスティラリー。並ぶのは、原酒の一滴をその場で味わえる<strong>試飲バーカウンター</strong>と、限定ボトルを届ける<strong>直売ショップ</strong>です。
        </Reveal>
        <div className="split">
          <Reveal as="div" className="card">
            <img src="/img/bar.jpg" alt="試飲バーカウンターのイメージ" />
            <div className="card-body">
              <p className="card-tag">Tasting Bar</p>
              <h3>試飲バーカウンター</h3>
              <p>ニューメイクから熟成原酒まで、蒸留所でしか味わえないグラスをカウンターで。ウイスキーとともに多摩平の時間を過ごす、10席あまりの静かな空間を構想しています。</p>
            </div>
          </Reveal>
          <Reveal as="div" className="card" delay={1}>
            <img src="/img/shop.jpg" alt="直売ショップ・ボトルのイメージ" />
            <div className="card-body">
              <p className="card-tag">Bottle Shop</p>
              <h3>限定ショップ</h3>
              <p>蒸留所限定の瓶詰め、グラス、樽の予約(樽先予約)を扱う直売ショップ。オンラインストア(EC)は開所後に開始予定 — まずは店頭から始まります。</p>
            </div>
          </Reveal>
        </div>
        <Reveal as="dl" className="spec">
          <div className="spec-head"><span className="dia"></span><span>Distillery Plan — 構想</span></div>
          <div className="spec-grid">
            <div className="spec-item">
              <dt><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4"><path d="M10 2h4M11 2v6l-5 9a3 3 0 0 0 2.6 4.5h6.8A3 3 0 0 0 18 17l-5-9V2"/></svg>ポットスチル</dt>
              <dd>2基 <small>初留・再留(単身型)</small></dd>
            </div>
            <div className="spec-item">
              <dt><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4"><path d="M12 3c-4 3-7 6.5-7 10a7 7 0 0 0 14 0c0-3.5-3-7-7-10Z"/></svg>仕込み水</dt>
              <dd>黒川清流公園の水脈 <small>清冽な地下水(軟水)</small></dd>
            </div>
            <div className="spec-item">
              <dt><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4"><path d="M4 15c2-1 3.5-1 5.5 0s3.5 1 5.5 0 3.5-1 5 0M4 19c2-1 3.5-1 5.5 0s3.5 1 5.5 0 3.5-1 5 0M8 12V6a4 4 0 0 1 8 0v6"/></svg>貯蔵</dt>
              <dd>多摩平の地で <small>四季の寒暖差を活かす</small></dd>
            </div>
            <div className="spec-item">
              <dt><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4"><path d="M12 21s-7-4.6-9.5-9A5.5 5.5 0 0 1 12 6a5.5 5.5 0 0 1 9.5 6c-2.5 4.4-9.5 9-9.5 9Z"/></svg>併設</dt>
              <dd>バー・ショップ <small>街にひらいた蒸留所</small></dd>
            </div>
          </div>
        </Reveal>
        <p className="note">※ 設備・仕様は構想段階のもので、開所時に変更となる場合があります。</p>
      </div>
    </section>
  );
}
