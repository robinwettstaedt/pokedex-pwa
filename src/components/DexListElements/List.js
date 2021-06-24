import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../utils/Firebase';
import ListItem from './ListItem';

const List = () => {
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
          list.push(
            <ListItem
              key={number}
              number={number}
              index={i}
              caught={caughtList[i].caught}
            ></ListItem>
          );
        }

        setList(list);
      } catch (error) {
        console.log(error);
      }
    };

    createList();
  }, [currentUser.uid]);

  return <div>{list && <ul>{list}</ul>}</div>;
};

export default List;
