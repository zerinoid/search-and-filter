import styles from './SearchBox.module.css';

export interface ISearchBox {
  value: string;
  onChange: (value: string) => void;
}

const SearchBox: React.FC<ISearchBox> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search by name"
      />
    </div>
  );
};

export default SearchBox;
