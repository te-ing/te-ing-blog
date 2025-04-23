'use client';

import { ArticlePreview } from '@/lib/markdown';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface BlogPostsProps {
  articles: ArticlePreview[];
  tags: string[];
}

export default function BlogPosts({ articles, tags }: BlogPostsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedTag = searchParams.get('tag');

  const handleTagClick = useCallback(
    (tag: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      if (tag) {
        params.set('tag', tag);
      } else {
        params.delete('tag');
      }
      router.push(`/blog?${params.toString()}`);
    },
    [router, searchParams]
  );

  const filteredArticles = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag))
    : articles;

  return (
    <div className="max-w-[800px] mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTagClick(null)}
            className={`px-3 py-1 rounded-full text-sm transition-colors ${
              !selectedTag
                ? 'bg-blue-100 text-blue-800'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTag === tag
                  ? 'bg-blue-100 text-blue-800'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredArticles.map((article) => (
          <article key={article.id} className="border-b pb-6">
            <Link href={`/blog/${article.id}`}>
              <h2 className="text-xl font-semibold hover:text-blue-600">
                {article.title}
              </h2>
            </Link>
            <div className="text-gray-600 text-sm mt-2">{article.date}</div>
            <p className="mt-2 text-gray-700">{article.description}</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
