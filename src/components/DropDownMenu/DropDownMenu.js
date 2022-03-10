import { useState } from 'react';

import classes from './DropDownMenu.module.css';

const DropDownMenu = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className={classes['dropdown-container']}>
      <button
        onClick={() => setDropDown(!dropDown)}
        className={classes['dropdown-btn']}
      >
        <div className={classes['dropdown-arrow']} />
      </button>
      <a href="https://williamwatson.dev">williamwatson.dev</a>
      <a href="https://github.com/willswats/react-calculator">Github</a>
    </div>
  );
};

export default DropDownMenu;
