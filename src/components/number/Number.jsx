import { useSpring, animated } from 'react-spring';
import styles from './number.module.css';

const Number = ({ n, initialRender }) => {
  const { number } = useSpring({
    from: { number: initialRender ? '- -' : parseFloat(n) || 0 },
    to: { number: parseFloat(n) || 0 },
    config: { mass: 1, tension: 20, friction: 10 },
  });
  return (
    <animated.span className={styles.number}>
      {number.to((n) => {
        if (initialRender) {
          return '- -';
        } else if (isNaN(parseFloat(n))) {
          return '- -';
        } else if (parseFloat(n) % 1 === 0) {
          return n.toFixed(0);
        } else {
          return parseFloat(n).toFixed(0);
        }
      })}
    </animated.span>
  );
};

export default Number;
