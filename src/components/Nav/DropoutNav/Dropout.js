import React from 'react';
import styled from 'styled-components';
import ThemeChanger from './DropoutElements/ThemeChanger/ThemeChanger';
import SignOut from './DropoutElements/SignOut/SignOut';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  position: absolute;
  width: 60%;
  height: 90%;
  top: 60px;
  left: 70%;
  position: fixed;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const Spacer = styled.div`
  width: 50%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
`;

const Dropout = ({ isOpen }) => {
  if (isOpen) {
    return (
      <Wrapper>
        <Spacer>
          <ThemeChanger />
          <SignOut />
        </Spacer>
        <Spacer />
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Dropout;
