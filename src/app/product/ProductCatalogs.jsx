import Tabs from "./TabsProduct";

export async function getCatalogData() {
  const [typesRes, variantsRes, productsRes] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/types?populate=*`, {
      cache: "no-store",
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/variants?populate=*`, {
      cache: "no-store",
    }),
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products?populate=*`, {
      cache: "no-store",
    }),
  ]);

  if (!typesRes.ok || !variantsRes.ok || !productsRes.ok) {
    throw new Error("Gagal fetch data");
  }

  const typesJson = await typesRes.json();
  const variantsJson = await variantsRes.json();
  const productsJson = await productsRes.json();

  // Buat variant map
  const variantMap = {};
  variantsJson.data.forEach((v) => {
    const img =
      v.VarianImage?.formats?.small?.url ||
      v.VarianImage?.formats?.thumbnail?.url ||
      v.VarianImage?.url ||
      null;

    variantMap[v.id] = {
      id: v.id,
      documentId: v.documentId,
      name: v.Name,
      image: img,
      category: v.typevariant?.Kind || null,
    };
  });

  // Gabungkan types + variants + products
  return typesJson.data.map((t) => {
    const relatedProduct = productsJson.data.find(
      (p) => p.id === t.product?.id
    );

    return {
      id: t.id,
      documentId: t.documentId,
      product: t.product?.Name || "Unknown",
      productSize: t.product?.Size || "Standard",
      productWeight: t.product?.Weight || "Standard",
      productPackaging: t.product?.Packaging || "Standard",
      category: t.Kind || "Uncategorized",
      coverImage: t.CoverImage?.url || null,
      headerImage: t.HeaderImage?.url || null,
      link: `/product/productdetail/${t.id}`,
      variants: (t.variants || [])
        .map((tv) => variantMap[tv.id] || null)
        .filter(Boolean),
      productSpecs:
        relatedProduct?.Specifiation?.map((s) => ({
          url:
            s.formats?.small?.url || s.formats?.thumbnail?.url || s.url || null,
          description: s.alternativeText || s.caption || "No description",
        })).filter((spec) => spec.url) || [],
    };
  });
}

export default async function ProductCatalogPage() {
  const catalogData = await getCatalogData();

  return (
    <section className="lg:px-40 px-4 py-6 min-h-screen content w-full">
      <Tabs initialData={catalogData} />
    </section>
  );
}
