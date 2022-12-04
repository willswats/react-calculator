import { useRef } from 'react';

// Globals
import { ACTIONS } from 'features/calculator';

// Hooks
import { useUpDownArrows } from 'features/calculator';

import styles from './styles.module.css';

export const CalculatorHistory = ({ state, dispatch }) => {
  const buttonRefs = useRef([]);
  useUpDownArrows(buttonRefs);

  return (
    <ul className={styles['history']}>
      {state.history.map(
        ({ firstOperand, secondOperand, operation, evaluation }, index) => (
          <button
            ref={(element) => {
              if (element !== null && !buttonRefs.current.includes(element)) {
                buttonRefs.current.push(element);
              }
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
            className={styles['history__btn']}
            key={index}
          >
            <div className={styles['history__operands']}>
              {`${firstOperand} ${operation} ${secondOperand}`}
            </div>
            <div className={styles['history__evaluation']}>{evaluation}</div>
          </button>
        )
      )}
    </ul>
  );
};
