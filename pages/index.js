import Head from 'next/head';
import styles from 'styles/Home.module.css';

import InfoSingleForm from 'components/InfoSingleForm';
import SectionFlag from 'components/SectionFlag';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Generar PDF con Puppeteer y Next.js</title>
        <meta
          name="description"
          content="Generar PDF con Puppeteer y Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Generar PDF con Puppeteer y Next.js</h1>

        <SectionFlag />
        <InfoSingleForm />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://corteshvictor.dev/"
          target="_blank"
          rel="noopener noreferrer"
        >
          corteshvictor.dev
        </a>
        <a
          href="https://github.com/corteshvictor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gihub
        </a>
        <a
          href="https://twitter.com/corteshvictor"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
        <a
          href="https://www.linkedin.com/in/corteshvictor"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
