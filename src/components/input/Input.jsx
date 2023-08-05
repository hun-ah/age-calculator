import styles from './input.module.css';

const Input = ({ label, placeholder, id, maxLength }) => {
  const handleKeyDown = (event) => {
    // Get the key code of the pressed key
    const keyCode = event.keyCode || event.which;

    // Check if the pressed key is a letter
    if ((keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122)) {
      event.preventDefault();
    }
  };
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={id}>
        {label.toUpperCase()}
      </label>
      <input
        className={styles.input}
        placeholder={placeholder}
        id={id}
        type='text'
        maxLength={maxLength}
        onKeyDown={handleKeyDown}
      ></input>
    </div>
  );
};

export default Input;
