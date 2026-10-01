import { BOTTLES } from '../../lib/data';

export const metadata = { title: 'ラインナップ | 数(アリトモス)' };

export default function Lineup() {
  return (
    <main style={{ paddingTop: 90 }}>
      <section style={{ paddingBottom: 0 }}>
        <p className="section-eyebrow">LINEUP · SERIES II</p>
        <h2>7本の定理 — 命題と証明</h2>
        <p className="section-lede">
          各ボトルの裏ラベルは、数学書の証明書式で統一する。
          テイスティングノートは「定理」として書かれ、証明終の記号で閉じる。
          バッチ番号は素数で採番——偶数のバッチは存在しない。
        </p>
      </section>
      {BOTTLES.map((b) => (
        <section key={b.no} id={`no${b.no}`} style={{ padding: '30px 7vw' }}>
          <div className="prop">
            <div className="imgs">
              <figure><img src={b.labelImg} alt={`${b.name} ラベル案`} /></figure>
              <figure><img src={b.bottleImg} alt={`${b.name} ボトル完成形`} /></figure>
            </div>
            <div>
              <div className="no-row">
                <span className="no">No.{b.no}</span>
                <span className="shape">{b.shape}</span>
              </div>
              <h3>{b.name}</h3>
              <p className="lat">{b.latin} — {b.tagline}</p>
              <p className="theory">{b.theory}</p>
              <p style={{ fontSize: 13.5, color: 'var(--paper-dim)', marginTop: 0 }}>{b.design}</p>
              <table className="spec" style={{ margin: '14px 0 0' }} aria-label={`${b.name} 香味と数理の対応`}>
                <tbody>
                  {b.flavor.map(([k, v]) => (
                    <tr key={k}>
                      <td className="h" style={{ color: 'var(--gold)' }}>{k}</td>
                      <td className="v" style={{ fontFamily: 'inherit', fontSize: 13, lineHeight: 1.85 }}>{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {b.clause && <p className="clause">{b.clause}</p>}
              <table className="spec" aria-label={`${b.name} 規格`}>
                <tbody>
                  <tr><td className="h">樽・熟成</td><td className="v">{b.cask}</td></tr>
                  <tr><td className="h">度数</td><td className="v">{b.abv}</td></tr>
                  <tr><td className="h">リリース</td><td className="v">{b.release}</td></tr>
                </tbody>
              </table>
              <div className="proof" style={{ marginTop: 20 }}>
                {b.proof.map(([k, v]) => (
                  <div className="row" key={k}>
                    <span className="k">{k}</span>
                    <span>
                      {k === '定理' ? (
                        <>
                          {v.replace(/∎$/, '')}
                          <span className="qed">∎</span>
                        </>
                      ) : (
                        v
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
      <section style={{ paddingTop: 0 }}>
        <p className="src">
          表示について:全品無着色。熟成年数・樽構成・度数の根拠を裏ラベルに明記する。
          酒税法上の「ウイスキー」定義と国税庁通知(2021年)の「ジャパニーズウイスキー」表示基準を遵守する。
        </p>
      </section>
    </main>
  );
}
