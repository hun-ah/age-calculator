import styles from './button.module.css';
import { ReactComponent as Arrow } from '../../assets/icon-arrow.svg';

const Button = () => {
  return (
    <button className={styles.button}>
      <Arrow className={styles.arrow} />
    </button>
  );
};

export default Button;
