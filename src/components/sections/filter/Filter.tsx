import styles from './Filter.module.css';
import SearchBox from '@/components/inputs/search-box/SearchBox';
import CheckboxToggle from '@/components/inputs/checkbox-toggle/CheckboxToggle';
import { filterData } from './Filter.data';

export interface IFilter {
  searchText: string;
  handleSearchTextChange: (text: string) => void;
  handleCheckboxChange: (
    filterName: string,
    value: string | number,
    checked: boolean
  ) => void;
  filtersState: Record<string, Set<string | number>>;
}

const Filter: React.FC<IFilter> = ({
  searchText,
  handleSearchTextChange,
  handleCheckboxChange,
  filtersState
}) => {
  const filters = filterData.base;
  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <SearchBox value={searchText} onChange={handleSearchTextChange} />
      </div>
      {filters.map(filterGroup => (
        <div key={filterGroup.groupName}>
          <p>{filterGroup.groupName}</p>
          {filterGroup.filters.map(filter => (
            <CheckboxToggle
              key={filter.value + 'a'}
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
