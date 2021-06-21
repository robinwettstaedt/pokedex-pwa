import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import app from '../utils/Firebase';
import firebase from 'firebase';
import { AuthContext } from '../contexts/AuthContext';

function DexEntry() {
  // Firestore query states
  const [docData, setDocData] = useState();
  const [pokemonImage, setPokemonImage] = useState();
  const [documentName, setDocumentName] = useState();
  const [isCaught, setIsCaught] = useState();

  // getting the route's parameter
  // routeID for getting the pictures out of public
  const { id } = useParams();
  let routeID = 0;
  if (id < 10) {
    routeID = `00${id}`;
  } else if (id > 9 && id < 100) {
    routeID = `0${id}`;
  } else {
    routeID = `${id}`;
  }

  // getting the current logged in user from the Context
  const { currentUser } = useContext(AuthContext);

  // function to change the caught value of this route's pokemon in firestore
  const catchPokemon = async () => {
    let listReference = docData[0].caughtPokemonList;
    if (docData[0].caughtPokemonList[id].caught == false) {
      listReference[id].caught = true;
      listReference[id].caughtAt = firebase.firestore.Timestamp.now();
    } else {
      listReference[id].caught = false;
    }

    const db = app.firestore();
    await db.collection('caughtPokemon').doc(documentName).set({
      uid: currentUser.uid,
      caughtPokemonList: listReference,
    });
  };

  useEffect(() => {
    let unsubscribe;

    const fetchFirestoreData = async () => {
      let data;
      const db = app.firestore();
      let pokemonRef = db.collection('caughtPokemon');
      unsubscribe = pokemonRef
        .where('uid', '==', `${currentUser.uid}`)
        .onSnapshot((querySnapshot) => {
          const document = querySnapshot.docs.map((doc) => {
            setDocumentName(doc.id);
            return doc.data();
          });
          if (document.length > 0) {
            data = document;
          }
          setDocData(data);
          setIsCaught(data[0].caughtPokemonList[id].caught);
        });
    };

    const getPokemonImage = () => {
      app
        .storage()
        .ref()
        .child(`pokemonImages/${routeID}.png`)
        .getDownloadURL()
        .then((url) => {
          setPokemonImage(url);
        });
    };

    getPokemonImage();
    fetchFirestoreData();

    return unsubscribe;
  }, [currentUser.uid, id, routeID]);

  // // for api queries
  // if (isLoading) {
  //   return <h1>is Loading....</h1>;
  // }
  // if (isError) {
  //   return <h1>Errrrrooorrr</h1>;
  // }

  return (
    <div>
      <p>This will be pokemon number: {id}</p>
      {isCaught == true ? <p>CAUGHT</p> : <p>NOT CAUGHT</p>}

      <img
        src={pokemonImage}
        // src={process.env.PUBLIC_URL + `/images/${routeID}.png`}
        alt={`Pokemon Number: ${id}`}
      />
      <button onClick={catchPokemon}> Catch this pokemon</button>
    </div>
  );
}

export default DexEntry;
