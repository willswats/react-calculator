import { useEffect, useCallback } from 'react';

import { ACTIONS } from '../Calculator';

import classes from './EvaluateButton.module.css';

const EvaluateButton = ({ dispatch }) => {
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === '=') {
        dispatch({ type: ACTIONS.EVALUATE });
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
      className={classes['evaluate-btn']}
      onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
    >
      =
    </button>
  );
};

export default EvaluateButton;
