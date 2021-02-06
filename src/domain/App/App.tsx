import React, { Suspense } from 'react';

import AppBar from '@domain/App/AppBar/AppBar';
import MenuNav from "@domain/App/MenuNav/MenuNav";
import Routes from "@domain/Routes/Routes";
import { Toolbar } from "@material-ui/core";

import '@style/global.scss';
import styles from './App.module.scss';

const App = (): JSX.Element => {
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

export default App;
