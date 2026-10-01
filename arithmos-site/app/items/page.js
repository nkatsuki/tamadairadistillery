import { ITEMS, ITEM_PROPOSALS } from '../../lib/data';

export const metadata = { title: 'アイテム展開 | 数(アリトモス)' };

export default function Items() {
  return (
    <main style={{ paddingTop: 90 }}>
      <section>
        <p className="section-eyebrow">ITEMS &amp; GOODS</p>
        <h2>理論は、グラスの外にも</h2>
        <p className="section-lede">
          ボトルを飲み終えたあとも、机の上に理論が残る。
          すべて「墨黒 × シャンパンゴールド × 朱の一点」で統一する。
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
      <section>
        <p className="section-eyebrow">NEXT PROPOSALS</p>
        <h2>追加アイテム候補</h2>
        <table className="spec" style={{ maxWidth: 860 }}>
          <tbody>
            {ITEM_PROPOSALS.map(([name, desc]) => (
              <tr key={name}>
                <td className="h" style={{ width: '13em' }}>{name}</td>
                <td className="v">{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
