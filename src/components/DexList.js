import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import namesArray from '../utils/PokemonNames';
import app from '../utils/Firebase';
import firebase from 'firebase';
import { AuthContext } from '../contexts/AuthContext';

function DexList() {
  const [list, setList] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const createList = async () => {
      try {
        const db = app.firestore();
        let dbRef = db.collection('caughtPokemon').doc(currentUser.uid);

        const doc = await dbRef.get();
        const data = doc.data();
        const caughtList = data.caughtPokemonList;

        let list = [];
        let number = '';

        for (let i = 1; i < 152; i++) {
          if (i < 10) {
            number = `00${i}`;
          } else if (i > 9 && i < 100) {
            number = `0${i}`;
          } else {
            number = `${i}`;
          }
          if (caughtList[i].caught) {
            list.push(
              <li key={number}>
                <img
                  height={20}
                  src={process.env.PUBLIC_URL + `/icons/pokeball-grey.png`}
                  alt={`Pokemon Number: ${number}`}
                />
                <Link to={`/pokedex/${i}`}>
                  #{number} {namesArray[i - 1]}
                </Link>
                <img
                  src={process.env.PUBLIC_URL + `/sprites/${number}MS.png`}
                  alt={`Pokemon Number: ${number}`}
                />
              </li>
            );
          } else {
            list.push(
              <li key={number}>
                <Link to={`/pokedex/${i}`}>
                  #{number} {namesArray[i - 1]}
                </Link>
                <img
                  src={process.env.PUBLIC_URL + `/sprites/${number}MS.png`}
                  alt={`Pokemon Number: ${number}`}
                />
              </li>
            );
          }
        }

        setList(list);
      } catch (error) {
        console.log(error);
      }
    };

    createList();
  }, [currentUser.uid]);

  return (
    <div>
      <p>Original 151</p>
      {list && <ul>{list}</ul>}
    </div>
  );
}

export default DexList;
