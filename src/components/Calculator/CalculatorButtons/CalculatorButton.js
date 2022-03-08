import classes from './CalculatorButton.module.css';

const CalculatorButton = ({ className, dispatch, type, button }) => {
  return (
    <button
      className={className + ' ' + classes['calculator-btn']}
      onClick={() => dispatch({ type, payload: { button } })}
    >
      {button}
    </button>
  );
};

export default CalculatorButton;
