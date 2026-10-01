import './globals.css';

export const metadata = {
  title: '多摩平蒸留所 数学シリーズ「数(アリトモス)」',
  description:
    '味わいは、証明される。——日野・多摩平のクラフトウイスキー蒸留所による数学シリーズ「数(ARITHMOS)」。ピタゴラス、リーマン予想、ガロア、フェルマー、四色定理、オイラーの公式、フィボナッチの7本。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho+B1:wght@500;600;700&family=Noto+Serif+JP:wght@400;500;600&family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&family=Cormorant+Garamond:ital,wght@1,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="nav">
          <a className="brand" href="/">
            <span className="seal">数</span>
            <span className="lat">ARITHMOS</span>
          </a>
          <nav>
            <a href="/">ホーム</a>
            <a href="/lineup/">ラインナップ</a>
            <a href="/items/">アイテム</a>
            <a href="/distillery/">蒸留所について</a>
          </nav>
        </header>
        {children}
        <footer>
          <div>
            <div className="qedmark">∎</div>
            <div>多摩平蒸留所 数学シリーズ「数(アリトモス)」企画ドラフト</div>
          </div>
          <div style={{ maxWidth: 380 }}>
            <p>
              東京都日野市多摩平 — 黒川清流公園の水脈を仕込み水に、
              台地のまちから数学を瓶詰めにする。
              理論名・商標・表示は監修・調査を経て確定する(ドラフト v2.0)。
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
