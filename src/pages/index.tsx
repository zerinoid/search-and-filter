import Gallery from '@/components/sections/gallery/Gallery';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import SidebarLayout from '../components/layouts/sidebar/SidebarLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Gallery />
    </section>
  );
};

export default Home;

Home.getLayout = page => {
  return (
    <PrimaryLayout title="Search and Filter">
      <SidebarLayout />
      {page}
    </PrimaryLayout>
  );
};
