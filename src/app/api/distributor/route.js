import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;
const STRAPI_TOKEN = process.env.NEXT_TOKEN_STRAPI;




export async function GET() {
  if (!STRAPI_URL) {
    return NextResponse.json(
      { error: "Strapi URL is not configured" },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(`${STRAPI_URL}/api/distributors?populate=*`, {
      headers: STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {},
      next: "force-cache", // cache optional
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch distributors: ${res.statusText}`);
    }

    const { data } = await res.json();

    const distributors = data.map((doc) => ({
      id: doc.id,
      name: doc.namadistributor,
      address: doc.alamat,
      phone: doc.phone,
      email: doc.email,
      website: doc.website,
      city: doc.city,
    }));

    return NextResponse.json({ data: distributors });
  } catch (err) {
    console.error("API Distributor Error:", err);
    return NextResponse.json(
      { error: "Gagal mengambil data distributor" },
      { status: 500 }
    );
  }
}
