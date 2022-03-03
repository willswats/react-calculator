import classes from './Calculator.module.css';
import Output from './Output';
import CalculatorButtons from './CalculatorButtons/CalculatorButtons';

const Calculator = ({ state, dispatch }) => {
  return (
    <div className={classes['calculator-grid']}>
      <Output state={state} />
      <CalculatorButtons dispatch={dispatch} />
    </div>
  );
};

export default Calculator;
