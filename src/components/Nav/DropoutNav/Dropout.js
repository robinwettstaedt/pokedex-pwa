import React from 'react';
import styled from 'styled-components';
import { SearchContext } from '../../../contexts/SearchContext';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  position: absolute;
  width: 20vw;
  height: 60px;
  padding: 1rem;
  top: 60px;

  display: flex;
  align-items: center;
`;

const Dropout = ({ isOpen }) => {
  if (isOpen) {
    return <Wrapper>{isOpen && <div>Nav open</div>}</Wrapper>;
  } else {
    return null;
  }
};

export default Dropout;
