import Gallery from '@/components/sections/gallery/Gallery';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';
import Filter from '../components/sections/filter/Filter';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars, faEye } from '@fortawesome/free-solid-svg-icons';
import { galleryData } from '@/components/sections/gallery/Gallery.data';

const Home: NextPageWithLayout = () => {
  const [filters, setFilters] = useState<Record<string, Set<string | number>>>({
    status: new Set(),
    year: new Set(),
    score: new Set(),
    area: new Set(),
    program: new Set()
  });
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [showClearButton, setShowClearButton] = useState<boolean>(false);

  useEffect(() => {
    const isFilterActive = Object.values(filters).some(set => set.size > 0);
    if (isFilterActive) {
      setShowClearButton(true);
    } else {
      setShowClearButton(false);
    }
  }, [filters]);

  const projects = galleryData.projects;

  const handleSearchTextChange = (text: string) => {
    setSearchText(text);
  };

  const handleCheckboxChange = (
    filterName: string,
    value: string | number,
    checked: boolean
  ) => {
    setFilters(prevFilters => {
      const newSet = new Set(prevFilters[filterName]);
      if (checked) {
        newSet.add(value);
      } else {
        newSet.delete(value);
      }
      return {
        ...prevFilters,
        [filterName]: newSet
      };
    });
  };

  const filteredItems = projects.filter(project => {
    // Filter by category values
    if (filters.status.size > 0 && !filters.status.has(project.status)) {
      return false;
    }
    if (filters.year.size > 0 && !filters.year.has(project.year)) {
      return false;
    }
    if (filters.score.size > 0 && !filters.score.has(project.score)) {
      return false;
    }
    if (filters.area.size > 0 && !filters.area.has(project.area)) {
      return false;
    }
    if (filters.program.size > 0 && !filters.program.has(project.program)) {
      return false;
    }
    // Filter by search text
    if (searchText.length > 0) {
      const searchRegex = new RegExp(searchText, 'i');
      if (
        !searchRegex.test(project.title) &&
        !searchRegex.test(project.responsible) &&
        !searchRegex.test(project.manager) &&
        !searchRegex.test(project.description)
      ) {
        return false;
      }
    }
    return true;
  });

  const clearFilter = (): void => {
    setFilters({
      status: new Set(),
      year: new Set(),
      score: new Set(),
      area: new Set(),
      program: new Set()
    });
  };

  const clearIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 20 20"
    >
      <path
        fill="#dd3333"
        d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zm5.66 14.24l-1.41 1.41L10 11.41l-4.24 4.25-1.42-1.42L8.59 10 4.34 5.76l1.42-1.42L10 8.59l4.24-4.24 1.41 1.41L11.41 10z"
      />
    </svg>
  );

  return (
    <>
      {showClearButton && (
        <button className={styles.clearButton} onClick={clearFilter}>
          {clearIcon}
          Clear filters
        </button>
      )}
      <div className={styles.header}>
        <div className="flex md:hidden">
          <button onClick={() => setIsFilterOpen(isOpen => !isOpen)}>
            <FontAwesomeIcon icon={faBars} size="xl" />
          </button>
        </div>
        <div className="text-center flex items-center md:flex-grow">
          <p className="sm:hidden">SNF</p>
          <p className="hidden sm:block">Search and filter</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faEye} size="xl" />
        </div>
      </div>
      <div
        className={styles.slidingMenu}
        style={{ left: isFilterOpen ? '0' : '-100%' }}
      >
        <button
          className={styles.closeSliding}
          onClick={() => setIsFilterOpen(isOpen => !isOpen)}
        >
          <FontAwesomeIcon icon={faXmark} size="xl" />
        </button>
        <Filter
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          handleCheckboxChange={handleCheckboxChange}
          filtersState={filters}
        />
      </div>
      <section className={styles.main}>
        <Gallery projects={filteredItems} />
        <div className={styles.fixedMenu}>
          <div className={styles.fixedContainer}>
            <Filter
              searchText={searchText}
              handleSearchTextChange={handleSearchTextChange}
              handleCheckboxChange={handleCheckboxChange}
              filtersState={filters}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

Home.getLayout = page => {
  return <PrimaryLayout title="Search and Filter">{page}</PrimaryLayout>;
};
