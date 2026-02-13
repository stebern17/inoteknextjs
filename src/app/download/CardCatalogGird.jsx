import { getCatalogData } from "@/services/catalogService";

import CatalogGridClient from "./CatalogGridClient";

export default async function CardCatalogGird() {
  const catalogs = await getCatalogData();

  if (!catalogs || catalogs.length === 0) {
    return <p className="text-center text-gray-600">No catalogs available.</p>;
  }

  return <CatalogGridClient initialCatalogs={catalogs} />;
}
