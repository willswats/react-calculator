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
        content="/"
        dispatch={dispatch}
        dispatchType={ACTIONS.SELECT_OPERATION}
      />
      <CalculatorButton
        content="7"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
        content="8"
      />
      <CalculatorButton
        content="9"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        content="*"
        dispatch={dispatch}
        dispatchType={ACTIONS.SELECT_OPERATION}
      />
      <CalculatorButton
        content="4"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        content="5"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        content="6"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        content="-"
        dispatch={dispatch}
        dispatchType={ACTIONS.SELECT_OPERATION}
      />
      <CalculatorButton
        content="1"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />

      <CalculatorButton
        content="2"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />

      <CalculatorButton
        content="3"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        content="+"
        dispatch={dispatch}
        dispatchType={ACTIONS.SELECT_OPERATION}
      />
      <CalculatorButton
        content="0"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />

      <CalculatorButton
        content="."
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        content="="
        dispatch={dispatch}
        dispatchType={ACTIONS.EVALUATE}
      />
    </div>
  );
};

export default CalculatorGrid;
