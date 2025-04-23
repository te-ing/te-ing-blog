import { getArticleData, getAllArticleIds } from '@/lib/markdown';

export async function generateStaticParams() {
  const paths = getAllArticleIds();
  return paths;
}

export default async function ArticlePage({
  params,
}: {
  params: { id: string };
}) {
  const article = await getArticleData(params.id);

  return (
    <article className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
      <div className="text-gray-600 text-sm mb-8">{article.date}</div>
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
    </article>
  );
}
