import { useState } from 'react';

// Components
import { DropDownButton, DropDownMenu } from 'components';

import styles from './styles.module.css';

export const DropDown = () => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className={styles['dropdown']}>
      {!dropDown && (
        <DropDownButton dropDown={dropDown} setDropDown={setDropDown} />
      )}
      {dropDown && (
        <DropDownMenu dropDown={dropDown} setDropDown={setDropDown} />
      )}
    </div>
  );
};
