import classes from './History.module.css';

const History = ({ state }) => {
  return (
    <ul>
      {state.history.map((calculation, index) => (
        <li key={index}>{calculation}</li>
      ))}
    </ul>
  );
};
export default History;
