# 多摩平蒸留所 / Tamadaira Distillery — Teaser Site (Next.js)

日野市多摩平のクラフトウイスキー蒸留所「多摩平蒸留所」ティザーサイト。
Next.js (App Router) + TypeScript + Tailwind CSS、静的エクスポート (`output: 'export'`)。

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:3000
```

## ビルド(静的エクスポート)

```bash
npm run build    # → out/ に出力
```

`next.config.js` で `output: 'export'` と `images: { unoptimized: true }` を設定済み。

## Azure Static Web Apps へのデプロイ

1. Azure Portal で Static Web App を作成(デプロイ元: GitHub、ビルドプリセット: Custom)
2. 発行されたデプロイトークンを、GitHub リポジトリの Secrets に `AZURE_STATIC_WEB_APPS_API_TOKEN` として登録
3. `main` ブランチへ push → `.github/workflows/azure-static-web-apps.yml` がビルド & デプロイ

構成: `app_location: /`、`output_location: out`(GitHub Actions 内で `npm ci && npm run build` を実行後、`out/` をデプロイ)

## 構成

- `app/layout.tsx` — フォント(next/font/google: Shippori Mincho B1 / Cormorant Garamond / Zen Kaku Gothic New)、メタデータ
- `app/page.tsx` — セクション構成(Hero → Concept → Distillery&Bar/Shop → Product → News → Register → Access)
- `components/` — セクション別コンポーネント(Reveal: スクロール連動表示、Nav: 追従ナビ、RegisterForm: デモ送信)
- `public/img/` — 画像(ヒーロー/清流/バー/ショップ)
- 仮表記: 住所・徒歩分数・ニュース日付は開所時に確定する情報のためダミー(参照実装のまま)
