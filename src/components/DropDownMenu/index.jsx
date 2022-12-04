import styles from './styles.module.css';

export const DropDownMenu = ({ dropDown, setDropDown }) => {
  return (
    <div className={styles['dropdown-menu']}>
      <button
        onClick={() => setDropDown(!dropDown)}
        className={styles['dropdown-menu__btn']}
      ></button>
      <h1 className={styles['dropdown-menu__title']}>Keyboard shortcuts</h1>
      <li className={styles['dropdown-menu__list']}>
        <ol className={styles['dropdown-menu__item']}>
          <span className={styles['dropdown-menu__key']}>ESC</span> - AC
        </ol>
        <ol className={styles['dropdown-menu__item']}>
          <span className={styles['dropdown-menu__key']}>Backspace</span> - DEL
        </ol>
        <ol className={styles['dropdown-menu__item']}>
          <span className={styles['dropdown-menu__key']}>&rarr;</span> - History
        </ol>
        <ol className={styles['dropdown-menu__item']}>
          <span className={styles['dropdown-menu__key']}>&larr;</span> -
          Calculator
        </ol>
        <ol className={styles['dropdown-menu__item']}>
          <span className={styles['dropdown-menu__key']}>&uarr;</span> - History
          up
        </ol>
        <ol className={styles['dropdown-menu__item']}>
          <span className={styles['dropdown-menu__key']}>&darr;</span> - History
          down
        </ol>
      </li>
    </div>
  );
};
