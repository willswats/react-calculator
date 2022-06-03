import classes from './CalculatorHistory.module.css';

import { ACTIONS } from './Calculator';

import useUpDownArrows from '../../hooks/useUpDownArrows';

import { useRef } from 'react';

const CalculatorHistory = ({ state, dispatch }) => {
  const buttonRefs = useRef([]);
  useUpDownArrows(buttonRefs);

  return (
    <ul className={classes['history']}>
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
