import { useState, useEffect, useCallback } from 'react';

import { MODES } from '../components/Calculator/Calculator';

const useKeyboardMode = (setMode) => {
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

  return pressed;
};

export default useKeyboardMode;
