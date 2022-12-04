// Globals
import { ACTIONS, MODES } from 'features/calculator';

// Hooks
import { useKeyboard } from 'features/calculator';

import styles from './styles.module.css';

export const CalculatorModeButton = ({ state, dispatch }) => {
  const arrowLeft = useKeyboard(
    'ArrowLeft',
    dispatch,
    ACTIONS.SET_MODE,
    {
      mode: MODES.CALCULATOR,
    },
    false
  );

  const arrowRight = useKeyboard(
    'ArrowRight',
    dispatch,
    ACTIONS.SET_MODE,
    {
      mode: MODES.HISTORY,
    },
    false
  );

  const clickHandler = () => {
    if (state.mode === MODES.HISTORY) {
      dispatch({ type: ACTIONS.SET_MODE, payload: { mode: MODES.CALCULATOR } });
    }

    if (state.mode === MODES.CALCULATOR) {
      dispatch({ type: ACTIONS.SET_MODE, payload: { mode: MODES.HISTORY } });
    }
  };

  return (
    <button
      className={`
    ${styles['mode-btn']}
    ${arrowLeft || arrowRight ? styles['mode-btn--pressed'] : ''} 
    `}
      onClick={clickHandler}
    >
      {state.mode === MODES.CALCULATOR && <>History</>}
      {state.mode === MODES.HISTORY && <>Calculator</>}
    </button>
  );
};
