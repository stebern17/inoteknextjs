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

    // Revalidate paths
    revalidatePath("/nichiha");
    revalidatePath("/product");
    revalidatePath("/news");

    // Revalidate detail jika perlu
    if (model === "article" && entry?.id) {
      revalidatePath(`/news/${entry.id}`);
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
