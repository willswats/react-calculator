const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
});

export const formatOperand = (operand) => {
  if (operand === '') return;
  const [integer, decimal] = operand.split('.');
  if (decimal === undefined) return INTEGER_FORMATTER.format(integer);
  else {
    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`;
  }
};
