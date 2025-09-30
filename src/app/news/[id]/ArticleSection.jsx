import RichTextRenderer from "@/app/components/RichTextRenderer";
import React from "react";
import VerticalLine from "@/app/components/VerticalLine";
import RelatedNews from "./RelatedNews";

export default async function ArticleSection({ id }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/articles/${id}?populate=*`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${process.env.NEXT_TOKEN_STRAPI}` },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return <div>Not Found</div>;
  }

  const { data } = await res.json();

  if (!data) {
    return <div className="content text-center mx-auto">Not Found</div>;
  }

  const category = data.category?.category || "News"; // ✅ ambil kategori

  return (
    <article className="content w-full min-h-screen my-10 flex flex-col font-display">
      <div className="flex flex-col">
        <h1 className="md:text-4xl text-2xl font-bold  text-[#0253AE]">
          {data.title}
        </h1>
        <p className="text-gray-500 text-lg">
          {new Date(data.publishedAt).toLocaleDateString("id-ID", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
      <div className="w-full mt-5">
        <img
          src={data.image.url}
          alt={data.image.alternativeText || ""}
          className="w-full object-cover rounded-2xl md:h-[600px] h-[300px]"
        />
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-3 mt-8">
        <div className="col-span-2">
          <RichTextRenderer content={data.newscontent} />
        </div>
        <div className="flex gap-4">
          <VerticalLine />
          <div>
            {/* ✅ kirim kategori ke RelatedNews */}
            <RelatedNews
              currentCategory={category}
              currentId={data.documentId}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
