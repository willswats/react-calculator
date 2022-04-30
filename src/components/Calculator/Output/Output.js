import classes from './Output.module.css';

import { formatOperand } from '../../../helpers/formatOperand';

const Output = ({ state }) => {
  return (
    <div className={classes.output}>
      <div className={classes['output__previous']}>
        {formatOperand(state.previousOperand)} {state.operation}
      </div>
      <div className={classes['output__current']}>
        {formatOperand(state.currentOperand)}
      </div>
    </div>
  );
};

export default Output;
