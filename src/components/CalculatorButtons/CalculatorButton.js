const CalculatorButton = ({ className, dispatch, type, button }) => {
  return (
    <button
      className={className}
      onClick={() => dispatch({ type, payload: { button } })}
    >
      {button}
</button>
  );
};

export default CalculatorButton;
