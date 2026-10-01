import Image from 'next/image';
import { volumes } from '@/data/volumes';

/** 多摩平文庫 全七冊。棚に並べると背表紙で全集になる。 */
export default function BunkoShelf() {
  return (
    <div className="shelf">
      {volumes.map((v) => (
        <figure key={v.code}>
          <Image
            src={v.bunko}
            alt={`多摩平文庫 ${v.series} ${v.no} ${v.author}『${v.title}』`}
            width={960}
            height={1280}
            sizes="(max-width: 520px) 45vw, (max-width: 1024px) 22vw, 12vw"
          />
          <figcaption>
            <b>
              {v.series.replace('「', '「').split('「')[0]}
              {v.no}
            </b>
            {v.author}
            <br />『{v.title}』
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
