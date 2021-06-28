import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthContext';
import app from '../../../utils/Firebase';
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrosshairs } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const CatchButton = ({
  isCaught,
  setIsCaught,
  caughtList,
  fetchFirestoreData,
  id,
}) => {
  const { currentUser } = useContext(AuthContext);
  const [rotation, setRotation] = useState(0);

  // animation toggle function
  const toggleAnimation = () => {
    setRotation(rotation === 0 ? 900 : 0);
  };
  // function to change the caught value of this route's pokemon in firestore
  const catchPokemon = async () => {
    let listReference = caughtList;
    if (isCaught === false) {
      listReference[id].caught = true;
      listReference[id].caughtAt = firebase.firestore.Timestamp.now();
      setIsCaught(true);
    } else {
      listReference[id].caught = false;
    }

    const db = app.firestore();
    await db.collection('caughtPokemon').doc(currentUser.uid).set({
      uid: currentUser.uid,
      caughtPokemonList: listReference,
    });

    fetchFirestoreData();
  };

  return (
    <div>
      <motion.div
        onTap={toggleAnimation}
        onClick={catchPokemon}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: rotation,
        }}
        transition={{
          duration: 2.5,
          type: 'spring',
          damping: 30,
        }}
      >
        <BallIcon icon={faCrosshairs} size="4x" />
      </motion.div>
    </div>
  );
};

export default CatchButton;

const BallIcon = styled(FontAwesomeIcon)`
  color: white;
`;
