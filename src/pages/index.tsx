import Gallery from '@/components/sections/gallery/Gallery';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import styles from '../styles/Home.module.css';
import { NextPageWithLayout } from './_app';
import Filter from '../components/sections/filter/Filter';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { galleryData } from '@/components/sections/gallery/Gallery.data';

const Home: NextPageWithLayout = () => {
  const [filters, setFilters] = useState<Record<string, Set<string | number>>>({
    status: new Set(),
    approvalYear: new Set(),
    enterprise: new Set(),
    area: new Set(),
    program: new Set()
  });
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const icon = isFilterOpen ? faXmark : faBars;
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
    if (
      filters.approvalYear.size > 0 &&
      !filters.approvalYear.has(project.year)
    ) {
      return false;
    }
    if (filters.enterprise.size > 0 && !filters.enterprise.has(project.score)) {
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

  return (
    <>
      <div
        className={styles.slidingMenu}
        style={{ left: isFilterOpen ? '0' : '-100%' }}
      >
        <Filter
          searchText={searchText}
          handleSearchTextChange={handleSearchTextChange}
          handleCheckboxChange={handleCheckboxChange}
          filtersState={filters}
        />
      </div>
      <section className={styles.main}>
        <button
          className="fixed top-2 left-2 z-10 md:hidden"
          onClick={() => setIsFilterOpen(isOpen => !isOpen)}
        >
          <FontAwesomeIcon icon={icon} size="xl" />
        </button>
        <h1 className={styles.title}>Search and Filter</h1>
        <Gallery projects={filteredItems} />
      </section>
    </>
  );
};

export default Home;

Home.getLayout = page => {
  return <PrimaryLayout title="Search and Filter">{page}</PrimaryLayout>;
};
