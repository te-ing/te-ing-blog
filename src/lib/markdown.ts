import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { featuredArticles } from '@/config/featured-articles';

const articlesDirectory = path.join(process.cwd(), 'src/content/articles');

export interface Article {
  id: string;
  title: string;
  date: string;
  content: string;
  description: string;
  tags: string[];
}

export interface ArticlePreview {
  id: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export function getAllArticleIds() {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return { params: { id: fileName.replace(/\.md$/, '') } };
  });
}

export async function getArticleData(id: string): Promise<Article> {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    id,
    content: contentHtml,
    ...(data as {
      title: string;
      date: string;
      description: string;
      tags: string[];
    }),
  };
}

export function getAllArticles(): ArticlePreview[] {
  const fileNames = fs.readdirSync(articlesDirectory);
  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);

    return {
      id,
      ...(data as {
        title: string;
        date: string;
        description: string;
        tags: string[];
      }),
    };
  });

  return allArticlesData.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getFeaturedArticles(): ArticlePreview[] {
  const articles = getAllArticles();
  return articles.filter((article) => featuredArticles.includes(article.id));
}

export function getAllTags(): string[] {
  const articles = getAllArticles();
  const tags = new Set<string>();
  articles.forEach((article) => {
    article.tags.forEach((tag) => tags.add(tag));
  });
  return Array.from(tags).sort();
}
