import './bungo.css';

export default function BungoLayout({ children }: { children: React.ReactNode }) {
  return <div className="bungo-page">{children}</div>;
}