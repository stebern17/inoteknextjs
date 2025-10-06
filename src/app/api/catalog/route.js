// src/app/api/catalog/route.js
import { NextResponse } from "next/server";

const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;
const STRAPI_TOKEN = process.env.NEXT_TOKEN_STRAPI;

export async function GET() {
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/types?populate=*&pagination[pageSize]=1000`,
      {
        headers: STRAPI_TOKEN
          ? { Authorization: `Bearer ${STRAPI_TOKEN}` }
          : {},
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Gagal fetch catalog data");
    }

    const { data } = await res.json();

    const types = data.map((t) => {
      const colours =
        t.Colour?.map((col) => ({
          id: col.id,
          caption: col.caption || "",
          url:
            col.formats?.small?.url ||
            col.formats?.thumbnail?.url ||
            col.url ||
            null,
        })) ?? [];

      const specifications =
        t.Specifiation?.map((spec) => ({
          id: spec.id,
          caption: spec.caption || "",
          url: spec.formats?.thumbnail?.url || spec.url || null,
        })) ?? [];

      return {
        id: t.id,
        documentId: t.documentId,
        product: t.product?.Name || "",
        size: t.Size || "N/A",
        weight: t.Weight || "N/A",
        packaging: t.Packaging || "N/A",
        category: t.Kind || "Uncategorized",
        coverImage: t.CoverImage?.url || null,
        headerImage: t.HeaderImage?.url || null,
        colours,
        specifications,
      };
    });

    return NextResponse.json({ data: types });
  } catch (err) {
    console.error("API Catalog Error:", err);
    return NextResponse.json(
      { error: "Gagal mengambil data catalog" },
      { status: 500 }
    );
  }
}
