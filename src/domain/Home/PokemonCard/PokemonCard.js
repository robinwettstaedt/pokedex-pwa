import React, { useState, useEffect } from 'react';
import axios from 'axios';
import app from '../../../utils/Firebase';
import { Wrapper } from './styles/styles';
import Image from '../../PokedexEntry/DexEntryElements/PokemonImage/Image';
import CardTypes from './CardElements/CardTypes/CardTypes';

const PokemonCard = ({ number, dateCaught, first }) => {
  const [firstType, setFirstType] = useState('');
  const [secondType, setSecondType] = useState('');
  const [pokemonImage, setPokemonImage] = useState(null);

  let pictureID;
  if (number < 10) {
    pictureID = `00${number}`;
  } else if (number > 9 && number < 100) {
    pictureID = `0${number}`;
  } else {
    pictureID = `${number}`;
  }

  const getDetails = async () => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${number}`
    );
    if (response.data.types.length === 1) {
      setFirstType(response.data.types[0].type.name);
    } else {
      setFirstType(response.data.types[0].type.name);
      setSecondType(response.data.types[1].type.name);
    }
  };

  const getPokemonImage = async () => {
    const url = await app
      .storage()
      .ref()
      .child(`pokemonImages/${pictureID}.png`)
      .getDownloadURL();

    setPokemonImage(url);
  };

  useEffect(() => {
    getDetails();
    getPokemonImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      {first ? <p>Latest catch</p> : <p>Previous Catch</p>}
      {firstType && <p>{firstType}</p>}
      {secondType && <p>{secondType}</p>}
      <CardTypes firstType={firstType} secondType={secondType} />
      <Image routeID={pictureID} />
      {/* <img
        width={20}
        src={pokemonImage}
        // src={process.env.PUBLIC_URL + `/images/${routeID}.png`}
        alt={`Pokemon Number: ${pictureID}`}
      /> */}
      <p>number: #{pictureID}</p>
      <p>
        I was caught at:
        {dateCaught.toDate().toString().substring(4, 15)}
      </p>
    </Wrapper>
  );
};

export default PokemonCard;
