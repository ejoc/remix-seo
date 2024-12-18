import { AppLoadContext } from "@remix-run/server-runtime";

export type SitemapEntry = {
  route: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0;
};

export type GenerateSitemapArgs = {
  request: Request;
  context: AppLoadContext;
};

export type SEOHandle = {
  getSitemapEntries?: (
    args: GenerateSitemapArgs
  ) =>
    | Promise<Array<SitemapEntry | null> | null>
    | Array<SitemapEntry | null>
    | null;
};

export type SEOOptions = {
  siteUrl: string;
  headers?: HeadersInit;
};

export type RobotsPolicy = {
  type: "allow" | "disallow" | "sitemap" | "crawlDelay" | "userAgent";
  value: string;
};

export type RobotsConfig = {
  appendOnDefaultPolicies?: boolean;
  headers?: HeadersInit;
};
