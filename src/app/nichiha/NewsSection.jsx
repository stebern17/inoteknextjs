import NewsCard from "../components/NewsCard";
import NewsSlider from "../components/NewsSlider";

async function getNewsArticles() {
  const res = await fetch(
    "https://reassuring-horses-d6fc23943c.strapiapp.com/api/articles?populate=*",
    { cache: "force-cache" }
  );
  if (!res.ok) throw new Error("Gagal fetch data");
  const data = await res.json();

  return data.data.map((item) => ({
    id: item.id,
    title: item.title,
    category: item.category?.category || "News",
    image: item.image?.formats?.medium?.url || item.cover?.url || null,
    link: `/news/${item.id}`,
  }));
}

export default async function NewsSection() {
  let articles = [];
  try {
    articles = await getNewsArticles();
  } catch (error) {
    return (
      <div className="text-center py-10 text-white text-xl">
        Gagal memuat berita.
      </div>
    );
  }

  if (!articles.length) {
    return (
      <div className="text-center py-10 text-white text-xl">
        Tidak ada artikel
      </div>
    );
  }

  return (
    <section className="bg-[#0253AE] w-full py-9 relative">
      <NewsSlider>
        {articles.map((item) => (
          <div
            key={item.id}
            className="news-item flex-shrink-0 snap-center mx-auto w-[300px] sm:w-[360px] md:w-[420px] lg:w-[500px]"
          >
            <NewsCard {...item} />
          </div>
        ))}
      </NewsSlider>
    </section>
  );
}
