export default function SeiMark({
  className = '',
  hanko = '日野・多摩平',
}: {
  className?: string;
  hanko?: string;
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-[1] font-extrabold leading-none">誠</span>
      <span className="vertical-rl absolute -bottom-2 -right-11 z-[2] rounded-sm bg-shu px-1 py-1 text-[13px] tracking-[0.25em] text-white">
        {hanko}
      </span>
    </span>
  );
}
