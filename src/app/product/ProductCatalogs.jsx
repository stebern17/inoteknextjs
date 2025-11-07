import { Suspense } from "react";
import Tabs from "./TabsProduct";

export const revalidate = 21600;

export default async function ProductCatalogPage() {
  const StrapiURL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(
      `${StrapiURL}/api/types?populate=*&pagination[pageSize]=1000`,
      { next: { revalidate: 21600 } }
    );

    if (!res.ok) throw new Error("Gagal fetch data");

    const typesJson = await res.json();

    const types = typesJson.data.map((t) => ({
      id: t.id,
      documentId: t.documentId,
      product: t.product?.Name || "",
      size: t.Size || "N/A",
      weight: t.Weight || "N/A",
      packaging: t.Packaging || "N/A",
      category: t.Kind || "Uncategorized",
      coverImage: t.CoverImage?.url || null,
      headerImage: t.HeaderImage?.url || null,
    }));

    return (
      <section className="lg:px-40 px-4 py-6 min-h-screen content w-full">
        <Suspense
          fallback={
            <p className="text-center text-gray-600">Loading produk...</p>
          }
        >
          <Tabs initialData={types} />
        </Suspense>
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
