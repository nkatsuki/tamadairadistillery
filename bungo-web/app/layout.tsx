import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '文豪シリーズ ── 多摩平文庫 ｜ 多摩平蒸留所',
  description:
    '多摩平蒸留所「文豪シリーズ ── 多摩平文庫」。七人の作家を、七つの樽に訳す。日野台地の水から始まる、七つの物語です。',
  keywords: [
    '多摩平蒸留所',
    '文豪シリーズ',
    '多摩平文庫',
    '日野台地',
    'クラフトウイスキー',
    'ジャパニーズウイスキー',
  ],
  openGraph: {
    title: '文豪シリーズ ── 多摩平文庫 ｜ 多摩平蒸留所',
    description: '七人の作家を、七つの樽に訳す。日野台地の水から始まる、七つの物語。',
    type: 'website',
    locale: 'ja_JP',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#14120F',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Old+Mincho:wght@400;600;700;900&family=Zen+Kaku+Gothic+New:wght@300;400;500;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
