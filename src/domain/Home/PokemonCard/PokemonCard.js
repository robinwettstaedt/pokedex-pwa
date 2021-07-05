import React, { useState, useEffect } from 'react';
import axios from 'axios';
import app from '../../../utils/Firebase';
import { Wrapper } from './styles/styles';
import Image from '../../PokedexEntry/DexEntryElements/PokemonImage/Image';
import CardTypes from './CardElements/CardTypes/CardTypes';
import CardName from './CardElements/CardName/CardName';
import DateHeader from './CardElements/DateHeader/DateHeader';

const PokemonCard = ({ number, dateCaught, first }) => {
  const [apiData, setAPIData] = useState(null);
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
    setAPIData(response.data);
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
      {apiData && (
        <>
          <DateHeader
            first={first}
            date={dateCaught.toDate().toString().substring(4, 15)}
          />
          <CardName pokemonName={apiData.forms[0].name} number={pictureID} />
          <CardTypes firstType={firstType} secondType={secondType} />
          <Image routeID={pictureID} />
        </>
      )}
    </Wrapper>
  );
};

export default PokemonCard;
