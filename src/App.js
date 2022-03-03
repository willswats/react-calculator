import { useReducer } from 'react';
import Calculator from './components/Calculator';
import evaluate from './helpers/evaluate';

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
      return {
        ...state,
        currentOperand: `${state.currentOperand}${selectedButton}`,
      };
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
      return {
        ...state,
        previousOperand: evaluate(state),
        operation: selectedButton,
        currentOperand: '',
      };
    case ACTIONS.ALL_CLEAR:
      return initialState;
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
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };
    case ACTIONS.EVALUATE:
      if (
        state.currentOperand === initialState.currentOperand ||
        state.previousOperand === initialState.previousOperand ||
        state.operation === initialState.operation
      )
        return state;
      return {
        ...state,
        currentOperand: evaluate(state),
        previousOperand: initialState.previousOperand,
        operation: initialState.operation,
        overwrite: true,
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Calculator state={state} dispatch={dispatch} />;
};

export default App;
