import type { ServerBuild } from "@remix-run/server-runtime";
import { GenerateSitemapArgs, SEOOptions } from "../types";
import { getSitemapXml } from "./utils";

export async function generateSitemap(
  args: GenerateSitemapArgs,
  routes: ServerBuild["routes"],
  options: SEOOptions
) {
  const { siteUrl, headers } = options;
  const sitemap = await getSitemapXml(args, routes, { siteUrl });
  const bytes = new TextEncoder().encode(sitemap).byteLength;

  return new Response(sitemap, {
    headers: {
      ...headers,
      "Content-Type": "application/xml",
      "Content-Length": String(bytes),
    },
  });
}
