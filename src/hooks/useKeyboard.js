import { useState, useEffect, useCallback } from 'react';

const useKeyboard = (
  shortcut,
  dispatch,
  dispatchType,
  payload = null,
  repeat = true
) => {
  const [pressed, setPressed] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (repeat === true) {
        if (event.key === shortcut) {
          setPressed(true);
          dispatch({ type: dispatchType, payload: payload });
        }
      } else if (repeat === false) {
        if (event.key === shortcut && event.repeat === false) {
          setPressed(true);
          dispatch({ type: dispatchType, payload: payload });
        }
      }
    },
    [shortcut, dispatch, dispatchType, payload, repeat]
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
