import { getCatalogData } from "@/services/catalogService";

export default async function CatalogPage() {
  const catalogs = await getCatalogData();

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
          <div className="bg-white h-[600px] rounded-lg shadow-md overflow-hidden flex flex-col">
            <img
              src={catalog.coverImage}
              alt={catalog.title}
              className="h-[85%] w-full object-cover"
            />
            <p className="text-center font-semibold text-2xl text-[#0253AE] items-center my-auto">
              {catalog.title}
            </p>
          </div>
        </a>
      ))}
    </div>
  );
}
