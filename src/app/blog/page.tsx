import { getAllArticles } from '@/lib/markdown';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function BlogPage() {
  const articles = getAllArticles();

  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
        <div className="space-y-6">
          {articles.map((article) => (
            <article key={article.id} className="border-b pb-6">
              <Link href={`/blog/${article.id}`}>
                <h2 className="text-xl font-semibold hover:text-blue-600">
                  {article.title}
                </h2>
              </Link>
              <div className="text-gray-600 text-sm mt-2">{article.date}</div>
              <p className="mt-2 text-gray-700">{article.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}
