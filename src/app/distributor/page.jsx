import DistributorSection from "./DistributorSection";

export default async function DistributorPage() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_API_URL;

  try {
    const res = await fetch(`${STRAPI_URL}/api/distributors?populate=*`, {
      cache: "force-cache",
    });

    if (!res.ok) throw new Error("Gagal fetch data distributor");

    const { data } = await res.json();

    // Mapping hasil dari Strapi (diproses di server)
    const distributors = data.map((doc) => ({
      id: doc.id,
      name: doc.namadistributor,
      address: doc.alamat,
      phone: doc.phone,
      email: doc.email,
      website: doc.website,
      city: doc.distributionarea,
    }));

    // ⬇️ kirim hasilnya ke komponen client (DistributorSection)
    return <DistributorSection initialDistributors={distributors} />;
  } catch (err) {
    console.error("❌ Error fetching distributors:", err);
    return (
      <section className="min-h-screen flex items-center justify-center text-gray-600">
        Gagal memuat data distributor.
      </section>
    );
  }
}
