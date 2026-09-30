type DistilleryMarkProps = {
  className?: string;
  title?: string;
};

export default function DistilleryMark({
  className = '',
  title,
}: DistilleryMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 44 44"
      fill="none"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title && <title>{title}</title>}
      <circle cx="22" cy="22" r="20" fill="rgba(212,175,55,.1)" stroke="#D4AF37" strokeWidth="2" />
      <circle cx="22" cy="22" r="16.5" stroke="rgba(233,206,122,.55)" strokeWidth=".9" />
      <path d="M22 3v3M22 38v3M3 22h3M38 22h3" stroke="#D4AF37" strokeWidth="1.1" />
      <text
        x="22"
        y="30"
        textAnchor="middle"
        fontFamily="var(--font-zenkaku), 'Hiragino Maru Gothic ProN', 'Yu Gothic UI', sans-serif"
        fontSize="22"
        fontWeight="700"
        fill="#E9CE7A"
      >
        多
      </text>
    </svg>
  );
}