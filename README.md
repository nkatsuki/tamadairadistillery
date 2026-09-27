# 多摩平蒸留所 — Tamadaira Distillery

> 緑と水が織りなす、多摩平の新しい一滴。

東京都日野市多摩平に新設予定のクラフトウイスキー蒸留所「多摩平蒸留所」の
**公式ティザーサイト（LP）**です。  
Next.js 14 App Router + TypeScript + Tailwind CSS で実装し、
Azure Static Web Apps へ静的エクスポートで配信します。

---

## 技術スタック

| 項目 | 内容 |
|---|---|
| フレームワーク | Next.js 14 (App Router) |
| 言語 | TypeScript |
| スタイリング | Tailwind CSS 3 |
| 出力モード | Static Export (`output: 'export'`) |
| デプロイ先 | Azure Static Web Apps |
| CI/CD | GitHub Actions |
| 外部フォント | Google Fonts (Shippori Mincho B1 / Cormorant Garamond / Zen Kaku Gothic New) |

---

## ディレクトリ構成

```
tamadaira-distillery/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml   # 自動デプロイワークフロー
├── public/
│   ├── tamadaira-img-hero.jpg          # ★ 要配置：ヒーロー（樽貯蔵庫）
│   ├── tamadaira-img-water.jpg         # ★ 要配置：コンセプト（清流）
│   ├── tamadaira-img-bar.jpg           # ★ 要配置：試飲バー
│   └── tamadaira-img-shop.jpg          # ★ 要配置：限定ショップ
├── src/
│   ├── app/
│   │   ├── globals.css                 # グローバルCSS・アニメーション
│   │   ├── layout.tsx                  # ルートレイアウト（Nav・Footer含む）
│   │   └── page.tsx                    # メインページ（全セクション統合）
│   ├── components/
│   │   ├── Nav.tsx                     # ナビゲーション（スクロール追従・ハンバーガー）
│   │   ├── Footer.tsx                  # フッター（年齢確認・SNS）
│   │   ├── HeroSection.tsx             # ヒーロー（縦書きコピー・水滴アニメ）
│   │   ├── ConceptSection.tsx          # コンセプト・三本柱（水/気候/街）
│   │   ├── DistillerySection.tsx       # 蒸留所・試飲バー・ショップ
│   │   ├── ProductsSection.tsx         # 商品プレビュー（Coming Soon）
│   │   ├── NewsSection.tsx             # お知らせ・メール事前登録フォーム
│   │   ├── AccessSection.tsx           # アクセス・路線図SVG
│   │   └── ScrollRevealInit.tsx        # スクロールリビール初期化
│   └── hooks/
│       └── useScrollReveal.ts          # IntersectionObserver フック
├── next.config.js                      # output: 'export', images.unoptimized: true
├── tailwind.config.ts                  # カラーパレット・アニメーション定義
├── tsconfig.json
├── postcss.config.js
├── staticwebapp.config.json            # Azure SWA ルーティング設定
└── package.json
```

---

## セットアップ

```bash
# 依存関係インストール
npm install

# 開発サーバー起動（http://localhost:3000）
npm run dev

# 本番ビルド（静的エクスポート → out/ ディレクトリ）
npm run build
```

---

## ★ 画像ファイルの配置（必須）

`public/` ディレクトリに以下4枚を配置してください（ファイル名は変更不可）:

| ファイル名 | 内容 | 推奨サイズ |
|---|---|---|
| `tamadaira-img-hero.jpg` | ヒーロービジュアル（樽貯蔵庫） | 1920×1280 |
| `tamadaira-img-water.jpg` | コンセプト（清流・水） | 1280×853 |
| `tamadaira-img-bar.jpg` | 試飲バー（装飾ボトル・バー棚） | 1280×717 |
| `tamadaira-img-shop.jpg` | 限定ショップ（キャンドル） | 1280×800 |

---

## Azure Static Web Apps デプロイ手順

1. Azure Portal で **Static Web App** リソースを作成
2. デプロイトークンをコピーして GitHub の **Settings > Secrets > Actions** に `AZURE_STATIC_WEB_APPS_API_TOKEN` として登録
3. `main` ブランチにプッシュすると GitHub Actions が自動で `npm run build` → `out/` を Azure に配信

### ワークフロー設定（`.github/workflows/azure-static-web-apps.yml`）

```yaml
app_location: '/'       # リポジトリルート
output_location: 'out'  # next build の出力先
skip_app_build: true    # Actions 内で npm run build を手動実行するため
```

---

## デザインシステム

### カラーパレット

| 変数 | 値 | 用途 |
|---|---|---|
| `--ink` | `#0E1013` | メイン背景 |
| `--char` | `#13161A` | セクション背景 |
| `--panel` | `#1A1E23` | カード背景 |
| `--gold` | `#D4AF37` | ブランドアクセント（琥珀色） |
| `--gold-deep` | `#C59B27` | ゴールド濃い目 |
| `--water` | `#8FBFB0` | 水・清流アクセント |
| `--text` | `#F8F9FA` | 本文 |
| `--muted` | `#A0AEC0` | サブテキスト |

### フォント

| 役割 | フォント |
|---|---|
| 和文見出し | Shippori Mincho B1 |
| 欧文見出し | Cormorant Garamond |
| 本文・UI | Zen Kaku Gothic New |

---

## ページ構成（全7セクション）

| # | セクション | コンポーネント |
|---|---|---|
| 1 | Hero | `HeroSection.tsx` — フルスクリーン画像・縦書きコピー・水滴アニメーション |
| 2 | Concept / Story | `ConceptSection.tsx` — 多摩平テロワール・三本柱（水/気候/街） |
| 3 | Distillery & Bar | `DistillerySection.tsx` — 試飲バー・限定ショップ・設備スペック |
| 4 | Product Preview | `ProductsSection.tsx` — ニューメイク・シングルモルト・クラフトジン（Coming Soon） |
| 5 | News / Pre-register | `NewsSection.tsx` — お知らせ・メール登録フォーム（デモ送信） |
| 6 | Access | `AccessSection.tsx` — 地図・路線図SVG・アクセス情報 |
| 7 | Footer | `Footer.tsx` — 年齢確認・SNS・プライバシーポリシー |

---

## 未実装・今後の対応事項

- [ ] **実際の住所・徒歩分数**の確定・差し替え（現在 `◯` で仮置き）
- [ ] **メール登録フォーム**のバックエンド連携（Mailchimp / SendGrid 等）
- [ ] **LINE公式アカウント** URL の設定
- [ ] **SNS URL**（Instagram / X）の設定
- [ ] **OGP画像**（`public/og-image.jpg`）の追加
- [ ] **favicon**（`public/favicon.ico`）の追加
- [ ] **Google Analytics** 等の計測タグ組み込み
- [ ] EC機能（Shopify 統合または自社 EC）
- [ ] 蒸留所ツアー予約フォーム
- [ ] 多言語対応（EN）

---

## 年齢確認について

フッターに「20歳未満の飲酒は法律で禁止されています」の注記を表示しています。  
より厳格な年齢確認が必要な場合は、ページ読み込み時にモーダルダイアログを表示する実装を追加してください。

---

*© 多摩平蒸留所 Tamadaira Distillery — All rights reserved.*
