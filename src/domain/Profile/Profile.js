import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../utils/Firebase';
import { Wrapper, CardWrapper, ButtonWrapper } from './styles/styles';
import AvatarCard from './ProfileElements/AvatarCard/AvatarCard';

function Profile() {
  const { currentUser } = useContext(AuthContext);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchFirestoreData = async () => {
      try {
        const db = app.firestore();
        let dbRef = db.collection('caughtPokemon').doc(currentUser.uid);

        const doc = await dbRef.get();
        const data = doc.data();
        const caughtList = data.caughtPokemonList;

        let caughtCount = 0;

        for (let i = 1; i < 152; i++) {
          if (caughtList[i].caught === true) {
            caughtCount++;
          }
          setCount(caughtCount);
        }
      } catch (error) {
        console.log('There has been an error: ', error);
      }
    };

    fetchFirestoreData();
  }, [currentUser.uid]);

  return (
    <Wrapper>
      <AvatarCard count={count} />
      <CardWrapper>
        <Link to="/profile/delete">Delete your Account</Link>
        <br />
        <Link to="/profile/avatar">Change your Avatar Image</Link>
        <br />
        <Link to="/profile/username">Change your Username</Link>
        <br />
        <Link to="/profile/passwordchange">Change your Password</Link>
      </CardWrapper>
    </Wrapper>
  );
}

export default Profile;
