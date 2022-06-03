import classes from './CalculatorHistory.module.css';

import { ACTIONS } from './Calculator';

import { useRef, useCallback, useEffect } from 'react';

const CalculatorHistory = ({ state, dispatch }) => {
  const buttonRefs = useRef([]);
  const counterRef = useRef(-1);

  const handleKeyPress = useCallback((event) => {
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
  }, []);

  useEffect(() => {
    // Attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      // Remove the event listener
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <ul className={classes['history']}>
      {state.history.map(
        ({ firstOperand, secondOperand, operation, evaluation }, index) => (
          <button
            ref={(element) => {
              buttonRefs.current.push(element);
            }}
            onClick={() =>
              dispatch({
                type: ACTIONS.SET_CALCULATION,
                payload: {
                  firstOperand,
                  secondOperand,
                  operation,
                  evaluation,
                },
              })
            }
            className={classes['history__btn']}
            key={index}
          >
            <div className={classes['history__operands']}>
              {`${firstOperand} ${operation} ${secondOperand}`}
            </div>
            <div className={classes['history__evaluation']}>{evaluation}</div>
          </button>
        )
      )}
    </ul>
  );
};

export default CalculatorHistory;
