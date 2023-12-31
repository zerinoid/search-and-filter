import Head from 'next/head';
import { ReactElement } from 'react';
import styles from './PrimaryLayout.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export interface IPrimaryLayout {
  children: ReactElement | ReactElement[];
  title?: string;
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({
  children,
  title = 'Sample Title'
}) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <title>{title}</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>{children}</main>
      <footer className={styles.footer}>
        <p>
          Example of a simple cumulative search algorithm which filters elements
          by fixed categories and by text input, over selected properties.
        </p>
        <p>
          Employed concepts and techs: React, NextJs, TypeScript, Regex ,Set
          Object, Prop Drilling, CSS Modules, Sass, Husky.
        </p>
      </footer>
    </>
  );
};

export default PrimaryLayout;
