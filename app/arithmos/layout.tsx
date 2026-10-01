import type { Metadata } from 'next';
import './arithmos.css';

export const metadata: Metadata = {
  title: '数学シリーズ「数(アリトモス)」 | 多摩平蒸留所',
  description:
    '味わいは、証明される。日野・多摩平のクラフトウイスキー蒸留所による数学シリーズ「数(ARITHMOS)」。',
};

export default function ArithmosLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="arithmos-page">
      <header className="nav">
        <a className="brand" href="/arithmos/">
          <span className="seal">数</span>
          <span className="lat">ARITHMOS</span>
        </a>
        <nav aria-label="数学シリーズ">
          <a href="/arithmos/">ホーム</a>
          <a href="/arithmos/lineup/">ラインナップ</a>
          <a href="/arithmos/items/">アイテム</a>
          <a href="/arithmos/distillery/">蒸留所について</a>
        </nav>
      </header>
      {children}
      <footer>
        <div>
          <div className="qedmark">∎</div>
          <div>多摩平蒸留所 数学シリーズ「数(アリトモス)」企画ドラフト</div>
        </div>
        <div className="arithmos-footer-note">
          <p>
            東京都日野市多摩平 — 黒川清流公園の水脈を仕込み水に、
            台地のまちから数学を瓶詰めにする。
            理論名・商標・表示は監修・調査を経て確定する(ドラフト v2.0)。
          </p>
        </div>
      </footer>
    </div>
  );
}