# 多摩平蒸留所 / Tamadaira Distillery

日野市多摩平のクラフトウイスキー蒸留所「多摩平蒸留所」のサイトです。Next.js App Router + TypeScript + Tailwind CSSで構成し、Azure Static Web Apps向けに静的エクスポートします。

## ローカル開発・ビルド

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build    # 静的サイトを out/ に出力
```

トップページは `/`、シリーズ紹介は「誠コレクション」`/makoto/`、「多摩平文庫」`/bungo/`、「数(アリトモス)」`/arithmos/` です。アリトモスにはラインナップ・アイテム・蒸留所紹介の各ページがあります。

## Azure Static Web Apps

GitHub連携でStatic Web Appを作成し、発行されたデプロイトークンをリポジトリシークレット `AZURE_STATIC_WEB_APPS_API_TOKEN_WONDERFUL_CLIFF_0AC76A400` に登録してください。`main` へのpushで `.github/workflows/azure-static-web-apps-wonderful-cliff-0ac76a400.yml` がNode.js 20で `npm ci` と `npm run build` を実行し、`out/` をデプロイします。

## ソース構成

- `app/` — トップページと各シリーズのルート・メタデータ
- `components/` — 蒸留所サイトの各セクションと `components/makoto/` の製品コンポーネント
- `public/img/` — 蒸留所の共通画像と、シリーズ別の `makoto/`・`bungo/`・`arithmos/` 画像
- `public/img/distillery-mark.svg` / `distillery-mark.png` — 共通ロゴ。PNGは透過1024pxで、SNS・LINE公式などのアイコンにも利用できます
- `next.config.js` — 静的エクスポートと末尾スラッシュ付きURLを設定

住所・徒歩分数・ニュース日付は開所時に確定する仮表記です。誠コレクションの画像は開発中のイメージで、度数・樽設計・価格・発売時期も予定です。
