import { useReducer, useState } from 'react';
import { v4 as uuid } from 'uuid';

import ModeButton from './Buttons/ModeButton';
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
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // Prevent adding to evaluated calculation
      if (state.overwrite)
        return {
          ...state,
          currentOperand: payload.content,
          overwrite: false,
        };
      // Do not allow more than one '.'
      else if (payload.content === '.' && state.currentOperand.includes('.'))
        return state;
      // No more than one '0' if already '0'
      else if (payload.content === '0' && state.currentOperand === '0')
        return state;
      // Override existing '0' if greater than '0'
      else if (payload.content > '0' && state.currentOperand === '0')
        return {
          ...state,
          currentOperand: `${payload.content}`,
        };
      else {
        return {
          ...state,
          currentOperand: `${state.currentOperand}${payload.content}`,
        };
      }

    case ACTIONS.SELECT_OPERATION:
      if (
        (state.currentOperand === initialState.currentOperand &&
          state.previousOperand === initialState.previousOperand) ||
        isNaN(state.currentOperand)
      )
        return state;
      // Allows changing of operation mid-calculation
      else if (state.currentOperand === '')
        return {
          ...state,
          operation: payload.content,
        };
      // Set previousOperand if none
      else if (state.previousOperand === initialState.previousOperand)
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.content,
          currentOperand: '',
        };
      // Calculate if clicked on with previousOperand and currentOperand existing
      else {
        return {
          ...state,
          previousOperand: evaluate(state),
          operation: payload.content,
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
      else if (state.currentOperand === initialState.currentOperand)
        return state;
      // Set back to initialState if 1 in length
      else if (state.currentOperand.length === 1)
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
        isNaN(state.currentOperand) ||
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
        <ModeButton mode={mode} setMode={setMode} />
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
