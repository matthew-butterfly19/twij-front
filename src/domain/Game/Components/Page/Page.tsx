import React, {ReactNode, useEffect} from 'react';
import {Card} from "@material-ui/core";

import styles from './Page.module.scss';

export interface PageProps {
  children: ReactNode;
}

const Page = ({ children }: PageProps): JSX.Element => {

  return (
    <Card className={styles.page}>
      {children}
    </Card>
  );
}

export default Page;
