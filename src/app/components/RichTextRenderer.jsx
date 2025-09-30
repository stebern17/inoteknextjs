"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";

export default function RichTextRenderer({ content }) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => (
          <p className="leading-relaxed text-gray-800 text-justify">
            {children}
          </p>
        ),
        heading: ({ children, level }) => {
          const Tag = `h${level}`;
          const styles = {
            1: "text-3xl font-bold mt-6 mb-4",
            2: "text-2xl font-semibold mt-5 mb-3",
            3: "text-xl font-medium mt-4 mb-2",
          };
          return <Tag className={styles[level] || "text-lg"}>{children}</Tag>;
        },
        list: ({ children, format }) =>
          format === "ordered" ? (
            <ol className="list-decimal ml-6 mb-4">{children}</ol>
          ) : (
            <ul className="list-disc ml-6 mb-4">{children}</ul>
          ),
        quote: ({ children }) => (
          <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 my-4">
            {children}
          </blockquote>
        ),
        link: ({ children, url }) => (
          <a
            href={url}
            className="text-blue-600 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        image: ({ image }) => (
          <img
            src={image.url}
            alt={image.alternativeText || ""}
            className="my-4 rounded-lg shadow"
          />
        ),
      }}
    />
  );
}
