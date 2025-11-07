import SingelProduct from "./SingelProduct";

export const revalidate = 21600; // cache 6 jam (ISR)

export default async function ProductDetailPage({ params }) {
  const resolvedParams = await Promise.resolve(params);
  const { id } = resolvedParams;
  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(
      `${STRAPI_URL}/api/types?filters[documentId][$eq]=${id}&populate=*`,
      { cache: "force-cache" }
    );

    if (!res.ok) throw new Error(`Gagal fetch data produk: ${res.status}`);

    const json = await res.json();
    const data = json.data?.[0];

    if (!data) {
      return (
        <div className="text-center py-16 text-gray-600">
          Produk tidak ditemukan.
        </div>
      );
    }

    // mapping data tetap sama seperti di versi lama
    const product = {
      id: data.id,
      documentId: data.documentId,
      product: data.product?.Name || "",
      size: data.Size || "N/A",
      weight: data.Weight || "N/A",
      packaging: data.Packaging || "N/A",
      category: data.Kind || "Uncategorized",
      coverImage: data.CoverImage?.url || null,
      headerImage: data.HeaderImage?.url || null,
      colours:
        data.Colour?.map((col) => ({
          id: col.id,
          caption: col.caption || "",
          url:
            col.formats?.small?.url ||
            col.formats?.thumbnail?.url ||
            col.url ||
            null,
        })) ?? [],
      specifications:
        data.Specifiation?.map((spec) => ({
          id: spec.id,
          caption: spec.caption || "",
          url: spec.formats?.thumbnail?.url || spec.url || null,
        })) ?? [],
    };

    // langsung render SingelProduct dengan props product
    return <SingelProduct product={product} />;
  } catch (err) {
    console.error("❌ Error fetching product detail:", err);

    return (
      <div className="text-center py-16 text-red-600">
        Gagal memuat detail produk. Silakan coba lagi nanti.
      </div>
    );
  }
}
