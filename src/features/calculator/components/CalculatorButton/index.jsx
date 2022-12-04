import { useKeyboard } from 'features/calculator';

import styles from './styles.module.css';

export const CalculatorButton = ({
  shortcut,
  content,
  dispatch,
  dispatchType,
}) => {
  const pressed = useKeyboard(shortcut, dispatch, dispatchType, { content });

  return (
    <button
      className={`
      ${styles['calculator-btn']} 
      ${
        content === '0' || content === 'AC'
          ? styles['calculator-btn--large']
          : ''
      }
      ${pressed ? styles['calculator-btn--pressed'] : ''} 
      ${
        content === '/' ||
        content === '*' ||
        content === '-' ||
        content === '+' ||
        content === '='
          ? styles['orange']
          : ''
      }
      ${
        (content === '/' ||
          content === '*' ||
          content === '-' ||
          content === '+' ||
          content === '=') &&
        pressed
          ? styles['orange--pressed']
          : ''
      } 
      `}
      onClick={() => dispatch({ type: dispatchType, payload: { content } })}
    >
      {content}
    </button>
  );
};
