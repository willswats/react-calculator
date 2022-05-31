import { useState, useEffect, useCallback } from 'react';

import classes from './CalculatorButton.module.css';

const CalculatorButton = ({ dispatch, type, content }) => {
  const [pressed, setPressed] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === content) {
        setPressed(true);
        dispatch({ type, payload: { content } });
        setTimeout(() => {
          setPressed(false);
        }, 100);
      }
    },
    [dispatch, type, content]
  );

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <button
      className={`
      ${classes['calculator-btn']} 
      ${content === '0' ? classes['calculator-btn--large'] : ''}
      ${content === '/' ? classes['orange'] : ''}
      ${content === '*' ? classes['orange'] : ''}
      ${content === '-' ? classes['orange'] : ''}
      ${content === '+' ? classes['orange'] : ''}
      ${content === '=' ? classes['orange'] : ''}
      ${pressed ? classes['calculator-btn--pressed'] : ''} 
      `}
      onClick={() => dispatch({ type, payload: { content } })}
    >
      {content}
    </button>
  );
};

export default CalculatorButton;
