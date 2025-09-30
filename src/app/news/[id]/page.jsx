import React from "react";
import ArticleSection from "./ArticleSection";
import NewsLetter from "./NewsLetter";

export default async function NewsDetail({ params }) {
  const { id } = await params; // documentId dari URL
  return (
    <>
      <ArticleSection id={id} />
      <NewsLetter />
    </>
  );
}
