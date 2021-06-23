import React from 'react';

const PokemonCard = ({ number, dateCaught }) => {
  // const getDetails = async (number) => {
  //   const response = await axios.get(
  //     `https://pokeapi.co/api/v2/pokemon/${number}`
  //   );
  //   console.log(response.data);
  // };
  return (
    <div>
      <p>
        Im the card number: {number}, I was caught at
        {dateCaught.toDate().toString()}
      </p>
    </div>
  );
};

export default PokemonCard;
