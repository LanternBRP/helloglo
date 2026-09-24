import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { createServer as createViteServer } from "vite";

const projectRoot = process.cwd();
const clientRoot = path.join(projectRoot, "client");
const outputRoot = path.join(projectRoot, "dist", "public");
const indexPath = path.join(outputRoot, "index.html");
const sitemapPath = path.join(outputRoot, "sitemap.xml");
const canonicalOrigin = "https://helloglo.com";
const compatibilityRoutes = [
  "/integrations/",
  "/built-for/",
  "/built-for/healthcare-staffing/",
  "/recruiting-crm/",
];

function escapeAttribute(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function outputPathForRoute(route) {
  if (route === "/") return indexPath;
  return path.join(outputRoot, route.replace(/^\/+|\/+$/g, ""), "index.html");
}

function applyRouteContent(template, route, appHtml, metadata) {
  const canonicalUrl = new URL(metadata.path, canonicalOrigin).toString();
  let html = template;

  html = html.replace(
    /<div id="root"><\/div>/,
    () => `<div id="root" data-prerendered-route="${escapeAttribute(route)}">${appHtml}</div>`,
  );
  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    () => `<title>${escapeAttribute(metadata.title)}</title>`,
  );
  html = html.replace(
    /<meta\b(?=[^>]*\bname=["']description["'])[^>]*>/i,
    () => `<meta name="description" content="${escapeAttribute(metadata.description)}" />`,
  );
  html = html.replace(
    /<link\b(?=[^>]*\brel=["']canonical["'])[^>]*>/i,
    () => `<link rel="canonical" href="${escapeAttribute(canonicalUrl)}" />`,
  );

  if (!html.includes("data-prerendered-route=")) {
    throw new Error(`Could not inject prerendered markup for ${route}`);
  }

  return html;
}

const [template, sitemap] = await Promise.all([
  readFile(indexPath, "utf8"),
  readFile(sitemapPath, "utf8"),
]);

const sitemapRoutes = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => new URL(match[1]).pathname);
const routes = [...new Set([...sitemapRoutes, ...compatibilityRoutes])];

const vite = await createViteServer({
  configFile: path.join(projectRoot, "vite.config.ts"),
  root: clientRoot,
  appType: "custom",
  server: { middlewareMode: true },
});

try {
  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");

  for (const route of routes) {
    const { appHtml, metadata } = render(route);
    const routeOutputPath = outputPathForRoute(route);
    await mkdir(path.dirname(routeOutputPath), { recursive: true });
    await writeFile(routeOutputPath, applyRouteContent(template, route, appHtml, metadata), "utf8");
  }

  console.log(`Prerendered ${routes.length} routes with crawlable HTML.`);
} finally {
  await vite.close();
}
