import classes from './CalculatorHistory.module.css';

import { ACTIONS } from './Calculator';

const CalculatorHistory = ({ state, dispatch }) => {
  return (
    <ul className={classes['history']}>
      {state.history.map(
        ({ firstOperand, secondOperand, operation, evaluation }, index) => (
          <button
            onClick={() =>
              dispatch({
                type: ACTIONS.SET_CALCULATION,
                payload: { firstOperand, secondOperand, operation, evaluation },
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
