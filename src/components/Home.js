import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../utils/Firebase';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const [userExists, setUserExists] = useState(1);

  useEffect(() => {
    const queryForUserID = async () => {
      const db = app.firestore();
      let pokemonRef = db.collection('caughtPokemon');
      pokemonRef
        .where('uid', '==', `${currentUser.uid}`)
        .onSnapshot((querySnapshot) => {
          const dbEntries = querySnapshot.docs.map((doc) => {
            return doc.data();
          });
          setUserExists(dbEntries.length);
          console.log(dbEntries.length);
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
        pokemonRef.add({
          uid: currentUser.uid,
          caughtPokemonList: list,
        });
      }
    };

    queryForUserID();
  }, [currentUser.uid, userExists.length, userExists]);
  return (
    <>
      <h1>Home</h1>
      {currentUser && <p>currentuser email: {currentUser.uid}</p>}
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <Link to="/profile">visit profile</Link>
      {/* <button onClick={createFirestoreReference}>create my reference</button> */}
    </>
  );
};

export default Home;
