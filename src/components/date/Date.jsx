import styles from './date.module.css';

const Date = ({ text, number }) => {
  const display = number || number === 0 ? number : '- -';
  return (
    <div className={styles.container}>
      <span className={styles.number}>{display}</span>
      <span className={styles.text}>
        {number === 1 ? text.slice(0, -1) : text}
      </span>
    </div>
  );
};

export default Date;
