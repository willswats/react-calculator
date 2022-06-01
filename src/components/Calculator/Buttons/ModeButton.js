import { useState, useEffect, useCallback } from 'react';

import classes from './ModeButton.module.css';

import { MODES } from '../Calculator';

const CalculatorModeButton = ({ mode, setMode }) => {
  const [pressed, setPressed] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'ArrowLeft') {
        setPressed(true);
        setMode(MODES.CALCULATOR);
      } else if (event.key === 'ArrowRight') {
        setPressed(true);
        setMode(MODES.HISTORY);
      }
    },
    [setMode]
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

  const clickHandler = () => {
    if (mode === MODES.HISTORY) {
      setMode(MODES.CALCULATOR);
    }

    if (mode === MODES.CALCULATOR) {
      setMode(MODES.HISTORY);
    }
  };

  return (
    <button
      className={`
    ${classes['mode-btn']}
    ${pressed ? classes['mode-btn--pressed'] : ''} 
    `}
      onClick={clickHandler}
    >
      {mode === MODES.CALCULATOR && <>History</>}
      {mode === MODES.HISTORY && <>Calculator</>}
    </button>
  );
};

export default CalculatorModeButton;
