import classes from './DropDownMenu.module.css';

const DropDownMenu = ({ dropDown, setDropDown }) => {
  return (
    <div className={classes['dropdown-menu']}>
      <button
        onClick={() => setDropDown(!dropDown)}
        className={classes['dropdown-cross']}
      >
        x
      </button>
      <a href="https://williamwatson.dev">williamwatson.dev</a>
      <a href="https://github.com/willswats/react-calculator">
        GitHub repository
      </a>
    </div>
  );
};

export default DropDownMenu;
