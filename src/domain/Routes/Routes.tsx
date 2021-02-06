import React, { memo, lazy } from 'react';
import { Switch } from 'react-router-dom';

import PrivateRoute from "@domain/Routes/PrivateRoute/PrivateRoute";

const Dashboard = lazy(() => import('@domain/Dashboard/Dashboard'));
const QuizSettings = lazy(() => import('@domain/Quizes/Quizzes'));

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <PrivateRoute
        path='/'
        exact={true}
        component={Dashboard}
      />
      <PrivateRoute
        path='/quizy'
        exact={true}
        component={QuizSettings}
      />
    </Switch>
  );
};

export default memo(Routes);