/** @type {import('next').NextConfig} */
const nextConfig = {
  // Azure Static Web Apps は静的ホスティングのため、完全な静的書き出しを行う。
  output: 'export',
  // 画像最適化サーバーを持たないため無効化（public/ の画像をそのまま配信）。
  images: { unoptimized: true },
  // Azure SWA のルーティングに合わせて末尾スラッシュを付与。
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
