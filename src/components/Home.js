import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../utils/Firebase';
import { AuthContext } from '../contexts/AuthContext';
import PokemonCard from './PokemonCard';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [cardsToRender, setCardsToRender] = useState(null);

  const createPokemonList = () => {
    let numbersObj = {};
    for (let i = 1; i < 152; i++) {
      numbersObj[`${i}`] = { caught: false };
    }
    return numbersObj;
  };

  useEffect(() => {
    const addNewUserFirestoreEntry = async () => {
      try {
        const db = app.firestore();
        let dbRef = db.collection('caughtPokemon').doc(currentUser.uid);

        const doc = await dbRef.get();
        const data = doc.data();

        // creating the firestore entry if the user does not have one already
        if (!data) {
          let list = createPokemonList();
          let pokemonRef = app.firestore().collection('caughtPokemon');
          pokemonRef.doc(currentUser.uid).set({
            uid: currentUser.uid,
            caughtPokemonList: list,
          });
        }

        // logic for the displaying of caught pokemon by date
        let catchesArray = [];

        for (let entry in data.caughtPokemonList) {
          if (data.caughtPokemonList[entry].caught === true) {
            let obj = {};
            obj['number'] = parseInt(entry);
            obj['caughtAt'] = data.caughtPokemonList[entry].caughtAt;
            catchesArray.push(obj);
          }
        }

        catchesArray.sort((a, b) => {
          return b.caughtAt.toDate() - a.caughtAt.toDate();
        });
        console.log(catchesArray);

        let componentArray = [];
        for (let item of catchesArray) {
          componentArray.push(
            <PokemonCard number={item.number} dateCaught={item.caughtAt} />
          );
        }
        setCardsToRender(componentArray);

        // // individual data fetching
        // getDetails(catchesArray[0].number);
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
      {cardsToRender &&
        cardsToRender.map((Component, key) => <div key={key}>{Component}</div>)}

      <Link to="/profile">visit profile</Link>
    </>
  );
};

export default Home;
