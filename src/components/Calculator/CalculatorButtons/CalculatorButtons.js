import classes from './CalculatorButtons.module.css';

import { ACTIONS } from '../../Calculator/Calculator';

import CalculatorButton from './CalculatorButton';

const CalculatorButtons = ({ dispatch }) => {
  return (
    <div className={classes['calculator-buttons']}>
      <CalculatorButton
        className={classes['digit-btn'] + ' ' + classes['span-two']}
        dispatch={dispatch}
        type={ACTIONS.ALL_CLEAR}
        button="AC"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.DELETE_DIGIT}
        button="DEL"
      />
      <CalculatorButton
        className={classes['operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="/"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="7"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="8"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="9"
      />
      <CalculatorButton
        className={classes['operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="*"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="4"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="5"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="6"
      />
      <CalculatorButton
        className={classes['operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="-"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="1"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="2"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="3"
      />
      <CalculatorButton
        className={classes['operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="+"
      />
      <CalculatorButton
        className={classes['digit-btn'] + ' ' + classes['span-two']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="0"
      />
      <CalculatorButton
        className={classes['digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="."
      />
      <CalculatorButton
        className={classes['operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.EVALUATE}
        button="="
      />
    </div>
  );
};

export default CalculatorButtons;
