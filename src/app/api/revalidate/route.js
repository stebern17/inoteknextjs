import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request) {
  try {
    const body = await request.json();
    const { secret, model, entry } = body; // payload Strapi biasanya ada model + entry

    // Validasi secret
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    // Tentukan halaman mana yang perlu diregenerate
    // Misal: selalu refresh home & listing news
    revalidatePath("/nichiha");
    revalidatePath("/product");

    // // Kalau model article & ada id → revalidate detail page
    // if (model === "article" && entry?.id) {
    //   revalidatePath(`/news/${entry.id}`);
    // }

    return NextResponse.json({ revalidated: true });
  } catch (err) {
    console.error("Revalidate error:", err);
    return NextResponse.json(
      { message: "Error revalidating", error: err.message },
      { status: 500 }
    );
  }
}
