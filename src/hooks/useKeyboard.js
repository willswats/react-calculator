import { useState, useEffect, useCallback } from 'react';

const useKeyboard = (shortcut, dispatch, dispatchType, payload = null) => {
  const [pressed, setPressed] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === shortcut) {
        setPressed(true);
        dispatch({ type: dispatchType, payload: payload });
      }
    },
    [dispatch, dispatchType, payload, shortcut]
  );

  useEffect(() => {
    // Set timer
    const timer = setTimeout(() => {
      setPressed(false);
    }, 100);

    // Attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      // Remove the event listener
      document.removeEventListener('keydown', handleKeyPress);
      // Clear timer
      clearTimeout(timer);
    };
  }, [handleKeyPress, pressed]);

  return pressed;
};
export default useKeyboard;
