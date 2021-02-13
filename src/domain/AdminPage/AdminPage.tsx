import React, { Suspense } from 'react';

import AppBar from '@domain/AdminPage/Components/AppBar/AppBar';
import MenuNav from "@domain/AdminPage/Components/MenuNav/MenuNav";
import Routes from "@domain/AdminPage/Routes/Routes";
import { Toolbar } from "@material-ui/core";

import '@style/global.scss';
import styles from './AdminPage.module.scss';

const AdminPage = (): JSX.Element => {
  return (
    <div className={styles.app}>
      <AppBar />
      <MenuNav />
      <main className={styles.main}>
        <Toolbar />
        <Suspense fallback={<div>Loading</div>}>
          <Routes />
        </Suspense>
      </main>
    </div>
  );
}

export default AdminPage;
