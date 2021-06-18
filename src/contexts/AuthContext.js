import React, { useEffect, useState } from 'react';
import app from '../utils/Firebase';
import Spinner from '../components/Spinner/Spinner';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [pending, setPending] = useState(true);

  // notes for firebase User object
  // currentUser.updateProfile(
  //  {photoURL: null,   in case of deleting current value
  //   displayName: "knoff" // both Strings
  // )
  //
  // photoURL

  // updateEmail()

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <Spinner />;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        pending,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
