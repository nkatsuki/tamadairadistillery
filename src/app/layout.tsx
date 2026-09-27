import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import ScrollRevealInit from '@/components/ScrollRevealInit'

export const metadata: Metadata = {
  title: '多摩平蒸留所 | Tamadaira Distillery — 緑と水が織りなす、多摩平の新しい一滴。',
  description:
    '東京都日野市多摩平に新設予定のクラフトウイスキー蒸留所「多摩平蒸留所」。黒川清流公園の水脈と多摩平テロワールから生まれる一滴を、試飲バーとともに。開所情報・クラウドファンディングのご案内。',
  keywords: ['多摩平蒸留所', 'クラフトウイスキー', '日野市', 'マイクロディスティラリー', 'ウイスキー', 'ジャパニーズウイスキー'],
  openGraph: {
    title: '多摩平蒸留所 | Tamadaira Distillery',
    description: '緑と水が織りなす、多摩平の新しい一滴。東京・日野市発のクラフトウイスキー蒸留所。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '多摩平蒸留所 | Tamadaira Distillery',
    description: '緑と水が織りなす、多摩平の新しい一滴。',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0E1013',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        {/* Preconnect for Google Fonts – loaded via globals.css @import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-ink text-offwhite font-gothic antialiased">
        <ScrollRevealInit />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
