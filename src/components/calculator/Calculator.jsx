import styles from './calculator.module.css';
import Input from '../input/Input';
import Button from '../button/Button';
import Yymmdd from '../date/Date';
import Confetti from 'react-confetti';
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
  const [initialRender, setInitialRender] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

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
    const currentDate = new Date();
    const newErrors = {};
    const maxDaysPerMonth = {
      1: 31, // January
      2: 28, // February
      3: 31, // March
      4: 30, // April
      5: 31, // May
      6: 30, // June
      7: 31, // July
      8: 31, // August
      9: 30, // September
      10: 31, // October
      11: 30, // November
      12: 31, // December
    };
    const isValidDay =
      inputValues.day >= 1 &&
      inputValues.day <= maxDaysPerMonth[Number(inputValues.month)];

    if (
      inputValues.year == currentDate.getFullYear() &&
      inputValues.month == currentDate.getMonth() + 1 &&
      inputValues.day > currentDate.getDate()
    ) {
      newErrors.day = 'Date must be current or in the past';
      setInputErrors(newErrors);
    }
    if (inputValues.month > currentDate.getMonth() + 1) {
      newErrors.month = 'Month must be current or in the past';
      setInputErrors(newErrors);
    }
    if (inputValues.month > 12 || inputValues.month < 1) {
      newErrors.month = 'Must be a valid month';
      setInputErrors(newErrors);
    } else if (inputValues.month && !isValidDay) {
      newErrors.day = `Day must be between 1 and ${
        maxDaysPerMonth[Number(inputValues.month)]
      } days`;
      setInputErrors(newErrors);
    }
    if (inputValues.year > currentDate.getFullYear()) {
      newErrors.year = 'Year must be current or in the past';
      newErrors.day = '';
      newErrors.month = '';
      setInputErrors(newErrors);
    }
    if (inputValues.year.length < 4) {
      newErrors.year = 'Must be 4 digits';
      setInputErrors(newErrors);
    }
    if (inputValues.day > 31 || inputValues.day < 1) {
      newErrors.day = 'Must be a valid day';
      setInputErrors(newErrors);
    }

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
      setInitialRender(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
      }, 6000);
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
          <Yymmdd
            key={item}
            text={item}
            number={numbers[item.slice(0, -1)]}
            initialRender={initialRender}
          />
        ))}
      </div>
      {formSubmitted && (
        // Show confetti when form is submitted
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </div>
  );
};

export default Calculator;
