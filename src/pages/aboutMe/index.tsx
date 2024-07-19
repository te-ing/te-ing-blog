import Layout from '@theme/Layout';
import styles from './index.module.css';

export default function AboutMe(): JSX.Element {
  return (
    <Layout
      title={`김태중 블로그`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.title}>
            <h1>김태중</h1>
            <h3>프론트엔드 개발자</h3>
          </div>
        </div>
      </main>
    </Layout>
  );
}
