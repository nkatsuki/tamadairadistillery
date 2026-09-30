import type { Metadata } from 'next';
import './makoto.css';

export const metadata: Metadata = {
  title: '誠コレクション | 多摩平蒸留所',
  description:
    '多摩平蒸留所の旗艦クラフトウイスキー「誠」コレクション。新選組のふるさと・日野から、全12瓶の味わいをお届けします。',
};

export default function MakotoLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="makoto-page min-h-screen bg-paper font-mincho text-ink antialiased">
      {children}
    </div>
  );
}