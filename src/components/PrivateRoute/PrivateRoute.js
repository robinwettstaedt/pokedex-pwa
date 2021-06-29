import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser, pending } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        pending ? (
          <p>is loading...</p>
        ) : currentUser ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={'/login'} />
        )
      }
    />
  );
};

export default PrivateRoute;
