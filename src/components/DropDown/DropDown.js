import { useState } from 'react';

import DropDownButton from './DropDownButton';
import DropDownMenu from './DropDownMenu';

import classes from './DropDown.module.css';

const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className={classes['dropdown']}>
      {!dropDown && (
        <DropDownButton dropDown={dropDown} setDropDown={setDropDown} />
      )}
      {dropDown && (
        <DropDownMenu dropDown={dropDown} setDropDown={setDropDown} />
      )}
    </div>
  );
};

export default DropDown;
