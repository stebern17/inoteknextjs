// services/downloadCatalog.jsx
export async function getCatalogData() {
  const StrapiURL = process.env.NEXT_PUBLIC_API_URL;
  const StrapiToken = process.env.NEXT_TOKEN_STRAPI;

  try {
    const res = await fetch(`${StrapiURL}/api/download-catalogs?populate=*`, {
      headers: {
        Authorization: `Bearer ${StrapiToken}`,
      },
      cache: "no-store", // agar selalu fetch data terbaru
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch catalog data: ${res.statusText}`);
    }

    const json = await res.json();

    const catalogs = json.data.map((item) => ({
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

    return catalogs;
  } catch (error) {
    console.error("❌ Error fetching catalog data:", error);
    return [];
  }
}
