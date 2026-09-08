import { createMDX } from 'fumadocs-mdx/next';
import { resolve } from 'path';

const withMDX = createMDX({
  // mdxOptions: {
  //   remarkImageOptions: {
  //     onError: "ignore", // or "hide"
  //   },
  // },
});

type MDXNextConfig = NonNullable<Parameters<typeof withMDX>[0]>;

export const config = {
  serverExternalPackages: ['typescript', 'fumadocs-typescript'],
  // `loading-animations/svg/src` resolves to TypeScript source in the workspace,
  // so Next has to compile it rather than treat it as a prebuilt dependency.
  transpilePackages: ['loading-animations'],
  // output: 'export',
  // distDir: './dist',
  outputFileTracingRoot: resolve(import.meta.dirname, '..'),
  turbopack: {
    // Must match outputFileTracingRoot: both point at the monorepo root so
    // workspace packages are traced into the Vercel output bundle.
    root: resolve(import.meta.dirname, '..'),
  },
  async rewrites() {
    return [
      {
        source: '/docs/:path*.mdx',
        destination: '/docs/llms.mdx/docs/:path*',
      },
    ];
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
      },
    ],
    unoptimized: true,
  },
} satisfies MDXNextConfig;
export default withMDX(config);
