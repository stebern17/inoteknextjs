"use client";
import React, { useState, useEffect, useRef } from "react";
import NewsCard from "../components/NewsCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function NewsSection() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);
  const itemWidthRef = useRef(0);
  const gapRef = useRef(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          "https://sublime-animal-0e42b737fe.strapiapp.com/api/articles?populate=*"
        );

        if (!res.ok) throw new Error("Gagal fetch data");

        const data = await res.json();

        // Normalisasi data Strapi
        const mapped = data.data.map((item) => ({
          id: item.id,
          title: item.title,
          category: item.category?.name || "News",
          image: item.cover?.formats?.medium?.url
            ? item.cover.formats.medium.url
            : item.cover?.url,
          link: `/news/${item.id}`, // routing ke halaman detail
        }));

        setArticles(mapped);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  // === Auto layout center (hanya mobile) ===
  useEffect(() => {
    if (typeof window === "undefined") return;
    const container = scrollRef.current;
    if (!container) return;

    const isMobileQuery = window.matchMedia("(max-width: 640px)");
    const setLayoutIfMobile = () => {
      if (!isMobileQuery.matches) {
        container.style.paddingLeft = "";
        container.style.paddingRight = "";
        container.style.overscrollBehavior = "";
        container.style.touchAction = "";
        return;
      }

      const first = container.querySelector(".news-item");
      if (!first) return;

      const itemRect = first.getBoundingClientRect();
      itemWidthRef.current = Math.round(itemRect.width);

      const style = getComputedStyle(container);
      const gap = parseFloat(style.gap) || 0;
      gapRef.current = gap;

      const containerWidth = container.clientWidth;

      const visibleCount = Math.max(
        1,
        Math.floor((containerWidth + gap) / (itemWidthRef.current + gap))
      );

      let padding;
      if (visibleCount <= 1) {
        padding = Math.max((containerWidth - itemWidthRef.current) / 2, 0);
      } else {
        const totalItemsWidth =
          visibleCount * itemWidthRef.current + (visibleCount - 1) * gap;
        padding = Math.max((containerWidth - totalItemsWidth) / 2, 0);
      }

      const maxPadding = itemWidthRef.current;
      padding = Math.min(padding, maxPadding);

      container.style.paddingLeft = `${Math.round(padding)}px`;
      container.style.paddingRight = `${Math.round(padding)}px`;
      container.style.overscrollBehavior = "contain";
      container.style.touchAction = "pan-x";
    };

    setLayoutIfMobile();
    const resizeHandler = () => setLayoutIfMobile();
    window.addEventListener("resize", resizeHandler);
    isMobileQuery.addEventListener("change", setLayoutIfMobile);

    return () => {
      window.removeEventListener("resize", resizeHandler);
      isMobileQuery.removeEventListener("change", setLayoutIfMobile);
    };
  }, [articles]);

  const scrollLeft = () => {
    const step = (itemWidthRef.current || 300) + (gapRef.current || 16);
    scrollRef.current?.scrollBy({ left: -step, behavior: "smooth" });
  };

  const scrollRight = () => {
    const step = (itemWidthRef.current || 300) + (gapRef.current || 16);
    scrollRef.current?.scrollBy({ left: step, behavior: "smooth" });
  };

  if (loading) {
    return (
      <div className="text-center py-10 text-white text-xl">Loading...</div>
    );
  }

  return (
    <section className="bg-[#0253AE] w-full lg:min-h-screen py-9 relative flex items-center">
      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-2"
      >
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

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll left"
        className="absolute left-4 z-10 bg-white text-blue-600 p-3 rounded-full shadow hover:bg-blue-100"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        aria-label="Scroll right"
        className="absolute right-4 z-10 bg-white text-blue-600 p-3 rounded-full shadow hover:bg-blue-100"
      >
        <FaChevronRight size={20} />
      </button>
    </section>
  );
}

export default NewsSection;
