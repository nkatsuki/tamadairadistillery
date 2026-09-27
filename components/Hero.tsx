export default function Hero() {
  return (
    <header id="hero">
      <div className="hero-bg" aria-hidden="true"><img src="/img/hero.jpg" alt="" /></div>
      <p className="hero-vertical">緑と水が織りなす、多摩平の新しい一滴。</p>
      <div className="hero-inner">
        <p className="hero-eyebrow">Craft Whisky Distillery — Hino, Tokyo</p>
        <h1 className="hero-title">多摩平蒸留所</h1>
        <p className="hero-title-sub gold-grad">Tamadaira Distillery</p>
        <div className="hero-rule" aria-hidden="true"></div>
        <p className="hero-sub">
          新宿から30分、武蔵野台地の緑に抱かれた日野市多摩平へ。<br />
          黒川清流公園の水脈を仕込み水に、街とつながるクラフトウイスキーの蒸留所が生まれます。
        </p>
        <a className="btn" href="#register">最新情報を受け取る<span aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
        <div className="drop-wrap" aria-hidden="true">
          <svg width="60" height="86" viewBox="0 0 60 86" fill="none" style={{ overflow: 'visible' }}>
            <path className="drop-anim" d="M30 8c0 0-9 12-9 19a9 9 0 0 0 18 0c0-7-9-19-9-19Z" fill="#D4AF37"/>
            <ellipse className="ripple" cx="30" cy="66" rx="14" ry="4.5" stroke="#6FA8B0" strokeWidth="1" fill="none"/>
            <ellipse cx="30" cy="66" rx="14" ry="4.5" stroke="rgba(111,168,176,.35)" strokeWidth="1" fill="none"/>
          </svg>
        </div>
      </div>
      <div className="scroll-hint" aria-hidden="true">SCROLL<span className="scroll-line"></span></div>
    </header>
  );
}
