import useKeyboard from '../../../../hooks/useKeyboard';

import classes from './CalculatorButton.module.css';

const CalculatorButton = ({ dispatch, dispatchType, content }) => {
  const pressed = useKeyboard(dispatch, dispatchType, content);

  return (
    <button
      className={`
      ${classes['calculator-btn']} 
      ${content === '0' ? classes['calculator-btn--large'] : ''}
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
      onClick={() => dispatch({ dispatchType, payload: { content } })}
    >
      {content}
    </button>
  );
};

export default CalculatorButton;
