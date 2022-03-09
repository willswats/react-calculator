import classes from './DropDownMenu.module.css';

const DropDownMenu = () => {
  return (
    <div className={classes['dropdown-container']}>
      <a href="https://williamwatson.dev">williamwatson.dev</a>
      <a href="https://github.com/willswats/react-calculator">Github</a>
    </div>
  );
};

export default DropDownMenu;
