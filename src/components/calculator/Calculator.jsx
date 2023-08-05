import styles from './calculator.module.css';
import Input from '../input/Input';
import Button from '../button/Button';
import Date from '../date/Date';

const inputs = [
  {
    name: 'day',
    placeholder: 'DD',
    maxLength: '2',
  },
  {
    name: 'month',
    placeholder: 'MM',
    maxLength: '2',
  },
  {
    name: 'year',
    placeholder: 'YYYY',
    maxLength: '4',
  },
];

const ddmmyy = ['years', 'months', 'days'];

const Calculator = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        {inputs.map((input) => (
          <Input
            key={input.name}
            label={input.name}
            placeholder={input.placeholder}
            id={input.name}
            maxLength={input.maxLength}
          />
        ))}
      </form>
      <div className={styles.dividerContainer}>
        <div className={styles.divider}></div>
        <Button />
      </div>
      <div className={styles.textContainer}>
        {ddmmyy.map((item) => (
          <Date key={item} text={item} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
