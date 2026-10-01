import Image from 'next/image';
import AgeGate from '@/components/AgeGate';
import Rail from '@/components/Rail';
import VolumeSection from '@/components/VolumeSection';
import BunkoShelf from '@/components/BunkoShelf';
import { volumes, parts } from '@/data/volumes';

export default function Page() {
  return (
    <>
      <AgeGate />
      <Rail />

      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-top">
          <div className="hero-brand">
            多摩平蒸留所
            <span>TAMADAIRA DISTILLERY</span>
          </div>
          <div className="hero-vol">
            NEW SERIES
            <br />
            BUNGO SERIES / 2026
          </div>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">日野台地の水から、七つの樽へ</p>
          <h1 className="hero-title">
            七つの物語を、
            <br />
            <em>七つの樽</em>に。
          </h1>
          <p className="hero-sub">文豪シリーズ ── 多摩平文庫</p>
          <div className="hero-meta">
            <div>
              VOLUMES<b>全七編</b>
            </div>
            <div>
              WATER<b>日野台地の仕込み水</b>
            </div>
            <div>
              BASE CASK<b>バーボンバレル 3年以上</b>
            </div>
            <div>
              PRINCIPLE<b>原酒はひとつ、物語は樽に宿す</b>
            </div>
          </div>
        </div>

        <div className="hero-shelf">
          <Image
            src="/img/bungo/shelf.png"
            alt="文豪シリーズ七本を棚に並べた完成イメージ"
            width={1472}
            height={832}
            priority
            sizes="100vw"
          />
        </div>
      </header>

      {/* ===================== 序 ===================== */}
      <section className="sec dark" id="prologue">
        <div className="sec-inner">
          <p className="eyebrow">PROLOGUE ── 多摩平という名の土地から</p>
          <h2 className="sec-h">
            七人の作家を、
            <br />
            日野台地の樽で読む。
            <span className="small">日野台地の水から始まる、七つの物語です。</span>
          </h2>

          <div className="two">
            <div className="body">
              <p>
                多摩平。その名には、<strong>多摩</strong>が入っています。日野市の西、多摩川と浅川に挟まれた
                <strong>日野台地</strong>の上に、その名はあります。台地の縁からは、いまも清水が湧く。黒川清流公園へつながる水脈です。
              </p>
              <p>
                多摩は、近代文学の土地でもありました。多くの作家が、この一帯に住み、歩き、作品を書いた。この土地に眠る者もいます。
                <strong>酒を醸す土地が、文学の土地でもある。</strong>それだけの理由で、このシリーズは生まれました。
              </p>
            </div>
            <div className="body">
              <p>
                <strong>原酒はひとつ。</strong>日野台地の水で仕込み、同じ樽で三年以上育てた一滴を、作家ごとの樽に移し替えて仕上げます。同じ一滴が、七つの物語になる。それがこのシリーズの、ただひとつの仕掛けです。
              </p>
              </div>
          </div>

        </div>
      </section>

      {/* ===================== 全七編 ===================== */}
      {volumes.map((v) => (
        <VolumeSection key={v.code} volume={v} />
      ))}

      {/* ===================== 多摩平文庫 ===================== */}
      <section className="sec dark" id="bunko">
        <div className="sec-inner">
          <p className="eyebrow">TAMADAIRA BUNKO</p>
          <h2 className="sec-h">
            多摩平文庫
            <span className="small">一冊ずつが、一本ずつに対応します。</span>
          </h2>
          <div className="two">
            <div className="body">
              <p>
                文庫判 105 × 148mm、全七冊。ボトルと同じ意匠を、本の版面に組み直したものです。棚に並べると、背表紙に「多摩平文庫」と巻号が揃い、一つの全集になります。
              </p>
            </div>
            <div className="body">
              <p>
                巻末には、樽の系譜とテイスティングノート。ボトルに同梱し、書店のフェアに並べ、図書館にも置いていただく。お酒を飲まない方にも、作品は届きます。
              </p>
            </div>
          </div>
          <BunkoShelf />
        </div>
      </section>

      {/* ===================== シリーズ構成 ===================== */}
      <section className="sec" id="plan">
        <div className="sec-inner">
          <p className="eyebrow">SERIES</p>
          <h2 className="sec-h">
            三つの編で、七本。
            <span className="small">第一集、第二集、第三集。順に、お届けします。</span>
          </h2>

          <div className="plan">
            {parts.map((p) => (
              <div key={p.key}>
                <div className="p-n">{p.key}</div>
                <h4>{p.name}</h4>
                <p>{p.summary}</p>
                <ul>
                  {p.titles.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="two" style={{ marginTop: '56px' }}>
            <div>
              <h3 className="sub-h">樽を、予約する。</h3>
              <div className="body">
                <p>
                  文豪の名を冠した樽を、先予約でおわけします。「独歩の樽」「賢治の樽」 ── 三年後、その樽から瓶詰めしたボトルをお届けします。
                </p>
                <p>自分の樽が育つのを待つ。その時間ごと、お届けする仕組みです。</p>
              </div>
            </div>
            <div>
              <h3 className="sub-h">蒸留所で、味わう。</h3>
              <div className="body">
                <p>
                  <strong>文豪の夜</strong>　月に一度、試飲バーで朗読とテイスティングを。
                  <br />
                  <strong>文学散歩</strong>　多摩平から黒川清流公園へ。歩いて、戻って一杯を。
                  <br />
                  <strong>読書会</strong>　月替わりで一冊。
                  <br />
                  <strong>書店フェア</strong>　作品とボトルを、同じ棚に。
                </p>
              </div>
            </div>
          </div>

          <p className="closing">
            作家と作品を、お酒の売り文句にはしません。
            <br />
            七人ぶんの敬意、そのまま樽に詰めました。
          </p>
        </div>
      </section>

      {/* ===================== 蒸留所 ===================== */}
      <section className="dist" id="distillery">
        <div className="sec-inner">
          <div className="dist-card">
            <div>
              <p className="eyebrow">TAMADAIRA DISTILLERY ── 多摩平蒸留所</p>
              <h3>多摩という名の土地で、水からつくる。</h3>
              <p>
                多摩平蒸留所は、東京都日野市多摩平に構想中の都市型マイクロディストラリーです。日野台地の地下を流れ、東京の名湧水として知られる黒川清流公園へつながる清冽な水脈を仕込み水に、蒸留も熟成もこの地で行います。蒸留所には、原酒の一滴をその場で味わえる試飲バーカウンターと、限定ボトルを届ける直売ショップを併設する構想です。
              </p>
            </div>
            <a
              className="dist-btn"
              href="https://www.tamadairadistillery.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              多摩平蒸留所 公式サイトを見る <span className="arw">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* ===================== フッター ===================== */}
      <footer className="footer">
        <div className="foot-in">
          <div>
            <div className="foot-brand">
              多摩平蒸留所<span>TAMADAIRA DISTILLERY</span>
            </div>
            <p className="foot-meta" style={{ marginTop: '22px' }}>
              文豪シリーズ ── 多摩平文庫　／　全七編
              <br />
              <a href="https://www.tamadairadistillery.com/" target="_blank" rel="noopener noreferrer">
                https://www.tamadairadistillery.com/
              </a>
            </p>
          </div>
          <div className="foot-meta" style={{ maxWidth: '560px' }}>
            掲載している樽の仕様・熟成期間は、すべて企画段階の想定値です。
            <br />
            図版はデザイン検討用のイメージであり、実際の商品とは異なる場合があります。
            <br />
            お酒は二十歳になってから。飲酒運転は法律で禁止されています。
            <br />
            妊娠中・授乳期の飲酒は、胎児・乳児の発育に悪影響を与えるおそれがあります。
          </div>
          <div className="badge20" aria-label="二十歳以上">
            20+
          </div>
        </div>
      </footer>
    </>
  );
}
