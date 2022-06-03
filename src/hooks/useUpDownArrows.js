import { useRef, useCallback, useEffect } from 'react';

const useUpDownArrows = (buttonRefs) => {
  const counterRef = useRef(-1);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        if (
          buttonRefs.current[counterRef.current - 1] !== undefined &&
          buttonRefs.current[counterRef.current - 1] !== null
        ) {
          counterRef.current -= 1;
          buttonRefs.current[counterRef.current].focus();
        }
      }
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        if (
          buttonRefs.current[counterRef.current + 1] !== undefined &&
          buttonRefs.current[counterRef.current + 1] !== null
        ) {
          counterRef.current += 1;
          buttonRefs.current[counterRef.current].focus();
        }
      }
    },
    [buttonRefs]
  );

  useEffect(() => {
    // Attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      // Remove the event listener
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);
};

export default useUpDownArrows;
