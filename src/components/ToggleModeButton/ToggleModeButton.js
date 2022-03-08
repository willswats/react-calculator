import { MODES } from '../../App';

import classes from './ToggleModeButton.module.css';

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
    <button className={classes.toggle} onClick={clickHandler}>
      {mode === MODES.HISTORY && <>History</>}
      {mode === MODES.CALCULATOR && <>Calculator</>}
    </button>
  );
};

export default ToggleModeButton;
