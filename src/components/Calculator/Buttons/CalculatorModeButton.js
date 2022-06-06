import useKeyboard from '../../../hooks/useKeyboard';

import classes from './CalculatorModeButton.module.css';

import { ACTIONS, MODES } from '../Calculator';

const CalculatorModeButton = ({ state, dispatch }) => {
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
    ${classes['mode-btn']}
    ${arrowLeft || arrowRight ? classes['mode-btn--pressed'] : ''} 
    `}
      onClick={clickHandler}
    >
      {state.mode === MODES.CALCULATOR && <>History</>}
      {state.mode === MODES.HISTORY && <>Calculator</>}
    </button>
  );
};

export default CalculatorModeButton;
