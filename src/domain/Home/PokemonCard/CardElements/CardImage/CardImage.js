import React, { useState, useEffect } from 'react';
import app from '../../../../../utils/Firebase';
import { ImageWrapper, PokemonImage } from './styles/styles';

const CardImage = ({ routeID }) => {
  const [pokemonImage, setPokemonImage] = useState('');

  useEffect(() => {
    const getPokemonImage = async () => {
      const url = await app
        .storage()
        .ref()
        .child(`pokemonImages/${routeID}.png`)
        .getDownloadURL();

      setPokemonImage(url);
    };

    getPokemonImage();
  }, [routeID]);

  return (
    <>
      <ImageWrapper>
        <PokemonImage src={pokemonImage} alt={`Pokemon Number: ${routeID}`} />
      </ImageWrapper>
    </>
  );
};

export default CardImage;
