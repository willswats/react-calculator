import styles from './styles.module.css';

export const DropDownButton = ({ dropDown, setDropDown }) => {
  return (
    <button
      onClick={() => setDropDown(!dropDown)}
      className={styles['dropdown-btn']}
    >
      <div className={styles['dropdown-btn__arrow']} />
    </button>
  );
};
