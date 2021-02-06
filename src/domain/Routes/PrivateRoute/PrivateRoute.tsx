import React, {ComponentType, ReactNode} from 'react';
import { Route } from 'react-router-dom';

export interface PrivateRouteProps {
  component: ComponentType,
  path: string,
  exact?: boolean
}

const PrivateRoute = ({ component: Component, path, exact }: PrivateRouteProps): JSX.Element => {
  const renderComponent = (props: any): ReactNode => {
    return (
      <Component {...props} />
    );
  };

  return (
    <Route
      render={renderComponent}
      exact={exact}
      path={path}
    />
  );
}

export default PrivateRoute
