import Output from './Output/Output';
import CalculatorButtons from './CalculatorButtons/CalculatorButtons';

import classes from './Calculator.module.css';

const Calculator = ({ state, dispatch }) => {
  return (
    <div className={classes['calculator-grid']}>
      <Output state={state} />
      <CalculatorButtons dispatch={dispatch} />
    </div>
  );
};

export default Calculator;
