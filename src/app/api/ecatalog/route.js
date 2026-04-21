export async function POST(request) {
  try {
    const { data } = await request.json();

    if (!data) {
      return new Response(JSON.stringify({ error: "Missing data" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const name = String(data.name || "").trim();
    const phone = String(data.phone || "").trim();
    const occupation = String(data.occupation || "").trim();
    const needs = String(data.needs || "").trim();
    const catalogTitle = String(data.catalogTitle || "").trim();
    const domicileProvince = String(data.domicileProvince || "").trim();
    const domicileRegency = String(data.domicileRegency || "").trim();

    if (!name || !phone || !occupation || !needs) {
      return new Response(
        JSON.stringify({
          error: "name, phone, occupation, and needs are required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (!webhookUrl) {
      return new Response(
        JSON.stringify({
          error: "Missing GOOGLE_SHEETS_WEBHOOK_URL environment variable",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    const payload = {
      secret: process.env.GOOGLE_SHEETS_WEBHOOK_SECRET || undefined,
      type: "ecatalog",
      timestamp: new Date().toISOString(),
      name,
      phone,
      domicileProvince,
      domicileRegency,
      occupation,
      needs,
      catalogTitle,
      pageUrl: request.headers.get("referer") || "",
      userAgent: request.headers.get("user-agent") || "",
    };

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    // Google Apps Script bisa balas 200 atau 302 → dua-duanya sukses
    if (!res.ok && res.status !== 302) {
      const text = await res.text();
      return new Response(
        JSON.stringify({
          error: "Google Sheets webhook error",
          status: res.status,
          body: text,
        }),
        { status: 502, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Server Error: ${error?.message || error}` }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
