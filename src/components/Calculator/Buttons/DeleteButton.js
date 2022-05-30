import { ACTIONS } from '../Calculator';

import classes from './DeleteButton.module.css';

const DeleteButton = ({ dispatch }) => {
  return (
    <button
      className={classes['delete-btn']}
      onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
    >
      DEL
    </button>
  );
};

export default DeleteButton;
