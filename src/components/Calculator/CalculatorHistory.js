import classes from './CalculatorHistory.module.css';

const CalculatorHistory = ({ state }) => {
  return (
    <ul className={classes['history']}>
      {state.history.map(
        ({ firstOperands, secondOperands, operation, evaluation, key }) => (
          <li className={classes['history__item']} key={key}>
            <div className={classes['history__operands']}>
              {`${firstOperands} ${operation} ${secondOperands}`}
            </div>
            <div className={classes['history__evaluation']}>{evaluation}</div>
          </li>
        )
      )}
    </ul>
  );
};

export default CalculatorHistory;
