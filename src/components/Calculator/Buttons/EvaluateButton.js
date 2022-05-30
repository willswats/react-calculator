import { ACTIONS } from '../Calculator';

import classes from './EvaluateButton.module.css';

const EvaluateButton = ({ dispatch }) => {
  return (
    <button
      className={classes['evaluate-btn']}
      onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
    >
      =
    </button>
  );
};

export default EvaluateButton;
