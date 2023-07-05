import styles from './CheckboxToggle.module.css';

export interface ICheckboxToggle {
  label: string;
  checked: boolean;
  value: string;
  onChange: (checked: boolean) => void;
}

const CheckboxToggle: React.FC<ICheckboxToggle> = ({
  label,
  checked,
  onChange,
  value
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className={styles.container}>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          value={value}
        />
        {label}
      </label>
    </div>
  );
};

export default CheckboxToggle;
