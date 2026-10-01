import AgeGatePersist from './AgeGatePersist';

/**
 * 二十歳確認。
 * チェックボックス + CSS だけで開閉するため、JavaScript が動かない環境でも操作できる。
 * AgeGatePersist は「一度確認したら同じタブでは再表示しない」ためだけに使う。
 */
export default function AgeGate() {
  return (
    <>
      <input type="checkbox" id="age-yes" className="ageinput" aria-label="二十歳以上です" />
      <input type="checkbox" id="age-no" className="ageinput" aria-label="二十歳未満です" />

      <div id="gate" role="dialog" aria-modal="true" aria-labelledby="gate-title">
        <div className="gate-inner">
          <div id="gate-ask">
            <div className="gate-mark">多摩平蒸留所</div>
            <h1 className="gate-title" id="gate-title">
              二十歳以上ですか
            </h1>
            <p className="gate-sub">AGE VERIFICATION</p>
            <div className="gate-rule" />
            <p className="gate-copy">
              このページはアルコール飲料の商品情報を含みます。
              <br />
              日本国内の法令により、二十歳未満の方はご覧いただけません。
            </p>
            <div className="gate-btns">
              <label className="gate-btn primary" htmlFor="age-yes" role="button" tabIndex={0}>
                はい、二十歳以上です
              </label>
              <label className="gate-btn" htmlFor="age-no" role="button" tabIndex={0}>
                いいえ
              </label>
            </div>
            <p className="gate-note">
              お酒は二十歳になってから。飲酒運転は法律で禁止されています。
              <br />
              妊娠中・授乳期の飲酒は、胎児・乳児の発育に悪影響を与えるおそれがあります。
            </p>
          </div>

          <div id="gate-declined">
            <div className="gate-mark">多摩平蒸留所</div>
            <h2 className="gate-title">ご覧いただけません</h2>
            <div className="gate-rule" />
            <p className="gate-copy">
              <strong>二十歳未満の方</strong>は、このページをご覧いただけません。
              <br />
              二十歳を迎えられましたら、あらためてお越しください。
            </p>
            <div className="gate-btns">
              <label className="gate-btn" htmlFor="age-no" role="button" tabIndex={0}>
                戻る
              </label>
            </div>
          </div>
        </div>
      </div>

      <AgeGatePersist />
    </>
  );
}
