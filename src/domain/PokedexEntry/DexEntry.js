import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import app from '../../utils/Firebase';
import { AuthContext } from '../../contexts/AuthContext';
import CatchButton from './DexEntryElements/CatchButton/CatchButton';
import Name from './DexEntryElements/Name/Name';
import Stats from './DexEntryElements/Stats/Stats';
import { Wrapper, GridWrapper, BottomSpacer, SpacerDot } from './styles/styles';
import Dimensions from './DexEntryElements/Dimensions/Dimensions';
import Abilities from './DexEntryElements/Abilities/Abilities';
import Types from './DexEntryElements/Types/Types';
import Image from './DexEntryElements/PokemonImage/Image';

const DexEntry = () => {
  // Firestore query states
  const [caughtList, setCaughtList] = useState({});

  const [isCaught, setIsCaught] = useState(false);
  const [apiData, setAPIData] = useState(null);
  const [firstType, setFirstType] = useState('');
  const [secondType, setSecondType] = useState('');

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

  const fetchFirestoreData = async () => {
    try {
      const db = app.firestore();
      let dbRef = db.collection('caughtPokemon').doc(currentUser.uid);

      const doc = await dbRef.get();
      const data = doc.data();
      const caughtList = data.caughtPokemonList;

      setCaughtList(caughtList);
      setIsCaught(caughtList[id].caught);
    } catch (error) {
      console.log('There has been an error: ', error);
    }
  };

  const getDetails = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setAPIData(response.data);
    if (response.data.types.length === 1) {
      setFirstType(response.data.types[0].type.name);
    } else {
      setFirstType(response.data.types[0].type.name);
      setSecondType(response.data.types[1].type.name);
    }
  };

  useEffect(() => {
    fetchFirestoreData();
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser.uid, id, routeID]);

  if (apiData) {
    return (
      <>
        <Wrapper>
          <GridWrapper>
            <Name
              pokemonName={apiData.forms[0].name}
              number={routeID}
              isCaught={isCaught}
            />
            {firstType && !secondType && <Types firstType={firstType} />}
            {firstType && secondType && (
              <Types firstType={firstType} secondType={secondType} />
            )}
            <Image routeID={routeID} />

            <Stats stats={apiData.stats} type={firstType} />
            <Dimensions height={apiData.height} weight={apiData.weight} />
            <Abilities abilities={apiData.abilities} />
          </GridWrapper>
          <BottomSpacer>
            <SpacerDot />
          </BottomSpacer>
        </Wrapper>
        <CatchButton
          isCaught={isCaught}
          setIsCaught={setIsCaught}
          caughtList={caughtList}
          fetchFirestoreData={fetchFirestoreData}
          id={id}
        />
      </>
    );
  } else {
    return null;
  }
};

export default DexEntry;
