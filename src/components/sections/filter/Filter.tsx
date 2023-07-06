import Link from 'next/link';
import styles from './Filter.module.css';
import { SetStateAction, Dispatch } from 'react';
import SearchBox from '@/components/inputs/search-box/SearchBox';

export interface IFilter {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  searchText: string;
  handleSearchTextChange: (text: string) => void;
}

const Filter: React.FC<IFilter> = ({
  isOpen,
  setIsOpen,
  searchText,
  handleSearchTextChange
}) => {
  return (
    <nav className={styles.nav} style={{ left: isOpen ? '0' : '-100%' }}>
      <SearchBox value={searchText} onChange={handleSearchTextChange} />
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Filter;
