import classes from './CalculatorHistory.module.css';

import { formatOperand } from '../../helpers/formatOperand';

const CalculatorHistory = ({ state }) => {
  return (
    <ul className={classes['history']}>
      {state.history.map(
        ({ firstOperands, secondOperands, operation, evaluation, key }) => (
          <li className={classes['history__item']} key={key}>
            <div className={classes['history__operands']}>
              {`${formatOperand(firstOperands)} ${operation} ${formatOperand(
                secondOperands
              )}`}
            </div>
            <div className={classes['history__evaluation']}>
              {formatOperand(evaluation)}
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default CalculatorHistory;
