import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  try {
    // ====== TOKEN VERIFICATION ======
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.REVALIDATE_SECRET}`) {
      console.log("❌ Invalid token:", authHeader);
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // ====== SAFE BODY PARSER ======
    let body = {};
    try {
      const text = await request.text();
      body = text ? JSON.parse(text) : {};
    } catch (err) {
      console.log("⚠️ JSON parse failed:", err);
      body = {};
    }

    console.log("📦 Incoming webhook body:", body);

    const { entry } = body;

    // MODEL bisa berasal dari body OR dari header "path"
    const model =
      body?.model ||
      request.headers.get("path")?.replace("/", "") || // contoh: "/product" → "product"
      null;

    console.log("🧩 Model detected:", model);

    if (!model) {
      console.log("⚠️ No model received.");
      return NextResponse.json({ ok: true, info: "No model" });
    }

    // ====== NEWS / ARTICLE ======
    if (model === "article" || model === "news") {
      revalidatePath("/news");
      revalidatePath("/nichiha");
      revalidatePath("/");
      const docId = entry?.documentId || entry?.id;
      if (docId) revalidatePath(`/news/${docId}`);
    }

    // ====== PRODUCT ======
    if (model.includes("product") || model.includes("type")) {
      revalidatePath("/product");
      const docId = entry?.documentId || entry?.id;
      if (docId) revalidatePath(`/product/productdetail/${docId}`);
    }

    // ====== DISTRIBUTOR ======
    if (model.includes("distributor")) {
      revalidatePath("/distributor");
    }

    // ====== DOWNLOAD ======
    if (model.includes("download")) {
      revalidatePath("/download");
    }

    return NextResponse.json({ revalidated: true });

  } catch (err) {
    console.error("🔥 WEBHOOK CRASH:", err);
    return NextResponse.json(
      { message: "Internal webhook error", error: err.message },
      { status: 500 }
    );
  }
}
