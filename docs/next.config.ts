import { createMDX } from 'fumadocs-mdx/next';
import { resolve } from 'path';
import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';

initOpenNextCloudflareForDev();

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
    root: resolve(import.meta.dirname, '.'),
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
