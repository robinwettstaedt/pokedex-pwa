import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../utils/Firebase';

function DexList() {
  const [list, setList] = useState([]);
  const [sprite, setSprite] = useState('');

  useEffect(() => {
    // creating the list with all 151 entries
    const createListings = () => {
      const list = [];
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
          <li key={number}>
            <Link to={`/pokedex/${i}`}>Name of pokemon</Link>
            <img
              src={process.env.PUBLIC_URL + `/sprites/${number}MS.png`}
              alt={`Pokemon Number: ${number}`}
            />
          </li>
        );
      }

      return list;
    };

    const listings = createListings();
    setList(listings);
  }, []);

  return (
    <div>
      <p>Original 151</p>
      <ul>{list}</ul>
    </div>
  );
}

export default DexList;
