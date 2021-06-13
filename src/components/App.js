import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FirebaseAuth from './FirebaseAuth';
import { AuthProvider } from '../contexts/AuthContext';
import Test from './Test';

function App() {
  // const { currentUser } = useAuth();
  return (
    <AuthProvider>
      <Router>
        <FirebaseAuth />
        <Test />
      </Router>
    </AuthProvider>
  );
}

export default App;
