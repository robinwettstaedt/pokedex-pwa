import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../utils/Firebase';
import { AuthContext } from '../contexts/AuthContext';

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const [data, setData] = useState(1);

  useEffect(() => {
    const addNewUserFirestoreEntry = async () => {
      try {
        const db = app.firestore();
        let dbRef = db.collection('caughtPokemon').doc(currentUser.uid);

        const doc = await dbRef.get();
        const data = doc.data();

        setData(data);

        if (!data) {
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
      } catch (error) {
        console.log('There has been an error: ', error);
      }
    };

    addNewUserFirestoreEntry();
  }, [currentUser.uid]);

  return (
    <>
      <h1>Home</h1>
      {currentUser && <p>currentuser email: {currentUser.uid}</p>}

      <Link to="/profile">visit profile</Link>
    </>
  );
};

export default Home;
