import styles from './CheckboxToggle.module.scss';

export interface ICheckboxToggle {
  label: string;
  checked: boolean;
  value: string | number;
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
      <input
        id={value}
        className={styles.input}
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        value={value}
      />
      <label htmlFor={value} className={styles.label}>
        {label}
      </label>
    </div>
  );
};

export default CheckboxToggle;
