import Link from 'next/link';
import styles from './Filter.module.css';
import { SetStateAction, Dispatch } from 'react';
import SearchBox from '@/components/inputs/search-box/SearchBox';
import CheckboxToggle from '@/components/inputs/checkbox-toggle/CheckboxToggle';
import { filterData } from './Filter.data';

export interface IFilter {
  isOpen: boolean;
  searchText: string;
  handleSearchTextChange: (text: string) => void;
  handleCheckboxChange: (
    filterName: string,
    value: string,
    checked: boolean
  ) => void;
  filtersState: Record<string, Set<string | number>>;
}

const Filter: React.FC<IFilter> = ({
  isOpen,
  searchText,
  handleSearchTextChange,
  handleCheckboxChange,
  filtersState
}) => {
  const filters = filterData.base;
  return (
    <div className={styles.container} style={{ left: isOpen ? '0' : '-100%' }}>
      <div className={styles.input}>
        <SearchBox value={searchText} onChange={handleSearchTextChange} />
      </div>
      {filters.map(filterGroup => (
        <div key={filterGroup.groupName}>
          <p>{filterGroup.groupName}</p>
          {filterGroup.filters.map(filter => (
            <CheckboxToggle
              key={filter.value}
              value={filter.value}
              label={filter.label}
              checked={filtersState[filterGroup.groupName].has(filter.value)}
              onChange={checked =>
                handleCheckboxChange(
                  filterGroup.groupName,
                  filter.value,
                  checked
                )
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
