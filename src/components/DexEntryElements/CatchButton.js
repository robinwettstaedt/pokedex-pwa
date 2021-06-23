import React, { useContext } from 'react';
import firebase from 'firebase';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../utils/Firebase';

const CatchButton = ({
  isCaught,
  setIsCaught,
  caughtList,
  fetchFirestoreData,
  id,
}) => {
  const { currentUser } = useContext(AuthContext);
  // function to change the caught value of this route's pokemon in firestore
  const catchPokemon = async () => {
    let listReference = caughtList;
    if (isCaught === false) {
      listReference[id].caught = true;
      listReference[id].caughtAt = firebase.firestore.Timestamp.now();
      setIsCaught(true);
    } else {
      listReference[id].caught = false;
    }

    const db = app.firestore();
    await db.collection('caughtPokemon').doc(currentUser.uid).set({
      uid: currentUser.uid,
      caughtPokemonList: listReference,
    });

    fetchFirestoreData();
  };

  return (
    <div>
      <button onClick={catchPokemon}>catch this Pokemon</button>
    </div>
  );
};

export default CatchButton;
