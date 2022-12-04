// Components
import { CalculatorButton } from 'features/calculator';

// Globals
import { ACTIONS } from 'features/calculator';

import styles from './styles.module.css';

export const CalculatorGrid = ({ dispatch }) => {
  return (
    <div className={styles['grid']}>
      <CalculatorButton
        shortcut="Escape"
        content="AC"
        dispatch={dispatch}
        dispatchType={ACTIONS.ALL_CLEAR}
      />
      <CalculatorButton
        shortcut="Backspace"
        content="DEL"
        dispatch={dispatch}
        dispatchType={ACTIONS.DELETE_DIGIT}
      />
      <CalculatorButton
        shortcut="/"
        content="/"
        dispatch={dispatch}
        dispatchType={ACTIONS.SELECT_OPERATION}
      />
      <CalculatorButton
        shortcut="7"
        content="7"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        shortcut="8"
        content="8"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        shortcut="9"
        content="9"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        shortcut="*"
        content="*"
        dispatch={dispatch}
        dispatchType={ACTIONS.SELECT_OPERATION}
      />
      <CalculatorButton
        shortcut="4"
        content="4"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        shortcut="5"
        content="5"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        shortcut="6"
        content="6"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        shortcut="-"
        content="-"
        dispatch={dispatch}
        dispatchType={ACTIONS.SELECT_OPERATION}
      />
      <CalculatorButton
        shortcut="1"
        content="1"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />

      <CalculatorButton
        shortcut="2"
        content="2"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />

      <CalculatorButton
        shortcut="3"
        content="3"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        shortcut="+"
        content="+"
        dispatch={dispatch}
        dispatchType={ACTIONS.SELECT_OPERATION}
      />
      <CalculatorButton
        shortcut="0"
        content="0"
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />

      <CalculatorButton
        shortcut="."
        content="."
        dispatch={dispatch}
        dispatchType={ACTIONS.ADD_DIGIT}
      />
      <CalculatorButton
        shortcut="="
        content="="
        dispatch={dispatch}
        dispatchType={ACTIONS.EVALUATE}
      />
    </div>
  );
};
