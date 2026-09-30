import BottleCard from './BottleCard';

type Bottle = {
  role: string;
  kana: string;
  name: string;
  color: string;
  copy: string;
  spec: string;
  desc: string;
  img: string;
};

export const bottles: Bottle[] = [
  {
    role: '局長',
    kana: 'いさみ',
    name: '近藤勇',
    color: '#a02c1f',
    copy: 'その厚みは、誠の厚み。',
    spec: 'オロロソ・シェリー仕込長期 / 52%(予定)',
    desc: '農家の長男から新選組の総帥へ。厚い眉と人情的な笑顔で組をまとめた、慈悲と覚悟の男。シリーズの頂点に立つ、器の大きいシェリーモルト。',
    img: '/img/makoto/label-01-kondo-sil.webp',
  },
  {
    role: '副長',
    kana: 'としぞう',
    name: '土方歳三',
    color: '#1d2a4a',
    copy: '鬼の芯に、花の余韻。',
    spec: 'ヘヴィピート+シェリー仕上げ / 50%(予定)',
    desc: '「鬼の副長」の異名で法度を敷いた一方、美しい辞世を残した詩人。日野・石田村の生まれ。剣のように鋭いスモークが、杯の底で花に変わる。',
    img: '/img/makoto/label-02-hijikata-sil.webp',
  },
  {
    role: '一番隊',
    kana: 'そうじ',
    name: '沖田総司',
    color: '#e8a7b5',
    copy: 'その一閃、甘く歪まない。',
    spec: '赤ワイン樽+ミズナラ仕上げ / 45%(予定)',
    desc: '天然理心流一番手と謳われた天才剣士。明るく人好きのする性質で、病を抱えながらも一番隊を率いた。華やかさと、一瞬の切れ味を両立させる一杯。',
    img: '/img/makoto/label-03-okita-sil.webp',
  },
  {
    role: '二番隊',
    kana: 'しんぱち',
    name: '永倉新八',
    color: '#d4762c',
    copy: '語り継ぐ一杯は、豪快に。',
    spec: 'バーボン+シェリー / 50%(予定)',
    desc: '神道無念流の達人で、後に生き残って新選組の記録を語り部として残した男。飾らず力のままに。飲み手を満腹にする、豪快なオーソドックス。',
    img: '/img/makoto/label-04-nagakura-sil.webp',
  },
  {
    role: '三番隊',
    kana: 'はじめ',
    name: '斎藤一',
    color: '#2e5540',
    copy: '口にしない、強さ。',
    spec: 'バーボン樽(ドライ・ミネラル) / 45%(予定)',
    desc: '無口で規律に殉じた、隊きっての実力者。主張しない味わいの中にだけ立つ、筋の通ったドライフィニッシュ。',
    img: '/img/makoto/label-05-saito-sil.webp',
  },
  {
    role: '四番隊',
    kana: 'ちゅうじ',
    name: '松原忠司',
    color: '#c8b183',
    copy: '柔よく剛を制す。',
    spec: 'バーボン樽(ライトトースト) / 43%(予定)',
    desc: '柔術に優れ、隊内では柔術指南役を務めたと伝わる四番隊組長。強さを着込まない、包み込むような味わい。',
    img: '/img/makoto/label-06-matsubara-sil.webp',
  },
  {
    role: '五番隊',
    kana: 'かんりゅうさい',
    name: '武田観柳斎',
    color: '#d9a413',
    copy: '兵法は、杯の内。',
    spec: 'ヴァージンオーク+ワイン樽 / 46%(予定)',
    desc: '兵法と文筆に通じたと伝わる、隊きっての知将。読むほどに旨みが重なる、戦略的な複雑味の一杯。',
    img: '/img/makoto/label-07-takeda-sil.webp',
  },
  {
    role: '六番隊',
    kana: 'げんざぶろう',
    name: '井上源三郎',
    color: '#efe6cf',
    copy: '日野の道を、真っすぐ。',
    spec: '王道バーボン樽 / 43%(予定)',
    desc: '六番隊組長・井上源三郎は日野宿の生まれ。近藤家とともに試衛館を支え、甲州勝沼で散った、質実剛健の男。日野の皆さまには、一番身近な一瓶です。',
    img: '/img/makoto/label-08-inoue-sil.webp',
  },
  {
    role: '七番隊',
    kana: 'さんじゅうろう',
    name: '谷三十郎',
    color: '#7db4c2',
    copy: '軽やかに、七の字。',
    spec: '再fill樽(淡麗タイプ) / 43%(予定)',
    desc: '史料の少ない七番隊組長。だからこそ語りすぎない——沈黙のように軽く、冴えた淡麗タイプ。',
    img: '/img/makoto/label-09-tani-sil.webp',
  },
  {
    role: '八番隊',
    kana: 'へいすけ',
    name: '藤堂平助',
    color: '#7ca86b',
    copy: '一番若く、一番眩しく。',
    spec: 'フレッシュ・ヴァージンオーク / 45%(予定)',
    desc: '隊でもっとも若い級で組長を務め、鳥羽伏見の戦いで散った八番隊。新樽の若々しさをそのまま瓶に。',
    img: '/img/makoto/label-10-todo-sil.webp',
  },
  {
    role: '九番隊',
    kana: 'さぶろう',
    name: '三木三郎',
    color: '#5c6068',
    copy: '大振りに、飲み干す。',
    spec: 'バーボン樽(ヘヴィ系VAT) / 46%(予定)',
    desc: '同じく史料の少ない九番隊組長。飾りのない麦の重さで、コレクションの「飲み応え」を担う。',
    img: '/img/makoto/label-11-miki-sil.webp',
  },
  {
    role: '十番隊',
    kana: 'さんのすけ',
    name: '原田左之助',
    color: '#8c4a2a',
    copy: '腹を割って、飲む。',
    spec: '中庸ピート+バーボン樽 / 48%(予定)',
    desc: '槍の名手で、誠意を見せるため腹を切った逸話を持つ、隊一の愛されキャラ。切れ味の先にある温かい余韻が、彼そのもの。',
    img: '/img/makoto/label-12-harada-sil.webp',
  },
];

export default function Lineup() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 px-6 sm:grid-cols-2">
      {bottles.map((b) => (
        <BottleCard key={b.name} bottle={b} />
      ))}
    </div>
  );
}
