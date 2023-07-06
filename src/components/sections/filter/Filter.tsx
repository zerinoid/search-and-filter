import Link from 'next/link';
import styles from './Filter.module.css';

export interface IFilter {
  sampleTextProp: string;
}

const Filter: React.FC<IFilter> = ({ sampleTextProp }) => {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Filter;
