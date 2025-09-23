import { NextResponse } from "next/server";

export async function POST(request) {
    try {
    const { secret, path } = await req.json();

    // Validasi secret
    if (secret !== process.env.REVALIDATE_SECRET) { 
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    if (!path) {
      return NextResponse.json({ message: "Path is required" }, { status: 400 });
    }

    // Revalidate halaman
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}${path}`);
    } catch (err) {
      console.log("Skip fetch to API", err);
    }

    // Trigger revalidate
    revalidatePath(path);

    return NextResponse.json({ revalidated: true, path });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
  }
}