import React from 'react';
import CircularProgress from "@material-ui/core/CircularProgress";

import styles from './SpinnerOverlay.module.scss';

const SpinnerOverlay = (): JSX.Element => {
  return (
    <div className={styles.background}>
      <div className={styles.spinnerOverlay}>
        <CircularProgress color="inherit" />
      </div>
    </div>
  );
}

export default SpinnerOverlay;
