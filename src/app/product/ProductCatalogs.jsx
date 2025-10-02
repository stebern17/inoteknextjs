import Tabs from "./TabsProduct";

export async function getCatalogData() {
  const typesRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/types?populate=*`,
    { cache: "force-cache" }
  );

  if (!typesRes.ok) {
    throw new Error("Gagal fetch data");
  }

  const typesJson = await typesRes.json();

  // Mapping dilakukan langsung dari objek 't'
  return typesJson.data.map((t) => {
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
}
export default async function ProductCatalogPage() {
  const types = await getCatalogData();

  return (
    <section className="lg:px-40 px-4 py-6 min-h-screen content w-full">
      <Tabs initialData={types} />
      {/* atau bisa diteruskan ke <Tabs initialData={types} /> */}
    </section>
  );
}
