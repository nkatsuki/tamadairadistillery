export default function FlavorMap() {
  const dots: {
    x: number;
    y: number;
    fill: string;
    label: string;
    name: string;
    text?: string;
  }[] = [
    { x: 700, y: 200, fill: '#a02c1f', label: '局', name: '近藤勇', text: '#fff' },
    { x: 480, y: 430, fill: '#1d2a4a', label: '副', name: '土方歳三', text: '#fff' },
    { x: 255, y: 145, fill: '#e8a7b5', label: '一', name: '沖田総司', text: '#5c3a42' },
    { x: 600, y: 180, fill: '#d4762c', label: '二', name: '永倉新八', text: '#fff' },
    { x: 380, y: 390, fill: '#2e5540', label: '三', name: '斎藤一', text: '#fff' },
    { x: 300, y: 210, fill: '#c8b183', label: '四', name: '松原忠司', text: '#5a523f' },
    { x: 430, y: 300, fill: '#d9a413', label: '五', name: '武田観柳斎', text: '#5a4a10' },
    { x: 140, y: 150, fill: '#efe6cf', label: '六', name: '井上源三郎', text: '#6b5f3f' },
    { x: 185, y: 275, fill: '#7db4c2', label: '七', name: '谷三十郎', text: '#22434d' },
    { x: 165, y: 185, fill: '#7ca86b', label: '八', name: '藤堂平助', text: '#28401f' },
    { x: 650, y: 275, fill: '#5c6068', label: '九', name: '三木三郎', text: '#fff' },
    { x: 560, y: 330, fill: '#8c4a2a', label: '十', name: '原田左之助', text: '#fff' },
  ];

  return (
    <figure className="mx-auto max-w-4xl border border-line bg-card p-4">
      <p className="mb-2 text-center font-gothic text-[11px] tracking-[0.15em] text-gold">
        ← 左右にスクロールできます →
      </p>
      <div className="overflow-x-auto">
        <div className="min-w-[560px]">
          <svg
            viewBox="0 0 820 540"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="12本の味わいマップ"
            className="h-auto w-full"
          >
            <rect x="0" y="0" width="820" height="540" fill="#f7f3ea" />
            <line x1="60" y1="490" x2="790" y2="490" stroke="#b7ad98" strokeWidth="1.5" />
            <line x1="60" y1="490" x2="60" y2="40" stroke="#b7ad98" strokeWidth="1.5" />
            <text x="66" y="518" fontSize="15" fill="#8a8274" fontFamily="serif">軽やか</text>
            <text x="720" y="518" fontSize="15" fill="#8a8274" fontFamily="serif">力強い</text>
            <text x="30" y="58" fontSize="15" fill="#8a8274" fontFamily="serif">甘美</text>
            <text x="30" y="480" fontSize="15" fill="#8a8274" fontFamily="serif">ドライ</text>
            {dots.map((d) => (
              <g key={d.name} fontFamily="serif" fontSize="14">
                <circle cx={d.x} cy={d.y} r="19" fill={d.fill} />
                <text x={d.x} y={d.y + 5} fontSize="14" fill={d.text} textAnchor="middle">
                  {d.label}
                </text>
                <text x={d.x} y={d.y + 33} fill="#211d19" textAnchor="middle">
                  {d.name}
                </text>
              </g>
            ))}
          </svg>
        </div>
      </div>
      <figcaption className="mt-2 text-center font-gothic text-xs text-ink2">
        味わいマップ(企画設計値)。六番隊・井上源三郎を入門編に、局長・近藤勇を頂点に置く。スマートフォンでは左右にスクロールできます。
      </figcaption>
    </figure>
  );
}
