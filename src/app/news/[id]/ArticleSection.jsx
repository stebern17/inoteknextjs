import RichTextRenderer from "@/app/components/RichTextRenderer";
import React from "react";
import VerticalLine from "@/app/components/VerticalLine";
import RelatedNews from "./RelatedNews";
import { getArticleByDocumentId } from "@/services/newsService";

export default async function ArticleSection({ id }) {
  const article = await getArticleByDocumentId(id);

  if (!article) {
    return <div className="content text-center mx-auto">Not Found</div>;
  }

  const category = article.category?.category || "News";

  return (
    <article className="content w-full min-h-screen my-10 flex flex-col font-display">
      <div className="flex flex-col">
        <h1 className="md:text-4xl text-2xl font-bold text-[#0253AE]">
          {article.title}
        </h1>
        <div className="flex gap-3">
          <p className="text-gray-500 text-lg">
            {new Date(article.publishedAt).toLocaleDateString("id-ID", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </p>
          <p className="text-gray-700 text-lg">{category}</p>
        </div>
      </div>

      {article.image && (
        <div className="w-full mt-5">
          <img
            src={article.image.url}
            alt={article.image.alternativeText || ""}
            className="w-full object-cover rounded-2xl md:h-[600px] h-[300px]"
          />
        </div>
      )}

      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-8 gap-3 mt-8">
        <div className="col-span-2">
          <RichTextRenderer content={article.newscontent} />
        </div>
        <div className="flex gap-4">
          <VerticalLine />
          <div>
            <RelatedNews
              currentCategory={category}
              currentDocumentId={article.documentId}
            />
          </div>
        </div>
      </div>
    </article>
  );
}
