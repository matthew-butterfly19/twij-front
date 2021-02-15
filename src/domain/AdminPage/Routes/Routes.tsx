import React, { memo, lazy } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from "@domain/AdminPage/Routes/PrivateRoute/PrivateRoute";

const Dashboard = lazy(() => import('@domain/AdminPage/Dashboard/Dashboard'));
const QuizSettings = lazy(() => import('@domain/AdminPage/Quizes/Quizzes'));
const QuizHistory = lazy(() => import('@domain/AdminPage/QuizHistory/QuizHistory'));

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <PrivateRoute
        path='/admin'
        exact={true}
        component={Dashboard}
      />
      <PrivateRoute
        path='/admin/quizy'
        exact={true}
        component={QuizSettings}
      />
      <PrivateRoute
        path='/admin/historia'
        exact={true}
        component={QuizHistory}
      />
    </Switch>
  );
};

export default memo(Routes);