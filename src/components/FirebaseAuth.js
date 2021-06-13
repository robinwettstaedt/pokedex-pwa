import React, { useEffect } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { auth } from '../utils/initFirebase';
import { useAuth } from '../contexts/AuthContext';

function FirebaseAuth() {
  const { currentUser } = useAuth();
  const firebaseAuthConfig = {
    signInFlow: 'popup',
    // Auth providers
    // https://github.com/firebase/firebaseui-web#configure-oauth-providers
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true,
      },
      // add additional auth flows below
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    signInSuccessUrl: '/',
  };

  useEffect(() => {}, [currentUser]);
  return (
    <div>
      {!currentUser && (
        <StyledFirebaseAuth uiConfig={firebaseAuthConfig} firebaseAuth={auth} />
      )}
    </div>
  );
}

export default FirebaseAuth;
