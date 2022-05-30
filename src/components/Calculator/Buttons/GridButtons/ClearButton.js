import { ACTIONS } from '../../Calculator';

import classes from './ClearButton.module.css';

const ClearButton = ({ dispatch }) => {
  return (
    <button
      className={classes['clear-btn']}
      onClick={() => dispatch({ type: ACTIONS.ALL_CLEAR })}
    >
      AC
    </button>
  );
};

export default ClearButton;
