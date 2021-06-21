import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../utils/Firebase';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const [userExists, setUserExists] = useState(1);

  useEffect(() => {
    const addNewUserFirestoreEntry = async () => {
      const db = app.firestore();
      let pokemonRef = db.collection('caughtPokemon');
      pokemonRef
        .where('uid', '==', `${currentUser.uid}`)
        .onSnapshot((querySnapshot) => {
          const dbEntries = querySnapshot.docs.map((doc) => {
            return doc.data();
          });
          setUserExists(dbEntries.length);
        });

      if (userExists < 1) {
        const createPokemonList = () => {
          let numbersObj = {};
          for (let i = 1; i < 152; i++) {
            numbersObj[`${i}`] = { caught: false };
          }
          return numbersObj;
        };

        let list = createPokemonList();
        let pokemonRef = app.firestore().collection('caughtPokemon');
        pokemonRef.doc(currentUser.uid).set({
          uid: currentUser.uid,
          caughtPokemonList: list,
        });
      }
    };

    addNewUserFirestoreEntry();
  }, [currentUser.uid, userExists.length, userExists]);

  return (
    <>
      <h1>Home</h1>
      {currentUser && <p>currentuser email: {currentUser.uid}</p>}

      <Link to="/profile">visit profile</Link>
    </>
  );
};

export default Home;
