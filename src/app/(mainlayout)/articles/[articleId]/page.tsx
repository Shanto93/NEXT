"use client";
import { useRouter } from "next/navigation";
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
  const { articleId } = React.use(params);
  const { lan = "en" } = React.use(searchParams);
  const router = useRouter();

  const handleGoHome = () => {
    router.push("/");
  };
  return (
    <div>
      <h1>Article in page {articleId} </h1>
      <p>Reading in language : {lan}</p>
      <button onClick={handleGoHome}>Go Home</button>
    </div>
  );
};

export default ArticlePage;
