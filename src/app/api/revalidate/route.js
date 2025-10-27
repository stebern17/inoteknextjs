import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  try {
    const authHeader = request.headers.get("authorization");
    if (authHeader !== `Bearer ${process.env.REVALIDATE_SECRET}`) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const body = await request.json();
    const { model, entry } = body;

    if (model === "article") {
      // Revalidate daftar berita dan homepage
      revalidatePath("/news");
      revalidatePath("/nichiha");

      // Revalidate detail berita
      const docId = entry?.documentId || entry?.id || entry?._id;
      if (docId) {
        revalidatePath(`/news/${docId}`);
        console.log(`✅ Revalidated news detail: /news/${docId}`);
      } else {
        console.log("⚠️ No documentId found in webhook entry");
      }
    }

    return NextResponse.json({ revalidated: true, timestamp: Date.now() });
  } catch (err) {
    console.error("❌ Revalidate error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
