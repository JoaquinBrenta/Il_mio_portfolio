import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const nextConfig: NextConfig = {
  output: 'export',
  // Necessario per GitHub Pages Project Site: https://JoaquinBrenta.github.io/Il_mio_portfolio/
  // In dev resta '' per non rompere localhost:3000
  basePath: isProd ? '/Il_mio_portfolio' : '',
  // trailingSlash:true → /about.html diventa /about/index.html, necessario per GitHub Pages senza rewrite (vedi docs/static-exports.md:26)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
