import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Prefer each route's prerendered HTML so non-JavaScript crawlers receive
  // page copy, headings, internal links, and route-specific metadata.
  app.get("*", (req, res) => {
    const requestPath = decodeURIComponent(req.path);
    const routePath = requestPath.endsWith("/") ? requestPath : `${requestPath}/`;
    const routeIndex = path.join(staticPath, routePath.replace(/^\/+/, ""), "index.html");

    if (fs.existsSync(routeIndex)) {
      res.sendFile(routeIndex);
      return;
    }

    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
