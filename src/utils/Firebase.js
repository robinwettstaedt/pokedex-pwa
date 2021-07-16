import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Initialize Firebase
const app = firebase.initializeApp({
  apiKey: 'AIzaSyCkPC7j_BskE4WOEIrpaqF0MXIQEEg6JyU',
  authDomain: 'pokedex-production-a35b7.firebaseapp.com',
  projectId: 'pokedex-production-a35b7',
  storageBucket: 'pokedex-production-a35b7.appspot.com',
  messagingSenderId: '238509295008',
  appId: '1:238509295008:web:3e9d9cbbb4b095c1e050c5',
});

export const auth = app.auth();
export default app;
