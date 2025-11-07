import Tabs from "./TabsProduct";

export const revalidate = 21600; // cache 6 jam

export default async function ProductCatalogPage() {
  const StrapiURL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(
      `${StrapiURL}/api/types?populate=*&pagination[pageSize]=1000`,
      { cache: "force-cache" }
    );

    if (!res.ok) throw new Error("Gagal fetch data");

    const typesJson = await res.json();

    const types = typesJson.data.map((t) => {
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

    if (!types || types.length === 0) {
      return (
        <p className="text-center text-gray-600">
          Tidak ada data katalog produk.
        </p>
      );
    }

    return (
      <section className="lg:px-40 px-4 py-6 min-h-screen content w-full">
        <Tabs initialData={types} />
      </section>
    );
  } catch (error) {
    console.error("❌ Error fetching product types:", error);

    return (
      <p className="text-center text-red-500">
        Gagal memuat katalog produk. Silakan coba lagi nanti.
      </p>
    );
  }
}
