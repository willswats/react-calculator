import classes from './CalculatorOutput.module.css';

const CalculatorOutput = ({ state }) => {
  return (
    <div className={classes['output']}>
      <div className={classes['output__previous']}>
        {state.previousOperand} {state.operation}
      </div>
      <div className={classes['output__current']}>{state.currentOperand}</div>
    </div>
  );
};

export default CalculatorOutput;
