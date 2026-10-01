import Image from 'next/image';
import type { Volume } from '@/data/volumes';

/** 一巻ぶんの製品紹介。ボトル写真・キャッチ・紹介文・仕様を並べる。 */
export default function VolumeSection({ volume }: { volume: Volume }) {
  const v = volume;
  // 「作家名『作品名』」の文字数で題の文字サイズを決める（長い題が折り返さないように）
  const titleLen = `${v.author}『${v.title}』`.length;
  const titleClass = titleLen >= 12 ? 't-xlong' : titleLen >= 9 ? 't-long' : undefined;
  return (
    <section className="vol" id={`v${Number(v.code)}`}>
      <div className="vol-inner">
        <div className="vol-media">
          <div className="vol-no">{v.no}</div>
          <Image
            src={v.bottle}
            alt={`${v.no} ${v.author}『${v.title}』のボトル`}
            width={960}
            height={1280}
            sizes="(max-width: 860px) 340px, 340px"
            priority={v.code === '01'}
          />
        </div>

        <div className="vol-body">
          <p className="kind">
            {v.series}／ シングルモルト
          </p>
          <h3 className={titleClass}>
            {v.author}『{v.title}』
            <small>
              {v.authorEn} ／ {v.years}
            </small>
          </h3>
          <p className="vol-catch">{v.catch}</p>
          <p className="desc">{v.desc}</p>

          <div className="spec">
            <dl>
              <dt>CASK</dt>
              <dd>
                <b>{v.cask}</b>
              </dd>
              <dt>MATURATION</dt>
              <dd>{v.maturation}</dd>
              <dt>ABV</dt>
              <dd>
                <b>{v.abv}</b>　ノンチルフィルター・無着色
              </dd>
              <dt>{v.noteLabel}</dt>
              <dd>{v.note}</dd>
            </dl>
          </div>

          <div className="tags">
            {v.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
