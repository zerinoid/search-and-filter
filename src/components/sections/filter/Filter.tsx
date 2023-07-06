import Link from 'next/link';
import styles from './Filter.module.css';
import { SetStateAction, Dispatch } from 'react';

export interface IFilter {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}

const Filter: React.FC<IFilter> = ({ isOpen, setIsOpen }) => {
  return (
    <nav className={styles.nav} style={{ left: isOpen ? '0' : '-100%' }}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Filter;
