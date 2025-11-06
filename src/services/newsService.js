// services/newsServices.js
export async function getNewsArticles() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${baseUrl}/api/articles?populate=*`, {
    cache: "force-cache",
  });

  if (!res.ok) {
    console.error("Gagal fetch data dari Strapi API", await res.text());
    return [];
  }

  const { data } = await res.json();
  if (!data) return [];

  return data.map((item) => {
    const doc = item;

    const rawUrl =
    doc.image?.formats?.medium?.url ||
    doc.image?.url ||
    null;

    const imageUrl = rawUrl
    ? rawUrl.startsWith("http")
      ? rawUrl
      : `${baseUrl}${rawUrl}`
    : null;

    return {
      id: doc.id,
      title: doc.title,
      category: doc.category?.category || "News",
      image: imageUrl,
      link: `/news/${doc.documentId}`,
      createdAt: doc.createdAt,
    };
  });
}

export async function getArticleByDocumentId(documentId) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL.replace(/\/$/, "");
  const res = await fetch(
    `${baseUrl}/api/articles?filters[documentId][$eq]=${documentId}&populate=*`,
    { cache: "force-cache" }
  );

  if (!res.ok) {
    console.error("Gagal fetch artikel tunggal", await res.text());
    return null;
  }

  const { data } = await res.json();
  if (!data?.[0]) return null;

  const doc = data[0];

  // Ambil URL gambar
  const rawUrl =
    doc.image?.formats?.medium?.url ||
    doc.image?.url ||
    null;

  const imageUrl = rawUrl
    ? rawUrl.startsWith("http")
      ? rawUrl
      : `${baseUrl}${rawUrl}`
    : null;

  // Return dengan struktur seragam
  return {
    id: doc.id,
    title: doc.title,
    category: doc.category?.category || "News",
    image: {
      url: imageUrl,
      alternativeText: doc.image?.alternativeText || "",
    },
    newscontent: doc.newscontent,
    documentId: doc.documentId,
    createdAt: doc.createdAt,
  };
}

