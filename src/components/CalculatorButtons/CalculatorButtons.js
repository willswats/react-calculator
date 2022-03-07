import classes from './CalculatorButtons.module.css';

import { ACTIONS } from '../Calculator';

import CalculatorButton from './CalculatorButton';

const CalculatorButtons = ({ dispatch }) => {
  return (
    <>
      <CalculatorButton
        className={classes['span-two']}
        dispatch={dispatch}
        type={ACTIONS.ALL_CLEAR}
        button="AC"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.DELETE_DIGIT}
        button="DEL"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="/"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="7"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="8"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="9"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="*"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="4"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="5"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="6"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="-"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="1"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="2"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="3"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="+"
      />
      <CalculatorButton
        className={classes['span-two']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="0"
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="."
      />
      <CalculatorButton
        dispatch={dispatch}
        type={ACTIONS.EVALUATE}
        button="="
      />
    </>
  );
};

export default CalculatorButtons;
