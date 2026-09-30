import AgeGate from '@/components/makoto/AgeGate';
import SeiMark from '@/components/makoto/SeiMark';
import Lineup from '@/components/makoto/Lineup';
import FlavorMap from '@/components/makoto/FlavorMap';

// TODO: コーポレートサイト(ティザーサイト)のURLに差し替えてください
const CORPORATE_URL = '/';

function Section({
  id,
  no,
  title,
  sub,
  children,
}: {
  id: string;
  no: string;
  title: string;
  sub: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl scroll-mt-20 px-6 py-16">
      <h2 className="border-l-[5px] border-shu pl-4 text-2xl font-semibold sm:text-[26px]">
        <span className="font-en block text-sm tracking-[0.2em] text-gold">
          {no}
        </span>
        {title}
      </h2>
      <p className="mt-2 pl-5 text-sm text-ink2">{sub}</p>
      <div className="mt-8">{children}</div>
    </section>
  );
}

const navs = [
  { href: '#story', label: '物語' },
  { href: '#lineup', label: 'ラインナップ' },
  { href: '#flavor', label: '味わい' },
  { href: '#package', label: '木箱と帯' },
  { href: '#news', label: '続報' },
];

const pillars = [
  {
    title: '壱|ひと瓶に、ひと隊士',
    body: '局長・副長・十番隊の組長まで全12種。各瓶の樽・熟成・口当たりを、その人物の生涯と剣の型から設計する——「飲んで分かる人物評」のシリーズです。',
  },
  {
    title: '弐|ふるさと・日野の入口',
    body: '高幡不動尊、日野宿本陣、新選組まつり——市全体が「新選組のふるさと」。この土地の旅の終着点が、グラス一杯の誠になります。',
  },
  {
    title: '参|揃えたくなるシリーズ',
    body: '一番隊から十番隊まで、番号と伝統色が揃う設計。単瓶は贈り物に、全12瓶のコンプリート木箱は、隊旗が並ぶようなコレクションに。',
  },
];

const boxPoints = [
  { title: '焚き火と焼き印', body: '深い栗色の古木調に「誠」を焼き印で。蒸留の熱と、オーク樽を焼く炎——ウイスキーづくりの火を、そのまま箱に刻みました。' },
  { title: '蓋裏は隊旗', body: '開けると赤地に白の「誠」。隊旗モチーフの焼き印と、全12瓶それぞれのシリアル番号(No.壱〜拾弐)が入ります。' },
  { title: '日野の線刻', body: '箱の側面には、高幡不動尊の大銀杏、多摩川、甲州街道の道筋を木目の線刻で。グラス片手に読める「歩ける物語」です。' },
  { title: '晩秋の年次限定', body: '全12瓶のコンプリート木箱は、新選組まつり・高幡不動の銀杏の時期(晩秋)の限定発売を予定しています。' },
];

const obiPoints = [
  { title: '局長|緋 × 金箔', body: '深緋の和紙地に金箔押しの「誠」——その厚みは、誠の厚み。シェリーの暖かみを、金の煌めきで包みます。' },
  { title: '副長|紺 × 銀箔', body: '深紺の和紙地に銀箔押しの「誠」——鬼の芯に、花の余韻。夜の京の剣の冷徹さを、銀の光で。' },
  { title: '金と銀、二枚の帯', body: '二枚の帯を並べるだけで、シリーズの頂点が伝わります。帯の裏面には、それぞれシリアル番号(No.壱/No.弐)。' },
  { title: '贈る日のために', body: '肩から胴へ掛ける幅広の和紙帯・箔押し仕立て・手漉き風の帯封。大切な日の一杯として、贈答向けの仕様を予定しています。' },
];

const phases = [
  { title: '第一弾|開業とともに', body: '局長・近藤勇/副長・土方歳三の2本(プレミアム帯付き)から始まります。シリーズの軸——厚みと緊張感——を、まずこの二瓶で。' },
  { title: '第二弾|人気の隊長たち', body: '一番隊・沖田総司、三番隊・斎藤一、そして地元・日野の六番隊・井上源三郎。続く三本で世界が広がります。' },
  { title: '完結|十人の隊旗', body: '一〜十番隊の完結とともに、コンプリート木箱が晩秋の限定で登場予定。揃えたあなたの箱が、隊旗になります。' },
];

