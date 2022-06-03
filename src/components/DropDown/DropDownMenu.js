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
        <ol>ESC - AC</ol>
        <ol>Backspace - DEL</ol>
        <ol>Arrow right - History</ol>
        <ol>Arrow left - Calculator</ol>
        <ol>Arrow down - History down</ol>
        <ol>Arrow up - History up</ol>
      </li>
      <p>
        All the other keyboard shortcuts correspond to the exact keys on the
        keyboard.
      </p>
    </div>
  );
};

export default DropDownMenu;
