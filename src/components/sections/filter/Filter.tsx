import Link from 'next/link';
import styles from './Filter.module.css';
import { SetStateAction, Dispatch } from 'react';
import SearchBox from '@/components/inputs/search-box/SearchBox';
import CheckboxToggle from '@/components/inputs/checkbox-toggle/CheckboxToggle';

export interface IFilter {
  isOpen: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  searchText: string;
  handleSearchTextChange: (text: string) => void;
  handleCheckboxChange: (
    filterName: string,
    value: string,
    checked: boolean
  ) => void;
  filters: Record<string, Set<string | number>>;
}

const Filter: React.FC<IFilter> = ({
  isOpen,
  setIsOpen,
  searchText,
  handleSearchTextChange,
  handleCheckboxChange,
  filters
}) => {
  return (
    <div className={styles.container} style={{ left: isOpen ? '0' : '-100%' }}>
      <div className={styles.input}>
        <SearchBox value={searchText} onChange={handleSearchTextChange} />
      </div>

      <CheckboxToggle
        value="planning"
        label="Planning"
        checked={filters.status.has('planning')}
        onChange={checked =>
          handleCheckboxChange('status', 'planning', checked)
        }
      />

      <CheckboxToggle
        value="inprogress"
        label="In Progress"
        checked={filters.status.has('inprogress')}
        onChange={checked =>
          handleCheckboxChange('status', 'inprogress', checked)
        }
      />

      <CheckboxToggle
        value="done"
        label="Done"
        checked={filters.status.has('done')}
        onChange={checked => handleCheckboxChange('status', 'done', checked)}
      />
    </div>
  );
};

export default Filter;
