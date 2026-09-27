export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="age-note">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4"><circle cx="12" cy="12" r="9.5"/><path d="M12 7.5v6M12 16.5v.5"/></svg>
          <p><strong>20歳未満の者の飲酒は法律で禁止されています。</strong>本サイトは酒類の情報を含むため、20歳未満の方のご利用をご遠慮いただいております。お酒はおいしく適量を。飲酒運転は法律で禁止されています。妊娠中や授乳期の飲酒は胎児・乳児の発育に影響します。</p>
        </div>
        <div className="foot-grid">
          <div className="foot-brand">
            <span className="brand-jp">多摩平蒸留所</span>
            <span className="brand-en gold-grad">Tamadaira Distillery — Hino, Tokyo</span>
          </div>
          <div>
            <div className="foot-links">
              <a href="#">プライバシーポリシー</a>
              <a href="#">特定商取引法に基づく表記</a>
              <a href="#">会社概要</a>
              <a href="#register">事前登録</a>
            </div>
            <div className="sns">
              <a href="#" aria-label="Instagram(準備中)"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4"><rect x="3.5" y="3.5" width="17" height="17" rx="4.5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none"/></svg></a>
              <a href="#" aria-label="X(準備中)"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6"><path d="M4 4l16 16M20 4L4 20"/></svg></a>
              <a href="#" aria-label="YouTube(準備中)"><svg viewBox="0 0 24 24" fill="none" strokeWidth="1.4"><rect x="3" y="6" width="18" height="12" rx="3.5"/><path d="M10.5 9.8l4.5 2.2-4.5 2.2v-4.4Z"/></svg></a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Tamadaira Distillery(構想・先行公開サイト)</span>
          <span>お酒は20歳になってから。 Enjoy responsibly.</span>
        </div>
      </div>
    </footer>
  );
}
