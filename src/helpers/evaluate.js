function evaluate({ currentOperand, previousOperand, operation }) {
  // Convert strings
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);

  // Return 'Error' if prev or current isNaN
  if (isNaN(prev) || isNaN(current)) return 'Error';

  let computation = '';
  switch (operation) {
    case '+':
      computation = prev + current;
      break;
    case '-':
      computation = prev - current;
      break;
    case '*':
      computation = prev * current;
      break;
    case '/':
      computation = prev / current;
      break;
    default:
      break;
  }
  return computation.toString();
}

export default evaluate;
