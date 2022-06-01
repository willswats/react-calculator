import { useState, useEffect, useCallback } from 'react';

const useKeyboard = (dispatch, dispatchType, content) => {
  const [pressed, setPressed] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === content) {
        setPressed(true);
        dispatch({ type: dispatchType, payload: { content } });
      }
    },
    [dispatch, dispatchType, content]
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
