import { useState, useEffect, useCallback } from 'react';

import { ACTIONS } from '../../Calculator';

import classes from './CalculatorButton.module.css';

const DeleteButton = ({ dispatch }) => {
  const [pressed, setPressed] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Backspace' || event.key === 'Delete') {
        setPressed(true);
        dispatch({ type: ACTIONS.DELETE_DIGIT });
        setTimeout(() => {
          setPressed(false);
        }, 100);
      }
    },
    [dispatch]
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
      ${pressed ? classes['calculator-btn--pressed'] : ''} 
      `}
      onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
    >
      DEL
    </button>
  );
};

export default DeleteButton;
