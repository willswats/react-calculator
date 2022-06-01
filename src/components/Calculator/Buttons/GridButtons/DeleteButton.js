import { useState, useEffect, useCallback } from 'react';

import { ACTIONS } from '../../Calculator';

import classes from './CalculatorButton.module.css';

const DeleteButton = ({ dispatch }) => {
  const [pressed, setPressed] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Backspace') {
        setPressed(true);
        dispatch({ type: ACTIONS.DELETE_DIGIT });
      }
    },
    [dispatch]
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
      ${pressed ? classes['calculator-btn--pressed'] : ''} 
      `}
      onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
    >
      DEL
    </button>
  );
};

export default DeleteButton;
