// Add commas to seperate long numbers

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

export const formatOperand = (operand) => {
  if (operand === '') return;
  const [integer, decimal] = operand.split('.');
  if (decimal === undefined) return INTEGER_FORMATTER.format(integer);
  // Do not add commas to the decimal.
  else {
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
  }
};
