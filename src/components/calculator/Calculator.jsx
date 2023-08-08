import styles from './calculator.module.css';
import Input from '../input/Input';
import Button from '../button/Button';
import Yymmdd from '../date/Date';
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
  const [numbers, setNumbers] = useState({
    day: '',
    month: '',
    year: '',
  });
  const [inputErrors, setInputErrors] = useState({});

  const handleInputChange = (name, value) => {
    setInputValues((prevInputValues) => ({
      ...prevInputValues,
      [name]: value,
    }));
  };

  const calculateAge = (dateObj) => {
    const day = parseInt(dateObj.day);
    const month = parseInt(dateObj.month) - 1;
    const year = parseInt(dateObj.year);

    const inputDateObj = new Date(year, month, day);
    const currentDate = new Date();

    let years = currentDate.getFullYear() - inputDateObj.getFullYear();
    let months = currentDate.getMonth() - inputDateObj.getMonth();
    let days = currentDate.getDate() - inputDateObj.getDate();

    if (days < 0) {
      months--;
      const lastMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      days += lastMonthDate.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setNumbers({
      day: days,
      month: months,
      year: years,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    // check for empty field
    for (const input of inputs) {
      if (!inputValues[input.name]) {
        newErrors[input.name] = 'This field is required';
      }
    }
    setInputErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setInputValues({ day: '', month: '', year: '' });
      calculateAge(inputValues);
    }
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
              error={inputErrors[input.name]}
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
          <Yymmdd key={item} text={item} number={numbers[item.slice(0, -1)]} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
