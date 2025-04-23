import { getAllArticles, getAllTags } from '@/lib/markdown';
import Layout from '@/components/Layout';
import BlogPosts from '@/components/BlogPosts';

export default function BlogPage() {
  const articles = getAllArticles();
  const tags = getAllTags();

  return (
    <Layout>
      <BlogPosts articles={articles} tags={tags} />
    </Layout>
  );
}
