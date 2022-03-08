import classes from './ToggleModeButton.module.css';

import { MODES } from '../App';

const ToggleModeButton = ({ mode, setMode }) => {
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

export default ToggleModeButton;
