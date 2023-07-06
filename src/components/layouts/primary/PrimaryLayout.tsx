import Head from 'next/head';
import { ReactElement } from 'react';
import styles from './PrimaryLayout.module.css';

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
        <title>{title}</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default PrimaryLayout;
