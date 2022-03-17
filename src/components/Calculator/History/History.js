import classes from './History.module.css';

const History = ({ state }) => {
  return (
    <ul className={classes.history}>
      {state.history.map(({ calculation, key }) => (
        <li className={classes['history-item']} key={key}>
          {calculation}
        </li>
      ))}
    </ul>
  );
};

export default History;
