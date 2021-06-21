import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import app from '../utils/Firebase';

function Profile() {
  const { currentUser } = useContext(AuthContext);

  // useEffect(() => {
  //   let unsubscribe;

  //   const fetchFirestoreData = async () => {
  //     const db = app.firestore();
  //     let pokemonRef = db.collection('caughtPokemon');
  //     unsubscribe = pokemonRef
  //       .where('uid', '==', `${currentUser.uid}`)
  //       .where('caught', '==', true)
  //       .onSnapshot((querySnapshot) => {
  //         const caughtPokemon = querySnapshot.docs.map((doc) => {
  //           return doc.data();
  //         });
  //         if (caughtPokemon.length > 0) {
  //           console.log(caughtPokemon[0].caughtPokemonList);
  //           //set State
  //         }
  //       });
  //   };

  //   fetchFirestoreData();

  //   return unsubscribe;
  // }, [currentUser.uid]);

  return (
    <div>
      <p> This is the profile of {currentUser.displayName}</p>
      <Link to="/profile/delete">Delete your Account</Link>
      <br />
      <Link to="/profile/avatar">Change your Avatar Image</Link>
      <br />
      <Link to="/profile/username">Change your Username</Link>
      <br />
      <Link to="/profile/passwordchange">Change your Password</Link>
    </div>
  );
}

export default Profile;
