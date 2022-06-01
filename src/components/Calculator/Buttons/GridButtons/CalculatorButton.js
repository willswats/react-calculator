import { useState, useEffect, useCallback } from 'react';

import classes from './CalculatorButton.module.css';

const CalculatorButton = ({ dispatch, type, content }) => {
  const [pressed, setPressed] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === content) {
        setPressed(true);
        dispatch({ type, payload: { content } });
      }
    },
    [dispatch, type, content]
  );

  useEffect(() => {
    // Set pressed timer
    const timer = setTimeout(() => {
      setPressed(false);
    }, 100);

    // Attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      // Remove the event listener
      document.removeEventListener('keydown', handleKeyPress);
      // Clear pressed timer
      clearTimeout(timer);
    };
  }, [handleKeyPress, pressed]);

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
      onClick={() => dispatch({ type, payload: { content } })}
    >
      {content}
    </button>
  );
};

export default CalculatorButton;
