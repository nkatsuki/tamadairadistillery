# 数(アリトモス) — 多摩平蒸留所 数学シリーズ サイト

Next.js(App Router)の静的エクスポート(`output: 'export'`)で、Azure Static Web Apps にそのままデプロイできる構成です。

## ローカル開発

```bash
npm install
npm run dev      # http://localhost:3000
```

## 静的ビルド

```bash
npm run build    # ./out に静的ファイル一式が出力される
```

## Azure Static Web Apps へのデプロイ

### 方法A: GitHub 経由(推奨)

1. このリポジトリを GitHub に push する(`.github/workflows/azure-static-web-apps.yml` 同梱済み)。
2. Azure Portal で「Static Web Apps」を作成 — ソースに GitHub、
   **App location = `/`、Output location = `out`、API location = 空** を指定。
   作成ウィザードが `AZURE_STATIC_WEB_APPS_API_TOKEN` シークレットを自動設定する。

### 方法B: SWA CLI で直接デプロイ

```bash
npm run build
npx @azure/static-web-apps-cli deploy ./out
```

(初回は `az staticwebapp` で作成したアプリのデプロイトークンで認証)

## 構成

- `app/` — ホーム / ラインナップ / アイテム / 蒸留所について(全ページ静的生成)
- `lib/data.js` — 7本のボトル・グッズのデータ(編集はここだけで反映される)
- `public/img/arithmos/` — ラベル・ボトル・グッズの生成画像
- `staticwebapp.config.json` — SWA 用のルーティング設定

理論名・商標・表示文言はドラフト(企画書 v2.0)であり、監修・調査を経て確定すること。