export default function Page() {
  return (
    <>
      <AgeGate />
      <nav className="sticky top-0 z-40 border-b border-line bg-paper px-6 py-3">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            <span className="text-2xl font-extrabold leading-none">誠</span>
            <span className="font-en text-xs uppercase tracking-[0.3em] text-gold">
              Tamadaira Distillery
            </span>
          </a>
          <div className="hidden items-center gap-6 text-xs tracking-[0.15em] text-ink2 sm:flex">
            {navs.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-shu">
                {n.label}
              </a>
            ))}
            <a href={CORPORATE_URL} className="border border-ink px-3 py-1.5 hover:bg-ink hover:text-paper">
              蒸留所公式サイト
            </a>
          </div>
        </div>
      </nav>

      <header id="top" className="relative border-b border-line px-6 pb-16 pt-20 text-center">
        <p className="font-en text-[13px] uppercase tracking-[0.45em] text-gold">
          Tamadaira Distillery — Flagship Whisky
        </p>
        <div className="mt-10">
          <SeiMark className="text-[110px] sm:text-[150px]" />
        </div>
        <h1 className="mt-10 text-3xl font-semibold tracking-[0.12em] sm:text-4xl">
          「誠」コレクション
        </h1>
        <p className="mt-6 text-lg tracking-[0.18em] text-shu sm:text-xl">誠は、味になる。</p>
        <p className="mt-4 text-sm leading-8 text-ink2 sm:text-base">
          日野(東京)・多摩平発 クラフトウイスキー × 新選組
          <br />
          局長・副長・一番隊から十番隊まで、全12瓶の旗艦シリーズ
        </p>
        <span className="mt-6 inline-block rounded-full border border-gold px-4 py-1.5 text-[11px] tracking-[0.25em] text-gold">
          発売準備中|続報は蒸留所公式サイトにて
        </span>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#lineup" className="bg-shu px-6 py-3 text-xs tracking-[0.25em] text-white hover:opacity-90">
            ラインナップを見る
          </a>
          <a href={CORPORATE_URL} className="border border-ink px-6 py-3 text-xs tracking-[0.25em] hover:bg-ink hover:text-paper">
            蒸留所公式サイト
          </a>
        </div>
      </header>

      <Section id="story" no="01 — STORY" title="日野から、誠を。" sub="新選組のふるさと・日野。ここから、誠が味わいになります">
        <p className="max-w-3xl leading-9">
          日野市は、新選組副長・土方歳三(石田村)と六番隊組長・井上源三郎(日野宿)を生んだ「新選組のふるさと」。近藤勇と沖田総司が剣を磨き、彼らが出会った土地でもあります。
          多摩平蒸留所は、この土地から「誠」の一字に生きた者たちを、ウイスキーとして醸します。熟成という時を耐える旅の果てに——<em>ラベルは顔ではなく味わい</em>。一人の隊士が、一つの味わいになる。
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="border-t-[3px] border-shu bg-card p-5">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-7 text-ink2">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="lineup" no="02 — LINEUP" title="誠の十二枚" sub="樽設計・度数は開発中のものです。原酒が育つのと並行して、確定版をお届けします">
        <Lineup />
        <p className="mt-6 text-xs leading-6 text-ink2">
          ※ 歴史上の呼称に合わせ、総責任者を「局長」、その補佐を「副長」、各隊の指揮官を「組長」と表記しています。
        </p>
      </Section>

      <Section id="flavor" no="03 — TASTE" title="味わいの全体図" sub="横軸=軽やか↔力強い/縦軸=甘美↔ドライ。一隊ずつが、系譜の中に座ります">
        <FlavorMap />
      </Section>

      <Section id="package" no="04 — PACKAGE" title="木箱とプレミアム帯" sub="揃えた先に「隊旗」がある——コンプリート木箱と、頂点の二瓶を示す金・銀の帯">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4">
          {/* eslint-disable @next/next/no-img-element */}
          <img src="/img/makoto/box-closed.webp" alt="コンプリート木箱(閉)" loading="lazy" className="w-full border border-line" />
          <img src="/img/makoto/box-open.webp" alt="コンプリート木箱(開)" loading="lazy" className="w-full border border-line" />
          <img src="/img/makoto/obi-kondo.webp" alt="局長・近藤勇 プレミアム帯(緋×金箔)" loading="lazy" className="w-full border border-line" />
          <img src="/img/makoto/obi-hijikata.webp" alt="副長・土方歳三 プレミアム帯(紺×銀箔)" loading="lazy" className="w-full border border-line" />
          {/* eslint-enable @next/next/no-img-element */}
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-2">
          {boxPoints.map((p) => (
            <div key={p.title} className="border-t-[3px] border-shu bg-card p-5">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-7 text-ink2">{p.body}</p>
            </div>
          ))}
          {obiPoints.map((p) => (
            <div key={p.title} className="border-t-[3px] border-gold bg-card p-5">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-7 text-ink2">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="news" no="05 — RELEASE" title="続報・発売時期について" sub="発売時期・内容はすべて予定です。決定事項は、蒸留所公式サイト・公式SNSで改めてお知らせします">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {phases.map((p) => (
            <div key={p.title} className="border-t-[3px] border-shu bg-card p-5">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-[13px] leading-7 text-ink2">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl border border-gold bg-[#f4ecdb] p-8 text-center">
          <p className="text-sm leading-8 text-ink2">
            蒸留所の開業情報、見学のご案内、初号蒸留の進捗などは
            <br />
            多摩平蒸留所 公式サイトで発信しています。
          </p>
          <a
            href={CORPORATE_URL}
            className="mt-5 inline-block bg-deep px-8 py-3 text-xs tracking-[0.25em] text-[#f2ecdd] hover:opacity-90"
          >
            多摩平蒸留所 公式サイトへ
          </a>
        </div>
      </Section>

      <footer className="border-t border-line px-6 py-12 text-center text-xs leading-8 text-ink2">
        <p>20歳未満の飲酒は法律で禁じられています。飲酒運転・妊娠中および授乳期の飲酒はやめましょう。</p>
        <p>掲載の画像は開発中のイメージです。デザイン・度数・樽・価格は変更になる場合があります。</p>
        <p className="mt-4">
          多摩平蒸留所(開業準備中)——東京都日野市多摩平(表示用プレースホルダー)
          <br />
          <a href={CORPORATE_URL} className="underline hover:text-shu">
            蒸留所公式サイト(会社概要・アクセス)
          </a>
        </p>
        <p className="font-en mt-2 tracking-[0.25em] text-gold">TAMADAIRA DISTILLERY — MAKOTO COLLECTION</p>
      </footer>
    </>
  );
}
