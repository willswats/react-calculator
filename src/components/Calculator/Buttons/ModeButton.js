import { useEffect, useCallback } from 'react';

import classes from './ModeButton.module.css';

import { MODES } from '../Calculator';

const CalculatorModeButton = ({ mode, setMode }) => {
  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'ArrowLeft') {
        setMode(MODES.CALCULATOR);
      } else if (event.key === 'ArrowRight') {
        setMode(MODES.HISTORY);
      }
    },
    [setMode]
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

export default CalculatorModeButton;
