"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Tabs() {
  const [catalogData, setCatalogData] = useState([]);
  const [activeProduct, setActiveProduct] = useState("EX Series 1820");
  const [activeCategory, setActiveCategory] = useState("Simple");

  useEffect(() => {
    async function fetchCatalog() {
      try {
        const [typesRes, variantsRes] = await Promise.all([
          fetch(
            "https://reassuring-horses-d6fc23943c.strapiapp.com/api/types?populate=*"
          ),
          fetch(
            "https://reassuring-horses-d6fc23943c.strapiapp.com/api/variants?populate=*"
          ),
        ]);

        if (!typesRes.ok || !variantsRes.ok) {
          throw new Error("Gagal fetch data");
        }

        const typesJson = await typesRes.json();
        const variantsJson = await variantsRes.json();

        const variantMap = {};
        variantsJson.data.forEach((v) => {
          // Use the full URL from VarianImage.formats.small.url or fallback to VarianImage.url
          const img =
            v.VarianImage?.formats?.small?.url ||
            v.VarianImage?.formats?.thumbnail?.url ||
            v.VarianImage?.url ||
            null;
          variantMap[v.id] = {
            id: v.id,
            name: v.Name,
            image: img, // full URL, no prefix needed
            category: v.typevariant?.Kind || null,
          };
        });

        const mapped = typesJson.data.map((t) => ({
          id: t.id,
          product: t.product?.Name || "Unknown",
          category: t.Kind || "Uncategorized",
          coverImage: t.CoverImage?.url || null,
          link: `/product/productdetail/${t.id}`, // use full URL directly
          variants: (t.variants || [])
            .map((tv) => {
              const variant = variantMap[tv.id];
              return variant || null;
            })
            .filter(Boolean),
        }));

        setCatalogData(mapped);
      } catch (err) {
        console.error("Error fetch:", err);
      }
    }

    fetchCatalog();
  }, []);

  // ---------------- STÁTIS ----------------
  const productList = [
    "EX Series 1820",
    "EX Series 3030",
    "EX Series 3030 New Introduction",
  ];

  const categoryMap = {
    "EX Series 1820": ["Simple", "Designers", "Wood", "Stone", "Tile/Brick"],
    "EX Series 3030": ["Simple", "Designers", "Wood", "Stone", "Tile/Brick"],
    "EX Series 3030 New Introduction": [
      "Simple",
      "Designers",
      "Wood",
      "Stone",
      "Tile/Brick",
    ],
  };
  // -----------------------------------------

  const filteredData = catalogData.filter(
    (item) => item.product === activeProduct && item.category === activeCategory
  );

  return (
    <div className="w-full font-display">
      {/* Tab Produk */}
      <div className="flex border-b justify-evenly border-gray-200">
        {productList.map((prod) => (
          <button
            key={prod}
            onClick={() => {
              setActiveProduct(prod);
              setActiveCategory(categoryMap[prod][0]);
            }}
            className={`px-6 py-2 text-xs lg:text-lg font-medium w-full ${
              activeProduct === prod
                ? "bg-[#0253AE] text-white"
                : "bg-white text-gray-800 hover:bg-gray-100"
            }`}
          >
            {prod}
          </button>
        ))}
      </div>

      {/* Tab Kategori */}
      <div className="flex justify-evenly gap-8 mt-6">
        {categoryMap[activeProduct].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-1 text-sm xl:text-lg w-full ${
              activeCategory === cat
                ? "text-[#0253AE] border-b-2 border-[#0253AE]"
                : "text-gray-800 hover:text-[#0253AE]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Konten */}
      <div className="mt-8 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Link key={item.id} href={item.link}>
              <div className="border-t border-s border-gray-300 rounded-xl overflow-hidden mx-auto p-3 shadow-[4px_4px_2px_0_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow duration-300 w-full max-w-xs">
                {item.coverImage && (
                  <img
                    src={item.coverImage}
                    alt={`${item.product} - ${item.category}`}
                    className="w-full h-40 object-cover rounded-xl"
                  />
                )}
                {/* List varian */}
                <div className="mt-2 grid grid-cols-3 gap-2">
                  {item.variants.map((v) => (
                    <div key={v.id} className="text-center">
                      {v.image ? (
                        <img
                          src={v.image}
                          alt={v.name}
                          className="w-full h-20 object-cover rounded-md border border-gray-400"
                        />
                      ) : (
                        <div className="w-full h-20 flex items-center justify-center bg-gray-100 text-xs text-gray-500 rounded-md">
                          {v.name}
                        </div>
                      )}
                      <p className="text-xs mt-1">{v.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No data available for {activeProduct} / {activeCategory}.
          </p>
        )}
      </div>
    </div>
  );
}
