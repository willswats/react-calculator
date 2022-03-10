import classes from './DropDownButton.module.css';

const DropDownButton = ({ dropDown, setDropDown }) => {
  return (
    <button
      onClick={() => setDropDown(!dropDown)}
      className={classes['dropdown-btn']}
    >
      <div className={classes['dropdown-arrow']} />
    </button>
  );
};

export default DropDownButton;
