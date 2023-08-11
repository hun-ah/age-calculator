import styles from './date.module.css';
import Number from '../number/Number.jsx';

const Date = ({ text, number, initialRender }) => {
  return (
    <div className={styles.container}>
      <Number n={number} initialRender={initialRender} />
      <span className={styles.text}>
        {number === 1 ? text.slice(0, -1) : text}
      </span>
    </div>
  );
};

export default Date;
