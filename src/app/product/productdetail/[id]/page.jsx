"use client";

import { useEffect, useState } from "react";
import { use } from "react";
import SingelProduct from "./SingelProduct";

export default function ProductDetailPage({ params }) {
  const { id } = use(params);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;

        const res = await fetch(
          `${STRAPI_URL}/api/types?populate=*&pagination[pageSize]=1000`,
          { cache: "no-store" }
        );
        if (!res.ok) throw new Error("Gagal fetch data catalog");

        const json = await res.json();

        // Mapping data Strapi
        const mapped = json.data.map((t) => {
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

        // Cari produk sesuai id
        const found = mapped.find((item) => item.documentId === id);
        setProduct(found);
      } catch (err) {
        console.error("Error fetching product:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
        <div className="h-12 w-12 border-4 border-gray-300 border-t-[#013774] rounded-full animate-spin"></div>
        <p className="text-[#013774] mt-3 font-medium">Loading Produk...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-16 text-gray-600">
        Produk tidak ditemukan.
      </div>
    );
  }

  return <SingelProduct product={product} />;
}
