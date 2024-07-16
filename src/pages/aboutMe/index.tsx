import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`김태중 블로그`}
      description="Description will go into a meta tag in <head />"
    >
      <main className={styles.wrapper}>
        <img alt="resume first page" className={styles.resume1} />
        <img alt="resume second page" className={styles.resume2} />
      </main>
    </Layout>
  );
}
