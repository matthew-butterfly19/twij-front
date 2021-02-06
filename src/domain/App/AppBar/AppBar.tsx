import React from 'react';

import AppBarMt  from '@material-ui/core/AppBar';
import ToolbarMt from '@material-ui/core/Toolbar';
import TypographyMt from '@material-ui/core/Typography';

import styles from './AppBar.module.scss';

const AppBar = (): JSX.Element => {
  return (
    <AppBarMt position="fixed" className={styles.AppBar}>
      <ToolbarMt>
        <TypographyMt variant="h6" noWrap>
          TWIJ Quiz
        </TypographyMt>
      </ToolbarMt>
    </AppBarMt>
  );
}

export default AppBar;
