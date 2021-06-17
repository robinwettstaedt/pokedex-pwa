import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import app from '../utils/Firebase';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const createFirestoreReference = () => {
      const userExists = app
        .firestore()
        .collection('caughtPokemon')
        .where('uid', '==', `${currentUser.uid}`);

      if (!userExists) {
        const createPokemonList = () => {
          let numbersObj = {};
          for (let i = 1; i < 152; i++) {
            numbersObj[`${i}`] = false;
          }
          return numbersObj;
        };

        let list = createPokemonList();

        let pokemonRef = app.firestore().collection('caughtPokemon');
        pokemonRef.add({
          uid: currentUser.uid,
          caughtPokemonList: list,
        });
      }
    };

    createFirestoreReference();
  }, [currentUser.uid]);
  return (
    <>
      <h1>Home</h1>
      {currentUser && <p>currentuser email: {currentUser.uid}</p>}
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <Link to="/profile">visit profile</Link>
    </>
  );
};

export default Home;
