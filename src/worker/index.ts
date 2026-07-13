import { Hono } from "hono";

const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

app.post("/api/cv-submit", async (c) => {
  try {
    const body = await c.req.json();
    if (!body || !body.email) {
      return c.json({ success: false, message: "Email required" }, 400);
    }
    return c.json({ success: true, message: "Submitted successfully" });
  } catch {
    return c.json({ success: false, message: "Invalid request" }, 400);
  }
});

export default app;
