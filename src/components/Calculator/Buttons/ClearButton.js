import { useEffect, useCallback } from 'react';

import { ACTIONS } from '../Calculator';

import classes from './ClearButton.module.css';

const ClearButton = ({ dispatch }) => {
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Delete') {
        dispatch({ type: ACTIONS.ALL_CLEAR });
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
      className={classes['clear-btn']}
      onClick={() => dispatch({ type: ACTIONS.ALL_CLEAR })}
    >
      AC
    </button>
  );
};

export default ClearButton;
