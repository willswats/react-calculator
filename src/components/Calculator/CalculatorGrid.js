import ClearButton from './Buttons/GridButtons/ClearButton';
import DeleteButton from './Buttons/GridButtons/DeleteButton';
import CalculatorButton from './Buttons/GridButtons/CalculatorButton';

import { ACTIONS } from './Calculator';

import classes from './CalculatorGrid.module.css';

const CalculatorGrid = ({ dispatch }) => {
  return (
    <div className={classes['grid']}>
      <ClearButton dispatch={dispatch} />
      <DeleteButton dispatch={dispatch} />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        content="/"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="7"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="8"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="9"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        content="*"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="4"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="5"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="6"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        content="-"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="1"
      />

      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="2"
      />

      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="3"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        content="+"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="0"
      />

      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        content="."
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.EVALUATE}
        content="="
      />
    </div>
  );
};

export default CalculatorGrid;
