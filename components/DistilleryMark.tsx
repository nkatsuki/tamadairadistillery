type DistilleryMarkProps = {
  className?: string;
  title?: string;
};

export default function DistilleryMark({
  className = '',
  title,
}: DistilleryMarkProps) {
  return (
    <img
      className={className}
      src="/img/distillery-mark.svg"
      width="44"
      height="44"
      alt={title ?? ''}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    />
  );
}