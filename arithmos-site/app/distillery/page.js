export const metadata = { title: '蒸留所について | 数(アリトモス)' };

const NECESSITIES = [
  ['01', '地名「多摩平」は、平面である', '「多摩平」の「平」は台地の平坦面。大地に直線と円を引ける場所——公理が出発できる場所。'],
  ['02', '多摩ニュータウンは「公理から建てられた街」', '八王子・町田・多摩・稲城の4市にまたがる総面積2,853ヘクタールの計画都市。少数の原理から街を構築した、公理的方法の実践。'],
  ['03', '二つの川が合わさる合流点', '日野では多摩川に浅川が注ぐ。二つの流れがひとつに合わさる地形は、ブレンディングの構図そのもの。'],
  ['04', '街道と橋のまちは、グラフである', '甲州街道の日野宿は街道網の要。宿場を点、道と橋を線と呼べば、この土地はグラフ理論の地図。'],
  ['05', '「檜」の名の森と、国産の木で磨く熟成', '多摩の上流・檜原村の「檜」の名の森。ミズナラのような国産の木で磨く熟成は、この土地の水源と森と直結する。'],
];

export default function Distillery() {
  return (
    <main style={{ paddingTop: 90 }}>
      <section>
        <p className="section-eyebrow">WATER · CLIMATE · TOWN</p>
        <h2>なぜ、多摩平で「数学」なのか</h2>
        <p className="section-lede">
          多摩平蒸留所(東京都日野市多摩平)は、新宿からJRで約30分、日野台地の緑に抱かれた
          クラフトウイスキーの蒸留所。黒川清流公園の水脈を仕込み水に、
          Water(水)/ Climate(風土)/ Town(街)をコンセプトに「街とつながる蒸留所」を計画している。
        </p>
        <div className="water-cards">
          <div className="water-card">
            <span className="lat">WATER</span>
            <h3>水</h3>
            <p>黒川清流公園の水脈。多摩川の伏流水で酒を醸す系譜(福生の石川酒造など)の上に立つ。</p>
          </div>
          <div className="water-card">
            <span className="lat">CLIMATE</span>
            <h3>風土</h3>
            <p>多摩の寒暖差と湿度のリズム。長期熟成の相手であり、358ヶ月の契約先。</p>
          </div>
          <div className="water-card">
            <span className="lat">TOWN</span>
            <h3>街</h3>
            <p>テイスティングバーとボトルショップを備え、月例の「多摩平数学サロン」を開く。街とつながる蒸留所。</p>
          </div>
        </div>
        <p className="section-eyebrow">FIVE NECESSITIES</p>
        <h2>土地との必然性 — 5つの接続</h2>
        <p className="section-lede">
          テーマ選定は、比喩ではなく必然による。geometry の語源は geo(地)+ metria(測る)——
          「土地を測る学問」が、台地のまちから生まれる。
        </p>
        <table className="spec" style={{ maxWidth: 940 }}>
          <tbody>
            {NECESSITIES.map(([no, name, desc]) => (
              <tr key={no}>
                <td className="h" style={{ color: 'var(--vermillion)' }}>{no}</td>
                <td className="v">
                  <strong style={{ fontFamily: "'Shippori Mincho B1', serif", fontWeight: 600 }}>{name}</strong>
                  <br />
                  {desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section style={{ paddingTop: 0 }}>
        <p className="section-eyebrow">SOURCES</p>
        <h2>出典</h2>
        <p className="src">
          蒸留所の情報は2026年10月時点の公式サイト公開内容に基づく:
          <br />
          <a href="https://www.tamadairadistillery.com/">tamadairadistillery.com</a> /
          <a href="https://www.tamadairadistillery.com/makoto/"> Flagship Series(makoto)</a>
          <br />
          多摩ニュータウン:東京都都市整備局(
          <a href="https://www.toshiseibi.metro.tokyo.lg.jp/machizukuri/kozo_seibi/tamanew/top">toshiseibi.metro.tokyo.lg.jp</a>)
          <br />
          日野宿・万願寺歩道橋:
          <a href="https://www.hino-film.com/hureaibashi/"> 日野フィルムコミッション</a>
          <br />
          石川酒造(多摩川の伏流水):<a href="https://www.tamajiman.co.jp/">tamajiman.co.jp</a>
        </p>
      </section>
    </main>
  );
}
