import classes from './CalculatorHistory.module.css';

const CalculatorHistory = ({ state }) => {
  return (
    <ul className={classes['history']}>
      {state.history.map(
        ({ firstOperand, secondOperand, operation, evaluation }, index) => (
          <li className={classes['history__item']} key={index}>
            <div className={classes['history__operands']}>
              {`${firstOperand} ${operation} ${secondOperand}`}
            </div>
            <div className={classes['history__evaluation']}>{evaluation}</div>
          </li>
        )
      )}
    </ul>
  );
};

export default CalculatorHistory;
