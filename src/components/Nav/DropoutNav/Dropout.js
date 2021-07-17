import React from 'react';
import ThemeChanger from './DropoutElements/ThemeChanger';
import SignOut from './DropoutElements/SignOut';
import ClosingButton from './DropoutElements/ClosingButton';
import Background from './DropoutElements/Background';
import HomeLink from './DropoutElements/HomeLink';
import ListLink from './DropoutElements/ListLink';
import ProfileLink from './DropoutElements/ProfileLink';
import GitHubLink from './DropoutElements/GitHubLink';
import { Wrapper, Spacer, WideWrapper, WideSpacer } from './styles/styles';
import Media from 'react-media';

const Dropout = ({ isOpen, setDropoutOpen }) => {
  if (isOpen) {
    return (
      <>
        <Background setDropoutOpen={setDropoutOpen} />
        <Media query="(min-width: 1200px)">
          {(matches) =>
            matches ? (
              <WideWrapper
                initial={{ x: 200 }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 0.05,
                }}
              >
                <WideSpacer>
                  <ClosingButton setDropoutOpen={setDropoutOpen} />
                  <HomeLink setDropoutOpen={setDropoutOpen} />
                  <ListLink setDropoutOpen={setDropoutOpen} />
                  <ProfileLink setDropoutOpen={setDropoutOpen} />
                  <ThemeChanger />
                  <GitHubLink />
                  <SignOut />
                </WideSpacer>
                <Spacer />
              </WideWrapper>
            ) : (
              <Wrapper
                initial={{ x: 100 }}
                animate={{
                  x: 0,
                }}
                transition={{
                  duration: 0.05,
                }}
              >
                <Spacer>
                  <ClosingButton setDropoutOpen={setDropoutOpen} />
                  <HomeLink setDropoutOpen={setDropoutOpen} />
                  <ListLink setDropoutOpen={setDropoutOpen} />
                  <ProfileLink setDropoutOpen={setDropoutOpen} />
                  <ThemeChanger />
                  <GitHubLink />
                  <SignOut />
                </Spacer>
                <Spacer />
              </Wrapper>
            )
          }
        </Media>
      </>
    );
  } else {
    return null;
  }
};

export default Dropout;
