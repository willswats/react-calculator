import { useEffect, useCallback } from 'react';

import { ACTIONS } from '../Calculator';

import classes from './DigitButton.module.css';

const DigitButton = ({ dispatch, digit }) => {
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === digit) {
        dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } });
      }
    },
    [digit, dispatch]
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
      className={`${classes['digit-btn']} ${
        digit === '0' ? classes['digit-btn--span'] : ''
      }  `}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
