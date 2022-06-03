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
        <ol className={classes['dropdown-menu__item']}>
          <span className={classes['dropdown-menu__key']}>ESC</span> - AC
        </ol>
        <ol className={classes['dropdown-menu__item']}>
          <span className={classes['dropdown-menu__key']}>Backspace</span> - DEL
        </ol>
        <ol className={classes['dropdown-menu__item']}>
          <span className={classes['dropdown-menu__key']}>&rarr;</span> -
          History
        </ol>
        <ol className={classes['dropdown-menu__item']}>
          <span className={classes['dropdown-menu__key']}>&larr;</span> -
          Calculator
        </ol>
        <ol className={classes['dropdown-menu__item']}>
          <span className={classes['dropdown-menu__key']}>&uarr;</span> -
          History up
        </ol>
        <ol className={classes['dropdown-menu__item']}>
          <span className={classes['dropdown-menu__key']}>&darr;</span> -
          History down
        </ol>
      </li>
    </div>
  );
};

export default DropDownMenu;
