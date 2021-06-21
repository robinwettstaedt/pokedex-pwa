import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp/SignUp';
import PrivateRoute from './PrivateRoute';
import DexList from './DexList';
import Nav from './Nav/Nav';
import DexEntry from './DexEntry';
import Profile from './Profile';
import DeleteAccount from './ProfileActions/DeleteAccount';
import ChangePassword from './ProfileActions/ChangePassword';
import ChangeAvatar from './ProfileActions/ChangeAvatar';
import ChangeUsername from './ProfileActions/ChangeUsername';

const App = () => {
  return (
    <Router>
      <div>
        <PrivateRoute path="/" component={Nav} />

        <PrivateRoute exact path="/" component={Home} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />

        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/profile/delete" component={DeleteAccount} />
        <PrivateRoute exact path="/profile/avatar" component={ChangeAvatar} />
        <PrivateRoute
          exact
          path="/profile/username"
          component={ChangeUsername}
        />
        <PrivateRoute
          exact
          path="/profile/passwordchange"
          component={ChangePassword}
        />

        <PrivateRoute exact path="/pokedex" component={DexList} />
        <PrivateRoute exact path="/pokedex/:id" component={DexEntry} />
      </div>
    </Router>
  );
};

export default App;
