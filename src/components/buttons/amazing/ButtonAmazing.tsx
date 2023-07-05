import styles from './ButtonAmazing.module.css';

export interface IButtonAmazing {
  label: string;
  primary?: boolean;
}

const ButtonAmazing: React.FC<IButtonAmazing> = ({
  label: sampleTextProp,
  primary
}) => {
  const mode = primary ? styles.primary : styles.secondary;

  return (
    <button className={`${styles.button} ${mode}`}>{sampleTextProp}</button>
  );
};

export default ButtonAmazing;
