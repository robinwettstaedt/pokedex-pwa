import React from 'react';
import styled from 'styled-components';
import ThemeChanger from './ThemeChanger';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  position: absolute;
  width: 20%;
  height: 90%;
  padding: 1rem;
  top: 60px;
  left: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

const Dropout = ({ isOpen }) => {
  if (isOpen) {
    return (
      <Wrapper>
        <ThemeChanger />
      </Wrapper>
    );
  } else {
    return null;
  }
};

export default Dropout;
