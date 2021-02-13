import React, { memo, lazy } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from "@domain/AdminPage/Routes/PrivateRoute/PrivateRoute";

const Dashboard = lazy(() => import('@domain/AdminPage/Dashboard/Dashboard'));
const QuizSettings = lazy(() => import('@domain/AdminPage/Quizes/Quizzes'));

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
    </Switch>
  );
};

export default memo(Routes);