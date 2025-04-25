import Link from "next/link";
import "../styles/global.css"

export default function Home() {
  return (
    <div className="px-10">
      <h1 className="text-2xl font-bold text-red-400 text-center">Home Page</h1>

      <Link className="text-xl text-red-500" href="/articles">Articles</Link>
      <ul className="pl-7 underline text-blue-500">
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
