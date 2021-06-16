import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp/SignUp';
import { AuthProvider } from '../contexts/AuthContext';
import PrivateRoute from './PrivateRoute';
import DexList from './DexList';
import Nav from './Nav/Nav';
import DexEntry from './DexEntry';
import Profile from './Profile';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route path="/" component={Nav} />

          <PrivateRoute exact path="/" component={Home} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />

          <PrivateRoute exact path="/profile" component={Profile} />

          <Route exact path="/pokedex" component={DexList} />
          <Route exact path="/pokedex/:id">
            <DexEntry />
          </Route>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
