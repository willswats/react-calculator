import { useReducer } from 'react';

// Components
import {
  CalculatorModeButton,
  CalculatorHistory,
  CalculatorOutput,
  CalculatorGrid,
} from 'features/calculator';

// Utils
import { evaluate } from 'features/calculator';

import styles from './styles.module.css';

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
  SET_MODE: 'set-mode',
  SET_CALCULATION: 'set-calculation',
};

const initialState = {
  currentOperand: '0',
  previousOperand: '',
  operation: '',
  overwrite: false,
  history: [],
  mode: MODES.CALCULATOR,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      // Overwrite after evaluation
      if (state.overwrite) {
        if (payload.content === '.') {
          return {
            ...state,
            currentOperand: `0${payload.content}`,
            overwrite: false,
          };
        } else {
          return {
            ...state,
            currentOperand: payload.content,
            overwrite: false,
          };
        }
      }
      // Do not allow multiple '.' and append '0'
      if (payload.content === '.') {
        if (state.currentOperand === '') {
          return {
            ...state,
            currentOperand: `0${payload.content}`,
          };
        } else if (state.currentOperand.includes('.')) {
          return state;
        }
      }
      // Do not allow multiple '0' when there is no '.' and is equal to zero
      if (payload.content === '0') {
        if (
          parseFloat(state.currentOperand) === 0 &&
          !state.currentOperand.includes('.')
        ) {
          return state;
        }
      }
      // Overwrite initial '0' if greater
      if (payload.content > '0' && state.currentOperand === '0') {
        return {
          ...state,
          currentOperand: payload.content,
        };
      }
      // Append otherwise
      return {
        ...state,
        currentOperand: `${state.currentOperand}${payload.content}`,
      };
    case ACTIONS.SELECT_OPERATION:
      // Allow negative numbers and ensure '-' is not overwritten
      if (payload.content === '-') {
        if (state.currentOperand === '0' || state.currentOperand === '') {
          return {
            ...state,
            currentOperand: `-`,
            overwrite: false,
          };
        }
      }
      // If erroneous or zero, then return
      if (
        (state.currentOperand === initialState.currentOperand &&
          state.previousOperand === initialState.previousOperand) ||
        state.currentOperand === '' ||
        state.currentOperand === 'Error' ||
        isNaN(state.currentOperand) ||
        parseFloat(state.currentOperand) === 0
      ) {
        return state;
      }
      // If there is no previousOperand, then set it
      if (state.previousOperand === initialState.previousOperand) {
        return {
          ...state,
          previousOperand: state.currentOperand,
          operation: payload.content,
          currentOperand: '',
        };
      }
      // Otherwise evaluate state in previousOperand
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
          currentOperand: '0',
          overwrite: false,
        };
      // Do nothing if no currentOperand
      if (state.currentOperand === '') return state;
      // Set back to initialState if 1 in length
      if (state.currentOperand.length === 1)
        return { ...state, currentOperand: '0' };

      // Otherwise slice from end
      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1),
      };

    case ACTIONS.EVALUATE:
      const evaluation = evaluate(state);
      // If any are empty, return
      if (
        state.currentOperand === '' ||
        state.previousOperand === '' ||
        state.operation === '' ||
        isNaN(state.currentOperand)
      )
        return state;
      // Don't update history if error
      else if (isNaN(evaluation)) {
        return {
          ...state,
          currentOperand: evaluation,
          previousOperand: '',
          operation: '',
          overwrite: true,
        };
      } else {
        return {
          ...state,
          // Set history
          history: [
            {
              firstOperand: state.previousOperand,
              secondOperand: state.currentOperand,
              operation: state.operation,
              evaluation: evaluation,
            },
            ...state.history,
          ],
          // Set evaluation
          currentOperand: evaluation,
          previousOperand: '',
          operation: '',
          overwrite: true,
        };
      }
    case ACTIONS.SET_MODE:
      if (payload.mode === MODES.CALCULATOR) {
        return {
          ...state,
          mode: MODES.CALCULATOR,
        };
      } else if (payload.mode === MODES.HISTORY) {
        return {
          ...state,
          mode: MODES.HISTORY,
        };
      }
      break;
    case ACTIONS.SET_CALCULATION:
      return {
        ...state,
        currentOperand: payload.evaluation,
        overwrite: false,
        mode: MODES.CALCULATOR,
      };
    default:
      return state;
  }
};

export const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles['calculator']}>
      <CalculatorModeButton state={state} dispatch={dispatch} />
      {state.mode === MODES.HISTORY && (
        <CalculatorHistory state={state} dispatch={dispatch} />
      )}
      {state.mode === MODES.CALCULATOR && (
        <>
          <CalculatorOutput state={state} />
          <CalculatorGrid dispatch={dispatch} />
        </>
      )}
    </div>
  );
};
