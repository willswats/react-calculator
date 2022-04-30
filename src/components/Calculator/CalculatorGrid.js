import { ACTIONS } from './Calculator';

import CalculatorButton from './Buttons/CalculatorButton';

import classes from './CalculatorGrid.module.css';

const CalculatorGrid = ({ dispatch }) => {
  return (
    <div className={classes['grid']}>
      <CalculatorButton
        className={classes['grid__digit-btn'] + ' ' + classes['grid__span-two']}
        dispatch={dispatch}
        type={ACTIONS.ALL_CLEAR}
        button="AC"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.DELETE_DIGIT}
        button="DEL"
      />
      <CalculatorButton
        className={classes['grid__operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="/"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="7"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="8"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="9"
      />
      <CalculatorButton
        className={classes['grid__operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="*"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="4"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="5"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="6"
      />
      <CalculatorButton
        className={classes['grid__operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="-"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="1"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="2"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="3"
      />
      <CalculatorButton
        className={classes['grid__operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.SELECT_OPERATION}
        button="+"
      />
      <CalculatorButton
        className={classes['grid__digit-btn'] + ' ' + classes['grid__span-two']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="0"
      />
      <CalculatorButton
        className={classes['grid__digit-btn']}
        dispatch={dispatch}
        type={ACTIONS.ADD_DIGIT}
        button="."
      />
      <CalculatorButton
        className={classes['grid__operator-btn']}
        dispatch={dispatch}
        type={ACTIONS.EVALUATE}
        button="="
      />
    </div>
  );
};

export default CalculatorGrid;
