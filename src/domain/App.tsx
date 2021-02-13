import React, {memo, lazy, Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';

const AdminPage = lazy(() => import('@domain/AdminPage/AdminPage'));
const TheGame = lazy(() => import('@domain/Game/Game'));

const App = (): JSX.Element => {

  const loadingPage = (
    <div>
    </div>
  );

  return (
    <Suspense fallback={loadingPage}>
      <Switch>
        <Route
          render={() => <AdminPage />}
          path={'/admin'}
        />
        <Route
          render={() => <TheGame />}
        />
      </Switch>
    </Suspense>
  );
};

export default memo(App);
