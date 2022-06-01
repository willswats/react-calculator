import useKeyboard from '../../../../hooks/useKeyboard';

import { ACTIONS } from '../../Calculator';

import classes from './CalculatorButton.module.css';

const ClearButton = ({ dispatch }) => {
  const pressed = useKeyboard(dispatch, ACTIONS.ALL_CLEAR, 'Escape');

  return (
    <button
      className={`
      ${classes['calculator-btn']} 
      ${classes['calculator-btn--large']}
      ${pressed ? classes['calculator-btn--pressed'] : ''} 
      `}
      onClick={() => dispatch({ type: ACTIONS.ALL_CLEAR })}
    >
      AC
    </button>
  );
};

export default ClearButton;
