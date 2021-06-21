import React from 'react';

function backup() {
  // creates the list of all 151 entries and
  // gets the sprite images from the public folder
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
      // if (docData.caughtPokemonList[i].caught) {
      //   list.push(
      //     <li key={number}>
      //       <Link to={`/pokedex/${i}`}>
      //         Caught! #{number} {namesArray[i - 1]}
      //       </Link>
      //       <img
      //         src={process.env.PUBLIC_URL + `/sprites/${number}MS.png`}
      //         alt={`Pokemon Number: ${number}`}
      //       />
      //     </li>
      //   );
      // } else {
      list.push(
        <li key={number}>
          <Link to={`/pokedex/${i}`}>
            Not Caught! #{number} {namesArray[i - 1]}
          </Link>
          <img
            src={process.env.PUBLIC_URL + `/sprites/${number}MS.png`}
            alt={`Pokemon Number: ${number}`}
          />
        </li>
      );
    }
    // }

    return list;
  };
  return <div></div>;
}

export default backup;
