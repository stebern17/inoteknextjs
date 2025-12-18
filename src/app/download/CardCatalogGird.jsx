// /app/catalog/page.jsx
import { getCatalogData } from "@/services/catalogService";

export default async function CatalogPage() {
  const catalogs = await getCatalogData();

  if (!catalogs || catalogs.length === 0) {
    return <p className="text-center text-gray-600">No catalogs available.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 p-6">
      {catalogs.map((catalog) => (
        <a
          href={catalog.catalogFile}
          key={catalog.id}
          target="_blank"
          rel="noopener noreferrer"
          className="shadow-[4px_4px_2px_0_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow duration-300 rounded-lg"
        >
          <div className="bg-white lg:h-[400px] 2xl:h-[600px] rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src={catalog.coverImage}
              alt={catalog.title}
              className="lg:h-[85%] w-full object-cover"
            />
            <p className="text-center font-semibold text-2xl text-[#0253AE] my-auto">
              {catalog.title}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
