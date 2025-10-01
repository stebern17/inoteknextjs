import React from "react";
import { getCatalogData } from "@/app/product/ProductCatalogs";
import { HR } from "flowbite-react";
import BackButton from "@/app/components/BackButton";

export default async function SingelProduct({ id }) {
  const catalogData = await getCatalogData();
  const product = catalogData.find((item) => item.documentId === id);

  return (
    <div className="w-[60vw] mx-auto my-10 flex flex-col gap-6">
      <BackButton />
      <div className="p-6 flex flex-col font-display border-t border-s border-gray-300 shadow-[8px_8px_16px_rgba(0,0,0,0.15)] rounded-2xl">
        <div className="grid grid-cols-2 gap-10">
          {/* Header Image */}
          <img
            src={product.headerImage}
            alt={product.product}
            className="rounded-2xl"
          />

          {/* Detail */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex gap-2">
                <div>
                  <p>Size</p>
                  <p>Weight</p>
                  <p>Packaging</p>
                </div>
                <div>
                  <p>: {product.productSize}</p>
                  <p>: {product.productWeight}</p>
                  <p>: {product.productPackaging}</p>
                </div>
              </div>
              <HR className="bg-gray-600" />
            </div>

            {/* Product Specs Images */}
            <div className="grid grid-cols-6 gap-4 relative">
              {product.productSpecs &&
                product.productSpecs.map((spec, index) => (
                  // 1. Tambahkan div pembungkus dengan class "group" dan "relative"
                  <div key={index} className=" flex justify-center group">
                    <img
                      src={spec.url} // Gunakan spec.url
                      alt={spec.description} // Gunakan deskripsi untuk alt text
                      className="h-16 object-cover mx-auto"
                    />

                    <div className="absolute bottom-full mb-2 w-max max-w-xs px-3 py-1.5 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {spec.description}

                      <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-gray-900"></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <HR className="bg-gray-600" />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-medium tracking-wide">Varian Produk</h3>
          <div className="grid grid-cols-3 gap-6">
            {product.variants.map((variant) => (
              <div key={variant.id} className="flex flex-col items-center">
                <img
                  src={variant.image}
                  alt={variant.name}
                  className="rounded-lg h-24 object-cover"
                />
                <p className="mt-2 text-center">{variant.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
