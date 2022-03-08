import classes from './ToggleButton.module.css';

const ToggleButton = ({ visible, setVisible }) => {
  return (
    <button className={classes.toggle} onClick={() => setVisible(!visible)}>
      {!visible && <>History</>}
      {visible && <>Calculator</>}
    </button>
  );
};

export default ToggleButton;
