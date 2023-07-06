import Gallery from '@/components/sections/gallery/Gallery';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';
import Filter from '../components/sections/filter/Filter';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';

const Home: NextPageWithLayout = () => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const icon = isFilterOpen ? faXmark : faBars;

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <>
      <Filter
        isOpen={isFilterOpen}
        searchText={searchText}
        handleSearchTextChange={handleSearchTextChange}
      />
      <section className={styles.main}>
        <button
          className="fixed top-2 left-2 z-10 md:hidden"
          onClick={() => setIsFilterOpen(isOpen => !isOpen)}
        >
          <FontAwesomeIcon icon={icon} size="xl" />
        </button>
        <h1 className={styles.title}>Search and Filter</h1>
        <Gallery />
      </section>
    </>
  );
};

export default Home;

Home.getLayout = page => {
  return <PrimaryLayout title="Search and Filter">{page}</PrimaryLayout>;
};
