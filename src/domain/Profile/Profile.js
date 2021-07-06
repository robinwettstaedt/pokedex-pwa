import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import app from '../../utils/Firebase';
import { Wrapper, CardWrapper, ButtonWrapper, Button } from './styles/styles';
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
        <ButtonWrapper>
          <Button to="/profile/avatar">Change Picture</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button to="/profile/username">Change Username</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button to="/profile/passwordchange">Change Password</Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button red={true} to="/profile/delete">
            Delete Account
          </Button>
        </ButtonWrapper>
      </CardWrapper>
    </Wrapper>
  );
}

export default Profile;
