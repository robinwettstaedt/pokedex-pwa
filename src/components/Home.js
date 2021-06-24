import React, { useContext, useEffect, useState } from 'react';
import app from '../utils/Firebase';
import { AuthContext } from '../contexts/AuthContext';
import PokemonCard from './PokemonCard';

const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [initialCards, setInitialCards] = useState(null);
  const [additionalCards, setAdditionalCards] = useState(null);
  const [renderAdditional, setRenderAdditional] = useState(false);

  const createPokemonList = () => {
    let numbersObj = {};
    for (let i = 1; i < 152; i++) {
      numbersObj[`${i}`] = { caught: false };
    }
    return numbersObj;
  };

  const loadAdditionalCards = () => {
    setRenderAdditional(true);
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

        let firstSixComponents = [];
        let additionalComponents = [];

        for (let i = 0; i < catchesArray.length; i++) {
          if (i === 0) {
            firstSixComponents.push(
              <PokemonCard
                number={catchesArray[i].number}
                dateCaught={catchesArray[i].caughtAt}
                first={true}
              />
            );
          } else if (i < 1) {
            firstSixComponents.push(
              <PokemonCard
                number={catchesArray[i].number}
                dateCaught={catchesArray[i].caughtAt}
                first={false}
              />
            );
          } else {
            additionalComponents.push(
              <PokemonCard
                number={catchesArray[i].number}
                dateCaught={catchesArray[i].caughtAt}
                first={false}
              />
            );
          }
        }
        setInitialCards(firstSixComponents);
        setAdditionalCards(additionalComponents);
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
      {initialCards &&
        initialCards.map((Component, key) => <div key={key}>{Component}</div>)}

      {renderAdditional &&
        additionalCards &&
        additionalCards.map((Component, key) => (
          <div key={key}>{Component}</div>
        ))}
      <button onClick={loadAdditionalCards}> load more </button>
    </>
  );
};

export default Home;
