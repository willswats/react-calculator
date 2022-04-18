import classes from './History.module.css';

import { formatOperand } from '../../../helpers/formatOperand';

const History = ({ state }) => {
  return (
    <ul className={classes.history}>
      {state.history.map(
        ({ firstOperands, secondOperands, operation, evaluation, key }) => (
          <li className={classes['history-item']} key={key}>
            <div className={classes['operands']}>
              {`${formatOperand(firstOperands)} ${operation} ${formatOperand(
                secondOperands
              )}`}
            </div>
            <div className={classes['evaluation']}>
              {formatOperand(evaluation)}
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default History;
