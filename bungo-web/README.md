# 多摩平蒸留所 文豪シリーズ ── 多摩平文庫

製品紹介サイト（Next.js / 静的書き出し / Azure Static Web Apps 想定）

## 構成

```
app/
  layout.tsx        メタデータ・フォント読み込み
  page.tsx          ページ本体
  globals.css       全スタイル
components/
  AgeGate.tsx       二十歳確認（チェックボックス + CSS で開閉。JS不要で動作）
  AgeGatePersist.tsx  確認済みの記憶のみを担当（sessionStorage）
  Rail.tsx          背表紙の帯をナビゲーションに昇格させたもの（スクロール連動）
  VolumeSection.tsx 一巻ぶんの製品紹介
  BunkoShelf.tsx    多摩平文庫 全七冊
data/
  volumes.ts        全七編のデータ（本文・仕様・画像パス）
public/img/bungo/   ラベル7・ボトル7・文庫7・棚1（計22点）
```

## 開発

```bash
npm install
npm run dev        # http://localhost:3000
```

## ビルド（静的書き出し）

```bash
npm run build      # out/ に静的ファイル一式が生成される
npm run preview    # ローカルで out/ を確認
```

`next.config.mjs` で `output: 'export'` を指定しているため、`out/` がそのまま
静的ホスティングの成果物になります。

## Azure Static Web Apps へのデプロイ

1. リポジトリを GitHub に push
2. Azure Portal → Static Web App を作成
3. ビルドの詳細で以下を指定
   - App location: `/`
   - Api location: （空欄）
   - Output location: `out`
4. `staticwebapp.config.json` が自動的に適用される
   - 404 は `404.html` へ
  - `/img/*` と `/_next/static/*` は長期キャッシュ（immutable）
   - 末尾スラッシュを常に付与

CLI を使う場合:

```bash
npx @azure/static-web-apps-cli deploy ./out --env production
```

## 年齢確認について

二十歳確認は **チェックボックス + CSS（`:checked`）** で開閉します。
JavaScript が無効な環境でも「はい／いいえ」が機能します。
`AgeGatePersist.tsx` は、同じタブでの再表示を省くためだけに sessionStorage を使います。

## 画像について

`public/img/bungo/` の図版はすべてデザイン検討用のラフです。
日本語の文字は印刷品質を保証しないため、入稿時は版下で組み直してください。
（詳細はデザイン企画書 第六章「制作仕様」を参照）
