import CardCatalogGird from "./CardCatalogGird";
export default function CatalogSection() {
  return (
    <section className="content min-h-screen w-full flex flex-col my-10 font-display">
      <h2 className="text-3xl text-center font-bold text-[#0253AE]">
        E-Catalog
      </h2>
      <CardCatalogGird />
    </section>
  );
}
