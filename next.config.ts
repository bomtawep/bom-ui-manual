import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Demo sources are read from disk at build time to show their code next to the live preview.
  outputFileTracingIncludes: { '/components/[slug]': ['./src/demos/**/*'] },
  // Tailwind v4 via its native Turbopack loader (the PostCSS plugin fails under Turbopack: it require()s ESM-only magic-string).
  turbopack: {
    rules: {
      '*.css': { loaders: ['@tailwindcss/turbopack'], as: '*.css' },
    },
  },
}

export default nextConfig
