"use client";
export async function getCatalogData() {
  const StrapiURL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${StrapiURL}/api/download-catalogs?populate=*`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch catalog data: ${res.status}`);
    }

    const json = await res.json();

    return json.data.map((item) => ({
      id: item.id,
      documentId: item.documentId,
      title: item.Title || "Untitled Catalog",
      slug: item.Slug,
      coverImage:
        item.CoverImage?.formats?.medium?.url ||
        item.CoverImage?.url ||
        null,
      catalogFile: item.CatalogFile?.url || null,
      createdAt: item.createdAt,
    }));
  } catch (error) {
    console.error("❌ Error fetching catalog data:", error);
    return [];
  }
}
