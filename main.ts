import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();

// Serve static files from the static directory
app.use("*", serveStatic({ root: "./static" }));

// Fallback to index.html for SPA routing
app.get("*", serveStatic({ path: "./static/index.html" }));

Deno.serve(app.fetch); 