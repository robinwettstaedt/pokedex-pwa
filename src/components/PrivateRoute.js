import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Spinner from './Spinner/Spinner';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const { currentUser, pending } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        pending ? (
          <Spinner />
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
