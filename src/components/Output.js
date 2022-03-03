import classes from './Output.module.css';

const Output = ({ state }) => {
  return (
    <div className={classes.output}>
      <div className={classes['previous-operand']}>
        {state.previousOperand} {state.operation}
      </div>
      <div className={classes['current-operand']}>{state.currentOperand}</div>
    </div>
  );
};

export default Output;
