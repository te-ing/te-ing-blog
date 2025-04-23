import Layout from '@/components/Layout';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Write-ing Code</h1>
          <p className="text-xl text-gray-600">
            효율성을 높여 행복한 시간을 더 많이 만들고 싶습니다.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Featured articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <article
                key={i}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/posts/${i}`} className="hover:text-blue-600">
                    Featured Article {i}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4">
                  This is a sample featured article description. It will be
                  replaced with actual content.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>5 min read</span>
                  <span className="mx-2">•</span>
                  <span>2024-04-{i}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <article key={i} className="border-b border-gray-200 pb-4">
                <h3 className="text-xl font-semibold mb-2">
                  <Link href={`/posts/${i}`} className="hover:text-blue-600">
                    Recent Post {i}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-2">
                  This is a sample recent post description. It will be replaced
                  with actual content.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>3 min read</span>
                  <span className="mx-2">•</span>
                  <span>2024-04-{i}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
