import styles from './date.module.css';

const Date = ({ text, number }) => {
  return (
    <div className={styles.container}>
      <span className={styles.number}>{number ? number : '- -'}</span>
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default Date;
