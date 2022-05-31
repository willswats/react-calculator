import { useEffect, useCallback } from 'react';

import { ACTIONS } from '../Calculator';

import classes from './DeleteButton.module.css';

const DeleteButton = ({ dispatch }) => {
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'Backspace') {
        dispatch({ type: ACTIONS.DELETE_DIGIT });
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
      className={classes['delete-btn']}
      onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
    >
      DEL
    </button>
  );
};

export default DeleteButton;
