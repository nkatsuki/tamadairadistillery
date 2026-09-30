import { bottles } from './Lineup';

type Bottle = {
  role: string;
  kana: string;
  name: string;
  color: string;
  copy: string;
  spec: string;
  desc: string;
  img: string;
};

export default function BottleCard({ bottle: b }: { bottle: Bottle }) {
  return (
    <article className="flex flex-col overflow-hidden border border-line bg-card sm:flex-row">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={b.img}
        alt={`${b.role} ${b.name} ラベル(シルエット)`}
        loading="lazy"
        className="w-full flex-none object-cover sm:w-2/5"
      />
      <div className="min-w-0 p-4">
        <p className="flex items-center gap-2 font-gothic text-[11px] tracking-[0.15em] text-gold">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full border border-black/15"
            style={{ backgroundColor: b.color }}
          />
          <span className="rounded-sm bg-deep px-2 py-0.5 text-[10px] text-[#f2ecdd]">
            {b.role}
          </span>
        </p>
        <h3 className="mt-2 text-xl font-semibold">
          {b.name}
          <span className="ml-2 text-xs font-normal text-ink2">{b.kana}</span>
        </h3>
        <p className="mt-1 text-[15px] font-medium tracking-wide text-shu">
          {b.copy}
        </p>
        <p className="mt-2 text-xs leading-6 text-ink2">{b.spec}</p>
        <p className="mt-2 text-xs leading-6 text-ink2">{b.desc}</p>
      </div>
    </article>
  );
}
