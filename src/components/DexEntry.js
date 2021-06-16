import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DexEntry() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [picture, setPicture] = useState(null);

  const { id } = useParams();

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

  // useEffect(() => {
  //   fetchData();
  //   console.log(data);
  // }, []);

  if (isLoading) {
    return <h1>is Loading....</h1>;
  }
  if (isError) {
    return <h1>Errrrrooorrr</h1>;
  }
  return (
    <div>
      <p>This will be pokemon number: {id}</p>
    </div>
  );
}

export default DexEntry;
