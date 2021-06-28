import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthContext';
import app from '../../../../utils/Firebase';
import firebase from 'firebase';
import { BallWrapper } from './styles/styles';

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
    setRotation(rotation === 0 ? 1080 : 0);
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
    <BallWrapper
      onTap={toggleAnimation}
      onClick={catchPokemon}
      animate={{
        x: 0,
        y: 0,
        scale: 1,
        rotate: rotation,
      }}
      transition={{
        duration: 3,
        type: 'spring',
        damping: 20,
      }}
    >
      <svg
        width="70"
        height="70"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1" fill="white">
          <path d="M100 50C100 63.2608 94.7322 75.9785 85.3553 85.3553C75.9785 94.7322 63.2608 100 50 100C36.7392 100 24.0215 94.7322 14.6447 85.3553C5.26785 75.9785 2.00233e-06 63.2608 0 50L50 50H100Z" />
        </mask>
        <path
          d="M100 50C100 63.2608 94.7322 75.9785 85.3553 85.3553C75.9785 94.7322 63.2608 100 50 100C36.7392 100 24.0215 94.7322 14.6447 85.3553C5.26785 75.9785 2.00233e-06 63.2608 0 50L50 50H100Z"
          fill="white"
          stroke="black"
          stroke-width="4"
          mask="url(#path-1-inside-1)"
        />
        <mask id="path-2-inside-2" fill="white">
          <path d="M100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 1.00116e-06 50 0C36.7392 -1.00116e-06 24.0215 5.26784 14.6447 14.6447C5.26785 24.0215 2.00233e-06 36.7392 0 50L50 50H100Z" />
        </mask>
        <path
          d="M100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 1.00116e-06 50 0C36.7392 -1.00116e-06 24.0215 5.26784 14.6447 14.6447C5.26785 24.0215 2.00233e-06 36.7392 0 50L50 50H100Z"
          fill={isCaught ? '#D04D4D' : 'white'}
          stroke="black"
          stroke-width="4"
          mask="url(#path-2-inside-2)"
        />
        <rect y="46" width="100" height="8.5" rx="1" fill="black" />
        <circle cx="49.75" cy="50.25" r="16.25" fill="black" />
        <circle cx="49.75" cy="50.25" r="11.25" fill="white" />
      </svg>
    </BallWrapper>
  );
};

export default CatchButton;
