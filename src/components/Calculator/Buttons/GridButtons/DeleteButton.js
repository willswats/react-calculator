import { ACTIONS } from '../../Calculator';

import useKeyboard from '../../../../hooks/useKeyboard';

import classes from './CalculatorButton.module.css';

const DeleteButton = ({ dispatch }) => {
  const pressed = useKeyboard('Backspace', dispatch, ACTIONS.DELETE_DIGIT);

  return (
    <button
      className={`
      ${classes['calculator-btn']} 
      ${pressed ? classes['calculator-btn--pressed'] : ''} 
      `}
      onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
    >
      DEL
    </button>
  );
};

export default DeleteButton;
