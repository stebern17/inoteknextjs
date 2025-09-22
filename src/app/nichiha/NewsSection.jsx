import React from "react";
import NewsCard from "../components/NewsCard";

// Helper to fetch news data with ISR
async function getNewsArticles() {
  const res = await fetch(
    "https://reassuring-horses-d6fc23943c.strapiapp.com/api/articles?populate=*",
    { cache: "force-cache" }
  );
  if (!res.ok) throw new Error("Gagal fetch data");
  const data = await res.json();
  // Normalisasi data Strapi
  return data.data.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category?.category || "News",
    image: item.image?.formats?.medium?.url || item.cover?.url || null,
    link: `/news/${item.id}`,
  }));
}

const NewsSection = async () => {
  let articles = [];
  try {
    articles = await getNewsArticles();
  } catch (error) {
    // Optionally handle error UI
    return (
      <div className="text-center py-10 text-white text-xl">
        Gagal memuat berita.
      </div>
    );
  }

  return (
    <section className="bg-[#0253AE] w-full lg:min-h-screen py-9 relative flex items-center">
      {/* Scroll Container */}
      <div className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-2">
        {articles.map((item) => (
          <div
            key={item.id}
            className="news-item flex-shrink-0 snap-center mx-auto w-[300px] sm:w-[360px] md:w-[420px] lg:w-[500px]"
          >
            <NewsCard
              category={item.category}
              title={item.title}
              image={item.image}
              link={item.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
