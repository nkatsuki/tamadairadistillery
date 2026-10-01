export type Volume = {
  /** 巻番号（漢数字） */
  no: string;
  /** ローマ字の通し番号 */
  code: string;
  /** 所属する集 */
  series: string;
  /** 集の英字表記 */
  seriesEn: string;
  /** 作品名 */
  title: string;
  /** 作家名 */
  author: string;
  /** 作家名（欧文） */
  authorEn: string;
  /** 生没年 */
  years: string;
  /** 一行のキャッチ */
  catch: string;
  /** 紹介文 */
  desc: string;
  /** 樽 */
  cask: string;
  /** 熟成 */
  maturation: string;
  /** 度数 */
  abv: string;
  /** 補足項目の見出し */
  noteLabel: string;
  /** 補足項目の本文 */
  note: string;
  /** タグ */
  tags: string[];
  /** 横長ラベル画像 */
  label: string;
  /** ボトル画像 */
  bottle: string;
  /** 文庫本画像 */
  bunko: string;
};

export const volumes: Volume[] = [
  {
    no: '壱',
    code: '01',
    series: '第一集「日野台地の余白」',
    seriesEn: 'PART I',
    title: '武蔵野',
    author: '国木田独歩',
    authorEn: 'KUNIKIDA DOPPO',
    years: '1871–1908',
    catch: '武蔵野の雑木林を、そのまま樽に組む。',
    desc: 'クヌギとコナラ。江戸の燃料を支えた薪炭林の木で樽を組み、六か月だけ重ねました。落ち葉、樹皮、青栗。林を抜けたあとの空気のような余韻です。',
    cask: '日野台地のクヌギ・コナラ混合樽（約100L）',
    maturation: 'バーボンバレル 3年以上 → フィニッシュ 6〜8か月',
    abv: '48%',
    noteLabel: 'WATER',
    note: '日野台地の仕込み水（黒川清流公園へつながる水脈の軟水）',
    tags: ['地元の樹', 'クヌギ・コナラ', 'ノンチル'],
    label: '/img/bungo/label-01.png',
    bottle: '/img/bungo/bottle-01.png',
    bunko: '/img/bungo/bunko-01.png',
  },
  {
    no: '弐',
    code: '02',
    series: '第一集「日野台地の余白」',
    seriesEn: 'PART I',
    title: '銀河鉄道の夜',
    author: '宮沢賢治',
    authorEn: 'MIYAZAWA KENJI',
    years: '1897–1933',
    catch: '土を学んだ人が、星を書いた。',
    desc: '花巻の葡萄から生まれた赤ワイン樽で、果実の層を重ねました。すみれ、砕いた石、冷たい空気。星の見える夜にだけ瓶詰めし、その夜の月齢と星座をラベルに印字します。同じ味は、二度とできません。',
    cask: '岩手・花巻の赤ワイン樽（岩手県産葡萄100%のワイナリーより）',
    maturation: 'バーボンバレル 3年以上 → フィニッシュ 8か月',
    abv: '46%',
    noteLabel: 'SPECIAL',
    note: '星の見える夜に瓶詰め。月齢と星座をラベルに印字',
    tags: ['岩手ワイン樽', '夜間瓶詰め', '贈答向き'],
    label: '/img/bungo/label-02.png',
    bottle: '/img/bungo/bottle-02.png',
    bunko: '/img/bungo/bunko-02.png',
  },
  {
    no: '参',
    code: '03',
    series: '第一集「日野台地の余白」',
    seriesEn: 'PART I',
    title: '蜘蛛の糸',
    author: '芥川龍之介',
    authorEn: 'AKUTAGAWA RYUNOSUKE',
    years: '1892–1927',
    catch: '余分な一文字も、許さない。',
    desc: '加水で丸めず、57%のカスクストレングスで輪郭を立てました。中国を旅した人に、紹興酒の樽を。干しぶどう、漢方、墨。長く苦い余韻は、読み終えたあとの感じに似ています。',
    cask: '紹興酒（黄酒）樽フィニッシュ',
    maturation: 'シェリー樽 3年以上 → フィニッシュ 4〜6か月',
    abv: '57%',
    noteLabel: 'NOTE',
    note: '加水せずに、そのままの度数でお楽しみください',
    tags: ['黄酒樽', 'カスクストレングス57', '加水なし'],
    label: '/img/bungo/label-03.png',
    bottle: '/img/bungo/bottle-03.png',
    bunko: '/img/bungo/bunko-03.png',
  },
  {
    no: '四',
    code: '04',
    series: '第二集「酒と、旅のあいだ」',
    seriesEn: 'PART II',
    title: '津軽',
    author: '太宰治',
    authorEn: 'DAZAI OSAMU',
    years: '1909–1948',
    catch: '生まれは津軽、最後の九年は多摩。',
    desc: '津軽はりんごの国。そして太宰は、人生の最後の九年を多摩の地で過ごしました。りんごのシードル樽で、明るさと翳りを。甘酸っぱさのあとに、りんごの皮のほろ苦さが残ります。',
    cask: '青森りんご（シードル）樽',
    maturation: 'バーボンバレル 3年以上 → フィニッシュ 6か月',
    abv: '47%',
    noteLabel: 'TAMA',
    note: '多摩 ── 人生の最後の九年を過ごした土地',
    tags: ['シードル樽', '47度', '入門編'],
    label: '/img/bungo/label-04.png',
    bottle: '/img/bungo/bottle-04.png',
    bunko: '/img/bungo/bunko-04.png',
  },
  {
    no: '五',
    code: '05',
    series: '第二集「酒と、旅のあいだ」',
    seriesEn: 'PART II',
    title: '放浪記',
    author: '林芙美子',
    authorEn: 'HAYASHI FUMIKO',
    years: '1903–1951',
    catch: '移動の文学を、樽の移動で。',
    desc: '同じ原酒を、三つの樽に順番に移しました。バーボンで三年、ワイン樽に四か月、最後にミズナラに三か月。赤い花、プラム、お香。三つの記憶が、飲む順番に顔を出します。',
    cask: 'カスク・トラベル（三樽の乗り継ぎ）',
    maturation: 'バーボン 3年 → ワイン樽 4か月 → ミズナラ樽 3か月',
    abv: '48%',
    noteLabel: 'NOTE',
    note: '三つの樽の系譜を、ラベルに図で示しています',
    tags: ['カスク・トラベル', '三樽', '技術の見せ場'],
    label: '/img/bungo/label-05.png',
    bottle: '/img/bungo/bottle-05.png',
    bunko: '/img/bungo/bunko-05.png',
  },
  {
    no: '六',
    code: '06',
    series: '第三集「海を渡った人たち」',
    seriesEn: 'PART III',
    title: '三四郎',
    author: '夏目漱石',
    authorEn: 'NATSUME SOSEKI',
    years: '1867–1916',
    catch: '見知らぬ世界へ、出ていく人。',
    desc: '近代日本の文学は、この人から始まりました。そしてこの人自身が、1900年にロンドンへ渡っています。『三四郎』は、田舎から出てきた青年が、まだ見ぬ世界に戸惑いながら育っていく物語。英国で愛されたポートワインの樽に、八か月だけ通しました。干しぶどう、くるみ、黒糖。',
    cask: 'ポートワイン樽フィニッシュ（英国で愛された酒の樽）',
    maturation: 'バーボンバレル 3年以上 → フィニッシュ 8か月',
    abv: '48%',
    noteLabel: 'NOTE',
    note: '英国留学の記憶を、樽に重ねて',
    tags: ['ポート樽', '48度', '第三集'],
    label: '/img/bungo/label-06.png',
    bottle: '/img/bungo/bottle-06.png',
    bunko: '/img/bungo/bunko-06.png',
  },
  {
    no: '七',
    code: '07',
    series: '第三集「海を渡った人たち」',
    seriesEn: 'PART III',
    title: '舞姫',
    author: '森鴎外',
    authorEn: 'MORI OGAI',
    years: '1862–1922',
    catch: '異国の街で、揺れた人。',
    desc: '軍医として、1884年からドイツに学びました。文学と医学、西洋と東洋 ── 二つの世界を生きた人です。留学先のドイツで愛されたリースリングの樽に、五か月だけ通します。青いりんご、白い花、鉱物のような酸。石畳の夕暮れを思わせる、涼しい余韻です。',
    cask: 'ドイツ・リースリング樽フィニッシュ',
    maturation: 'バーボンバレル 3年以上 → フィニッシュ 5か月',
    abv: '46%',
    noteLabel: 'TAMA',
    note: '多摩の地に眠る ── 四の太宰治と同じ土地',
    tags: ['リースリング樽', '46度', '第三集'],
    label: '/img/bungo/label-07.png',
    bottle: '/img/bungo/bottle-07.png',
    bunko: '/img/bungo/bunko-07.png',
  },
];

/** 集の一覧（シリーズ構成セクションで使用） */
export const parts = [
  {
    key: 'PART I',
    name: '日野台地の余白',
    summary: '壱・弐・参。土地と、土壌と、書物。静かな三本で、シリーズの起点をつくります。',
    titles: ['国木田独歩『武蔵野』', '宮沢賢治『銀河鉄道の夜』', '芥川龍之介『蜘蛛の糸』'],
  },
  {
    key: 'PART II',
    name: '酒と、旅のあいだ',
    summary: '四・五。土地を移り、樽を移り、酒そのものを主題にした二本です。',
    titles: ['太宰治『津軽』', '林芙美子『放浪記』'],
  },
  {
    key: 'PART III',
    name: '海を渡った人たち',
    summary: '六・七。海を渡り、西洋と向き合った、近代文学の祖。留学先の酒の樽で仕上げる二本です。',
    titles: ['夏目漱石『三四郎』', '森鴎外『舞姫』'],
  },
];
