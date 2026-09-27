import Reveal from './Reveal';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <section id="register">
      <div className="wrap">
        <Reveal as="div" className="inner">
          <div className="reg-grid">
            <div className="reg-copy">
              <div className="eyebrow" style={{ marginBottom: 18 }}><span className="dia"></span><span className="en">Pre-register</span><span className="jp">先行登録</span></div>
              <h2>多摩平の一滴を、<br />いち早く。</h2>
              <p>開所情報、クラウドファンディングの開始、限定ボトルやオンラインストア(EC)のお知らせをメールでお届けします。まずは事前登録から。</p>
              <a className="line-btn" href="#" aria-label="LINE公式アカウント(準備中)">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#06C755" strokeWidth="1.6"><path d="M12 3c-5 0-9 3.2-9 7.2 0 2.5 1.6 4.8 4 6.1L6 21l4.4-2.4c.5.1 1 .1 1.6.1 5 0 9-3.2 9-7.2S17 3 12 3Z"/></svg>LINE公式アカウントでも配信予定
              </a>
            </div>
            <RegisterForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
