import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-red-400">Home Page</h1>

      <Link href="/articles">Article</Link>
      <ul>
        <Link href="/articles/news-123?lan=en">
          <li>English</li>
        </Link>
        <Link href="articles/news-123?lan=sp">
          <li>Spanish</li>
        </Link>
        <Link href="articles/news-123?lan=fr">
          <li>French</li>
        </Link>
      </ul>
    </div>
  );
}
