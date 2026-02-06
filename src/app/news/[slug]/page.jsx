import React from "react";
import ArticleSection from "./ArticleSection";
import NewsLetter from "./NewsLetter";

export default async function NewsDetail({ params }) {
  const { slug } = await params;
  return (
    <>
      <ArticleSection slug={slug} />
      <NewsLetter />
    </>
  );
}
