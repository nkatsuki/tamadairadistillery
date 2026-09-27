import type { Metadata } from 'next';
import { Shippori_Mincho_B1, Cormorant_Garamond, Zen_Kaku_Gothic_New } from 'next/font/google';
import './globals.css';

const shippori = Shippori_Mincho_B1({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-shippori',
  display: 'swap',
});
const cormorant = Cormorant_Garamond({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
});
const zenkaku = Zen_Kaku_Gothic_New({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-zenkaku',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '多摩平蒸留所 | Tamadaira Distillery — 緑と水が織りなす、多摩平の新しい一滴。',
  description:
    '東京都日野市多摩平に新設予定のクラフトウイスキー蒸留所「多摩平蒸留所」。黒川清流公園の水脈と多摩平テロワールから生まれる一滴を、試飲バーとともに。開所情報・クラウドファンディングのご案内。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${shippori.variable} ${cormorant.variable} ${zenkaku.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
