// Local preview of the static export; production hosts serve out/ directly.
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname, sep } from "node:path";

const root = resolve("out");
const port = Number(process.env.PORT || 3000);
const mime = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8", ".json": "application/json",
  ".txt": "text/plain; charset=utf-8", ".png": "image/png", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".webp": "image/webp",
  ".ico": "image/x-icon", ".woff2": "font/woff2", ".webmanifest": "application/manifest+json",
};
await stat(root).catch(() => { throw new Error("Build the site first: npm run build"); });

createServer(async (req, res) => {
  if (!["GET", "HEAD"].includes(req.method)) {
    res.writeHead(405, { Allow: "GET, HEAD" }).end();
    return;
  }
  try {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    let file = resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + sep)) {
      res.writeHead(403).end();
      return;
    }
    let info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith("/")) {
        res.writeHead(308, { Location: `${pathname}/${new URL(req.url, "http://localhost").search}` }).end();
        return;
      }
      file = resolve(file, "index.html");
      info = await stat(file);
    }
    const type = mime[extname(file)] || (pathname.endsWith("/icon") || pathname.endsWith("/opengraph-image") ? "image/png" : "application/octet-stream");
    res.writeHead(200, { "Content-Type": type, "Content-Length": info.size });
    res.end(req.method === "HEAD" ? undefined : await readFile(file));
  } catch {
    const page = await readFile(resolve(root, "404.html")).catch(() => "Not found");
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    res.end(req.method === "HEAD" ? undefined : page);
  }
}).listen(port, "127.0.0.1", () => console.log(`Static Rivixa preview: http://localhost:${port}`));
