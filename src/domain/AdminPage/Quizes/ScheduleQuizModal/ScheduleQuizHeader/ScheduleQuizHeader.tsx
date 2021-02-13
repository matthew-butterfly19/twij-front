import React from 'react';

import styles from './ScheduleQuizHeader.module.scss';

export interface ScheduleQuizHeader {
  name: string;
  subject: string;
}

const ScheduleQuizHeader = ({ name, subject }: ScheduleQuizHeader): JSX.Element => {
  return (
    <h2 className={styles.header}>
      <p>
        Planowanie Quizu
      </p>
      <p>
        {name} - {subject}
      </p>
    </h2>
  );
}

export default ScheduleQuizHeader;
