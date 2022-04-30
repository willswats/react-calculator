import { useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';

import CalculatorModeButton from './Buttons/CalculatorModeButton';
import CalculatorHistory from './CalculatorHistory';
import CalculatorOutput from './CalculatorOutput';
import CalculatorGrid from './CalculatorGrid';

import evaluate from '../../helpers/evaluate';

import classes from './Calculator.module.css';

export const MODES = {
  CALCULATOR: 'calculator',
  HISTORY: 'history',
};

export const ACTIONS = {
  ADD_DIGIT: 'add-digit',
  SELECT_OPERATION: 'select-operation',
  ALL_CLEAR: 'all-clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
};

const initialState = {
  currentOperand: '0',
  previousOperand: '',
  operation: '',
  overwrite: false,
  history: [],
};

const reducer = (state, { type, payload }) => {
  const selectedButton = payload.button;

  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // Prevent adding to evaluated calculation
      if (state.overwrite)
        return {
          ...state,
          currentOperand: payload.button,
          overwrite: false,
        };
      // Do not allow more than one '.'
      if (selectedButton === '.' && state.currentOperand.includes('.'))
        return state;
      // No more than one '0' if already '0'
      if (selectedButton === '0' && state.currentOperand === '0') return state;
      // Override existing '0' if greater than '0'
      if (selectedButton > '0' && state.currentOperand === '0')
        return {
          ...state,
          currentOperand: `${selectedButton}`,
        };
      // No more than 9 numbers in length
      if (state.currentOperand.length >= 9) return state;
      else {
        return {
          ...state,
          currentOperand: `${state.currentOperand}${selectedButton}`,
        };
      }

    case ACTIONS.SELECT_OPERATION:
      if (
        state.currentOperand === initialState.currentOperand &&
        state.previousOperand === initialState.previousOperand
      )
        return state;
      // Allows changing of operation mid-calculation
      if (state.currentOperand === '')
        return {
          ...state,
          operation: selectedButton,
        };
      // Set previousOperand if none
      if (state.previousOperand === initialState.previousOperand)
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: selectedButton,
          currentOperand: '',
        };
      // Calculate if clicked on with previousOperand and currentOperand existing
      else {
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: selectedButton,
          currentOperand: '',
        };
      }

    case ACTIONS.ALL_CLEAR:
      return {
        ...initialState,
        history: state.history,
      };

    case ACTIONS.DELETE_DIGIT:
      // Prevent DEL on evaluated calculations
      if (state.overwrite)
        return {
          ...state,
          currentOperand: initialState.currentOperand,
          overwrite: false,
        };
      // Do nothing if no currentOperand
      if (state.currentOperand === initialState.currentOperand) return state;
      // Set back to initialState if 1 in length
      if (state.currentOperand.length === 1)
        return { ...state, currentOperand: initialState.currentOperand };
      else {
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        };
      }

    case ACTIONS.EVALUATE:
      if (
        state.currentOperand === '' ||
        state.previousOperand === initialState.previousOperand ||
        state.operation === initialState.operation
      )
        return state;
      else {
        const evaluation = evaluate(state);
        return {
          ...state,
          history: [
            {
              key: uuid(),
              firstOperands: state.previousOperand,
              secondOperands: state.currentOperand,
              operation: state.operation,
              evaluation: evaluation,
            },
            ...state.history,
          ],
          currentOperand: evaluation,
          previousOperand: initialState.previousOperand,
          operation: initialState.operation,
          overwrite: true,
        };
      }

    default:
      return state;
  }
};

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [mode, setMode] = useState(MODES.CALCULATOR);

  return (
    <>
      <div className={classes['calculator']}>
        <CalculatorModeButton mode={mode} setMode={setMode} />
        {mode === MODES.HISTORY && <CalculatorHistory state={state} />}
        {mode === MODES.CALCULATOR && (
          <>
            <CalculatorOutput state={state} />
            <CalculatorGrid dispatch={dispatch} />
          </>
        )}
      </div>
    </>
  );
};

export default Calculator;
