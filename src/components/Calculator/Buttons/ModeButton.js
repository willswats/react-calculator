import { useEffect, useCallback } from 'react';

import classes from './ModeButton.module.css';

import { MODES } from '../Calculator';

const ModeButton = ({ mode, setMode }) => {
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'm') {
        if (mode === MODES.CALCULATOR) {
          setMode(MODES.HISTORY);
        } else if (mode === MODES.HISTORY) {
          setMode(MODES.CALCULATOR);
        }
      }
    },
    [mode, setMode]
  );

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const clickHandler = () => {
    if (mode === MODES.HISTORY) {
      setMode(MODES.CALCULATOR);
    }

    if (mode === MODES.CALCULATOR) {
      setMode(MODES.HISTORY);
    }
  };

  return (
    <button className={classes['mode-btn']} onClick={clickHandler}>
      {mode === MODES.CALCULATOR && <>History</>}
      {mode === MODES.HISTORY && <>Calculator</>}
    </button>
  );
};

export default ModeButton;
