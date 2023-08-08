import styles from './input.module.css';

const Input = ({
  label,
  placeholder,
  id,
  maxLength,
  value,
  onInputChange,
  error,
}) => {
  const inputClassNames = `${styles.input} ${error ? styles.errBorder : ''}`;
  const labelClassNames = `${styles.label} ${error ? styles.errLabel : ''}`;
  const handleKeyDown = (event) => {
    // Get the key code of the pressed key
    const keyCode = event.keyCode || event.which;

    // Check if the pressed key is a letter
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      event.preventDefault();
    }
  };

  const handleInputChange = (event) => {
    const { value } = event.target;
    onInputChange(id, value);
  };

  return (
    <div className={styles.container}>
      <label className={labelClassNames} htmlFor={id}>
        {label.toUpperCase()}
      </label>
      <input
        type='text'
        id={id}
        name={id}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        className={inputClassNames}
        onKeyDown={handleKeyDown}
        onChange={handleInputChange}
      ></input>
      {error && <span className={styles.errText}>{error}</span>}
    </div>
  );
};

export default Input;
