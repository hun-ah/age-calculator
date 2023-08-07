import styles from './calculator.module.css';
import Input from '../input/Input';
import Button from '../button/Button';
import Date from '../date/Date';
import { useState } from 'react';

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
  const [inputValues, setInputValues] = useState({
    day: '',
    month: '',
    year: '',
  });

  const handleInputChange = (name, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValues({ day: '', month: '', year: '' });
  };
  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          {inputs.map((input) => (
            <Input
              key={input.name}
              label={input.name}
              placeholder={input.placeholder}
              id={input.name}
              maxLength={input.maxLength}
              value={inputValues[input.name]}
              onInputChange={handleInputChange}
            />
          ))}
        </div>
        <div className={styles.dividerContainer}>
          <div className={styles.divider}></div>
          <Button />
        </div>
      </form>
      <div className={styles.textContainer}>
        {ddmmyy.map((item) => (
          <Date key={item} text={item} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
