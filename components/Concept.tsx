import Reveal from './Reveal';

export default function Concept() {
  return (
    <section id="concept">
      <div className="vein" aria-hidden="true"></div>
      <div className="wrap">
        <Reveal as="div" className="eyebrow"><span className="dia"></span><span className="en">Concept</span><span className="jp">コンセプト — 緑と水のテロワール</span></Reveal>
        <div className="grid">
          <Reveal>
            <h2>日野台地の深層から、<br />静かに湧く一滴。</h2>
            <p className="lead">
              多摩平は、新宿から30分ほどの<strong>日野台地・日野市</strong>に広がる緑豊かな街です。その地下には、東京の名湧水として名高い<strong>黒川清流公園</strong>へつながる清冽な水脈が静かに流れています。<br /><br />
              仕込み水にこの地下水を用い、蒸留も熟成(貯蔵)も多摩平の地で。夏の湿気と冬の冷え、四季の寒暖差が樽の中の原酒をゆっくりと育てる — 私たちはそれを<strong>「多摩平テロワール」</strong>と呼んでいます。
            </p>
          </Reveal>
          <Reveal as="figure" className="concept-img" delay={1}>
            <img src="/img/water.jpg" alt="日野台地の清流のイメージ" />
            <figcaption>日野台地の湧水イメージ</figcaption>
          </Reveal>
        </div>
        <div className="elements">
          <Reveal as="div" className="el">
            <span className="el-num" aria-hidden="true">壹 · 水</span>
            <div className="el-body">
              <h3>清冽な仕込み水<span className="en">Water</span></h3>
              <p>黒川清流公園の水脈から引く軟水。鉄分やミネラルのバランスが穏やかな水は、雑味のすくない、繊細でクリアな原酒をもたらします。加水にも同じ水を使い、ボトルの一滴まで多摩平の味わいに。</p>
            </div>
          </Reveal>
          <Reveal as="div" className="el">
            <span className="el-num" aria-hidden="true">貳 · 気候</span>
            <div className="el-body">
              <h3>四季が熟成を深める<span className="en">Climate</span></h3>
              <p>蒸し暑い夏は樽が原酒を吸い、静かな冬は寝静まる。多摩平の寒暖差が繰り返す呼吸のような熟成サイクルが、深みと丸みを同時に育てます。</p>
            </div>
          </Reveal>
          <Reveal as="div" className="el">
            <span className="el-num" aria-hidden="true">參 · 街</span>
            <div className="el-body">
              <h3>街とつながる蒸留所<span className="en">Town</span></h3>
              <p>つくる場所で、味わう場所へ。蒸留所に試飲バーカウンターと限定ショップを併設し、近隣の飲食店や農園ともつくる「都市型マイクロディスティラリー」を目指します。</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
