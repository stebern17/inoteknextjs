"use client";

import { use } from "react";
import { useEffect, useState } from "react";
import SingelProduct from "./SingelProduct";
import { getCatalogData } from "@/app/product/ProductCatalogs";

export default function ProductDetailPage({ params }) {
  // ✅ Gunakan React.use() untuk unwrap Promise params
  const { id } = use(params);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const catalogData = await getCatalogData();
        const found = catalogData.find((item) => item.documentId === id);
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
