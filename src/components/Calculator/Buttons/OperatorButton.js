import { useEffect, useCallback } from 'react';

import { ACTIONS } from '../Calculator';

import classes from './OperatorButton.module.css';

const OperatorButton = ({ dispatch, operator }) => {
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === operator) {
        dispatch({ type: ACTIONS.SELECT_OPERATION, payload: { operator } });
      }
    },
    [operator, dispatch]
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
      className={classes['operator-btn']}
      onClick={() =>
        dispatch({ type: ACTIONS.SELECT_OPERATION, payload: { operator } })
      }
    >
      {operator}
    </button>
  );
};

export default OperatorButton;
