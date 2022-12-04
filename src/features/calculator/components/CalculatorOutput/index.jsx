import styles from './styles.module.css';

export const CalculatorOutput = ({ state }) => {
  return (
    <div className={styles['output']}>
      <div className={styles['output__previous']}>
        {state.previousOperand} {state.operation}
      </div>
      <div className={styles['output__current']}>{state.currentOperand}</div>
    </div>
  );
};
