import classes from './CalculatorModeButton.module.css';

import { MODES } from '../Calculator';

const CalculatorModeButton = ({ mode, setMode }) => {
  const clickHandler = () => {
    if (mode === MODES.HISTORY) {
      setMode(MODES.CALCULATOR);
    }

    if (mode === MODES.CALCULATOR) {
      setMode(MODES.HISTORY);
    }
  };

  return (
    <button className={classes['mode-btn']} onClick={clickHandler}>
      {mode === MODES.CALCULATOR && <>History</>}
      {mode === MODES.HISTORY && <>Calculator</>}
    </button>
  );
};

export default CalculatorModeButton;
