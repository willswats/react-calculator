import { useState, useEffect, useCallback } from 'react';

import { ACTIONS } from '../../Calculator';

import classes from './CalculatorButton.module.css';

const ClearButton = ({ dispatch }) => {
  const [pressed, setPressed] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Delete') {
        setPressed(true);
        dispatch({ type: ACTIONS.ALL_CLEAR });
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
      ${classes['calculator-btn--large']}
      ${pressed ? classes['calculator-btn--pressed'] : ''} 
      `}
      onClick={() => dispatch({ type: ACTIONS.ALL_CLEAR })}
    >
      AC
    </button>
  );
};

export default ClearButton;
