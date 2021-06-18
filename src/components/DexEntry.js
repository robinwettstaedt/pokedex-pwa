import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import app from '../utils/Firebase';
import { AuthContext } from '../contexts/AuthContext';
// import pic from '../images/001.png';

function DexEntry() {
  // PokeAPI query states
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // Firestore query states
  const [caught, setCaught] = useState();
  const [pokemonImage, setPokemonImage] = useState();

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

  useEffect(() => {
    let unsubscribe;

    const fetchFirestoreData = async () => {
      const db = app.firestore();
      let pokemonRef = db.collection('caughtPokemon');
      unsubscribe = pokemonRef
        .where('uid', '==', `${currentUser.uid}`)
        .onSnapshot((querySnapshot) => {
          const caughtPokemon = querySnapshot.docs.map((doc) => {
            return doc.data();
          });
          if (caughtPokemon.length > 0) {
            console.log(caughtPokemon[0].caughtPokemonList[id]);
            setCaught(caughtPokemon);
          }
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

  // const fetchData = async () => {
  //   setIsError(false);
  //   setIsLoading(true);

  //   try {
  //     const response = await axios(`https://pokeapi.co/api/v2/pokemon/1`);
  //     setData(response.data);

  //     try {
  //       const pictureResponse = await axios(data.sprites.front_default);
  //       setPicture(pictureResponse.data);
  //     } catch (error) {}
  //   } catch (error) {
  //     setIsError(true);
  //     console.log(error);
  //   }

  //   setIsLoading(false);
  // };

  // for api queries
  if (isLoading) {
    return <h1>is Loading....</h1>;
  }
  if (isError) {
    return <h1>Errrrrooorrr</h1>;
  }

  return (
    <div>
      <p>This will be pokemon number: {id}</p>
      <p></p>
      <img
        src={pokemonImage}
        // src={process.env.PUBLIC_URL + `/images/${routeID}.png`}
        alt={`Pokemon Number: ${id}`}
      />
    </div>
  );
}

export default DexEntry;
