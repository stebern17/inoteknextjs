import Tabs from "../components/TabsProduct";

async function getCatalogData() {
  const [typesRes, variantsRes] = await Promise.all([
    fetch(
      "https://sublime-animal-0e42b737fe.strapiapp.com/api/types?populate=*",
      { cache: "force-cache" } // ❌ tidak akan refetch lagi
    ),
    fetch(
      "https://sublime-animal-0e42b737fe.strapiapp.com/api/variants?populate=*",
      { cache: "force-cache" }
    ),
  ]);

  if (!typesRes.ok || !variantsRes.ok) {
    throw new Error("Gagal fetch data");
  }

  const typesJson = await typesRes.json();
  const variantsJson = await variantsRes.json();

  // Build variant map
  const variantMap = {};
  variantsJson.data.forEach((v) => {
    const img =
      v.VarianImage?.formats?.small?.url ||
      v.VarianImage?.formats?.thumbnail?.url ||
      v.VarianImage?.url ||
      null;

    variantMap[v.id] = {
      id: v.id,
      name: v.Name,
      image: img,
      category: v.typevariant?.Kind || null,
    };
  });

  // Map types + variants
  return typesJson.data.map((t) => ({
    id: t.id,
    product: t.product?.Name || "Unknown",
    category: t.Kind || "Uncategorized",
    coverImage: t.CoverImage?.url || null,
    link: `/product/productdetail/${t.id}`,
    variants: (t.variants || [])
      .map((tv) => variantMap[tv.id] || null)
      .filter(Boolean),
  }));
}

export default async function ProductCatalogPage() {
  const catalogData = await getCatalogData();

  return (
    <section className="lg:px-40 px-4 py-6 lg:min-h-screen content w-full">
      <Tabs initialData={catalogData} />
    </section>
  );
}
