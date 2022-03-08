import { useReducer, useState } from 'react';

import ToggleButton from './components/ToggleModeButton/ToggleModeButton';
import History from './components/History/History';
import Calculator from './components/Calculator/Calculator';

import evaluate from './helpers/evaluate';

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
  const currentCalculation = `${state.previousOperand} ${state.operation} ${state.currentOperand}`;

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
        const evaluation = evaluate(state);
        return {
          ...state,
          // history: [...state.history, `${currentCalculation} = ${evaluation}`],
          previousOperand: evaluation,
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
          history: [...state.history, `${currentCalculation} = ${evaluation}`],
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

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [mode, setMode] = useState(MODES.CALCULATOR);

  return (
    <>
      <ToggleButton mode={mode} setMode={setMode} />
      {mode === MODES.HISTORY && <History state={state} />}
      {mode === MODES.CALCULATOR && (
        <Calculator state={state} dispatch={dispatch} />
      )}
    </>
  );
};

export default App;
