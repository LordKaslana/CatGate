import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// 👇 Specify the exact path to your config file
const withNextIntl = createNextIntlPlugin('./i18n.ts');

const nextConfig: NextConfig = {
  /* config options here */
};

export default withNextIntl(nextConfig);