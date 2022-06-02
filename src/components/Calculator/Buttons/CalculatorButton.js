import useKeyboard from '../../../hooks/useKeyboard';

import classes from './CalculatorButton.module.css';

const CalculatorButton = ({ shortcut, content, dispatch, dispatchType }) => {
  const pressed = useKeyboard(shortcut, dispatch, dispatchType, { content });

  return (
    <button
      className={`
      ${classes['calculator-btn']} 
      ${
        content === '0' || content === 'AC'
          ? classes['calculator-btn--large']
          : ''
      }
      ${pressed ? classes['calculator-btn--pressed'] : ''} 
      ${
        content === '/' ||
        content === '*' ||
        content === '-' ||
        content === '+' ||
        content === '='
          ? classes['orange']
          : ''
      }
      ${
        (content === '/' ||
          content === '*' ||
          content === '-' ||
          content === '+' ||
          content === '=') &&
        pressed
          ? classes['orange--pressed']
          : ''
      } 
      `}
      onClick={() => dispatch({ type: dispatchType, payload: { content } })}
    >
      {content}
    </button>
  );
};

export default CalculatorButton;
