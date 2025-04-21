import React from "react";

interface Props {
  params: {
    articleId: string;
  };
  searchParams: {
    lan?: "en" | "sp" | "fr";
  };
}
const ArticlePage = ({ params, searchParams }: Props) => {
  const { articleId } = params;
  const { lan = "en" } = searchParams;
  return (
    <div>
      <h1>Article in page {articleId} </h1>
      <p>Reading in language : {lan}</p>
    </div>
  );
};

export default ArticlePage;
