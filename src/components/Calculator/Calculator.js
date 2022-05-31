import { useReducer, useState } from 'react';

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
      // Overwrite evaluation
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.content,
          overwrite: false,
        };
      }
      // Do not allow more than one '.' or '0'
      if (
        (payload.content === '.' && state.currentOperand.includes('.')) ||
        (payload.content === '0' && state.currentOperand === '0')
      ) {
        return state;
        // Overwrite initialState to get rid of '0'
      } else if (
        (payload.content > '0' &&
          state.currentOperand === initialState.currentOperand) ||
        (payload.content === '.' &&
          state.currentOperand === initialState.currentOperand)
      )
        return {
          ...state,
          currentOperand: `${payload.content}`,
        };
      return {
        ...state,
        currentOperand: `${state.currentOperand}${payload.content}`,
      };

    case ACTIONS.SELECT_OPERATION:
      if (
        state.currentOperand === initialState.currentOperand &&
        state.previousOperand === initialState.previousOperand
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
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.content,
        currentOperand: '',
      };

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
      else if (state.currentOperand.length === 1)
        return { ...state, currentOperand: initialState.currentOperand };
      else {
        return {
          ...state,
          currentOperand: state.currentOperand.slice(0, -1),
        };
      }

    case ACTIONS.EVALUATE:
      const evaluation = evaluate(state);
      if (
        state.currentOperand === '' ||
        state.previousOperand === initialState.previousOperand ||
        state.operation === initialState.operation
      )
        return state;
      // Don't update history if error
      if (isNaN(evaluation)) {
        return {
          ...state,
          currentOperand: evaluation,
          previousOperand: initialState.previousOperand,
          operation: initialState.operation,
          overwrite: true,
        };
      } else {
        return {
          ...state,
          history: [
            {
              firstOperand: state.previousOperand,
              secondOperand: state.currentOperand,
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
