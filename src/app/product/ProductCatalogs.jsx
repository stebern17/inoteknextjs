"use client";

import { useEffect, useState } from "react";
import Tabs from "./TabsProduct";

export default function ProductCatalogPage() {
  const [types, setTypes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCatalogData() {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/types?populate=*&pagination[pageSize]=1000`,
          { cache: "no-store" }
        );

        if (!res.ok) throw new Error("Gagal fetch data");
        const typesJson = await res.json();

        const mapped = typesJson.data.map((t) => {
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

        setTypes(mapped);
      } catch (error) {
        console.error("❌ Error fetching product types:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchCatalogData();
  }, []);

  if (loading) {
    return (
      <p className="text-center text-gray-600">Loading katalog produk...</p>
    );
  }

  return (
    <section className="lg:px-40 px-4 py-6 min-h-screen content w-full">
      <Tabs initialData={types} />
    </section>
  );
}
