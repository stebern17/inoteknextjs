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

    // Selalu revalidate halaman list/utama
    revalidatePath("/nichiha");
    revalidatePath("/product");
    revalidatePath("/news");

    // Revalidate halaman detail jika ada update pada model tertentu
    if (entry && entry.id) {
      // Untuk detail News (jika modelnya 'article')
      if (model === "article") {
        revalidatePath(`/news/${entry.id}`); // Asumsi URL detail news menggunakan id
      }

      // [TAMBAHAN] Untuk detail Product (jika modelnya 'type')
      // Gunakan field yang menjadi slug di URL, misalnya 'documentId' atau 'slug'
      if (model === "type" && entry.documentId) {
        revalidatePath(`/product/${entry.documentId}`);
        console.log(`Revalidated product: /product/${entry.documentId}`);
      }
    }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Revalidate error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}