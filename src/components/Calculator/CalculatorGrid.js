import DigitButton from './Buttons/GridButtons/DigitButton';
import OperatorButton from './Buttons/GridButtons/OperatorButton';
import ClearButton from './Buttons/GridButtons/ClearButton';
import DeleteButton from './Buttons/GridButtons/DeleteButton';
import EvaluateButton from './Buttons/GridButtons/EvaluateButton';

import classes from './CalculatorGrid.module.css';

const CalculatorGrid = ({ dispatch }) => {
  return (
    <div className={classes['grid']}>
      <ClearButton dispatch={dispatch} />
      <DeleteButton dispatch={dispatch} />
      <OperatorButton dispatch={dispatch} operator="/" />
      <DigitButton dispatch={dispatch} digit="7" />
      <DigitButton dispatch={dispatch} digit="8" />
      <DigitButton dispatch={dispatch} digit="9" />
      <OperatorButton dispatch={dispatch} operator="*" />
      <DigitButton dispatch={dispatch} digit="4" />
      <DigitButton dispatch={dispatch} digit="5" />
      <DigitButton dispatch={dispatch} digit="6" />
      <OperatorButton dispatch={dispatch} operator="-" />
      <DigitButton dispatch={dispatch} digit="1" />
      <DigitButton dispatch={dispatch} digit="2" />
      <DigitButton dispatch={dispatch} digit="3" />
      <OperatorButton dispatch={dispatch} operator="+" />
      <DigitButton dispatch={dispatch} digit="0" />
      <DigitButton dispatch={dispatch} digit="." />
      <EvaluateButton dispatch={dispatch} />
    </div>
  );
};

export default CalculatorGrid;
