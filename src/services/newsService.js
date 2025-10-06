// services/newsServices.js
export async function getNewsArticles() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/articles?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Gagal fetch data dari Strapi API", await res.text());
    return [];
  }

  const { data } = await res.json();
  if (!data) return [];

  return data.map((item) => {
    const doc = item; // langsung flat tanpa attributes

    return {
      id: doc.id,
      title: doc.title,
      category: doc.category?.category || "News",
      image:
        doc.image?.formats?.medium?.url ||
        doc.image?.url ||
        null,
      link: `/news/${doc.documentId}`,
    };
  });
}

export async function getArticleByDocumentId(documentId) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${baseUrl}/api/articles?filters[documentId][$eq]=${documentId}&populate=*`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    console.error("Gagal fetch artikel tunggal", await res.text());
    return null;
  }

  const { data } = await res.json();
  return data?.[0] || null;
}
