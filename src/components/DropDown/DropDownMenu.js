import classes from './DropDownMenu.module.css';

const DropDownMenu = ({ dropDown, setDropDown }) => {
  return (
    <div className={classes['dropdown-menu']}>
      <button
        onClick={() => setDropDown(!dropDown)}
        className={classes['dropdown-menu__btn']}
      ></button>
      <h1 className={classes['dropdown-menu__title']}>Keyboard shortcuts</h1>
      <li className={classes['dropdown-menu__list']}>
        <ol>AC - ESC</ol>
        <ol>DEL - Backspace</ol>
        <ol>History - Arrow right</ol>
        <ol>Calculator - Arrow left</ol>
      </li>
      <p>
        All the other keyboard shortcuts correspond to the exact keys on the
        keyboard.
      </p>
    </div>
  );
};

export default DropDownMenu;
