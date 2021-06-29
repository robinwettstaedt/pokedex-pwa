import React from 'react';
import ThemeChanger from './DropoutElements/ThemeChanger';
import SignOut from './DropoutElements/SignOut';
import ClosingButton from './DropoutElements/ClosingButton';
import Background from './DropoutElements/Background';
import HomeLink from './DropoutElements/HomeLink';
import ListLink from './DropoutElements/ListLink';
import ProfileLink from './DropoutElements/ProfileLink';
import GitHubLink from './DropoutElements/GitHubLink';
import { Wrapper, Spacer } from './styles/styles';

const Dropout = ({ isOpen, setDropoutOpen }) => {
  if (isOpen) {
    return (
      <>
        <Background setDropoutOpen={setDropoutOpen} />
        <Wrapper>
          <Spacer>
            <ClosingButton setDropoutOpen={setDropoutOpen} />
            <ThemeChanger />
            <HomeLink setDropoutOpen={setDropoutOpen} />
            <ListLink setDropoutOpen={setDropoutOpen} />
            <ProfileLink setDropoutOpen={setDropoutOpen} />
            <GitHubLink />
            <SignOut />
          </Spacer>
          <Spacer />
        </Wrapper>
      </>
    );
  } else {
    return null;
  }
};

export default Dropout;
