import Head from 'next/head';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="description"
          content="A website that show GitHub users whose location is Tanzania"
        />
      </Head>
      {children}
    </div>
  );
}
