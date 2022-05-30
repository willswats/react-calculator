import { ACTIONS } from '../Calculator';

import classes from './DigitButton.module.css';

const DigitButton = ({ dispatch, digit }) => {
  return (
    <button
      className={`${classes['digit-btn']} ${
        digit === '0' ? classes['digit-btn--span'] : ''
      }  `}
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
};

export default DigitButton;
