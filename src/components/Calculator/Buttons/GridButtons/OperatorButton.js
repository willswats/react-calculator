import { ACTIONS } from '../../Calculator';

import classes from './OperatorButton.module.css';

const OperatorButton = ({ dispatch, operator }) => {
  return (
    <button
      className={classes['operator-btn']}
      onClick={() =>
        dispatch({ type: ACTIONS.SELECT_OPERATION, payload: { operator } })
      }
    >
      {operator}
    </button>
  );
};

export default OperatorButton;
