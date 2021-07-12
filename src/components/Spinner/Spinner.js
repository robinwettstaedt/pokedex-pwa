import React from 'react';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: #f95959;
`;

const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <ClipLoader css={override} size={150} />
    </SpinnerWrapper>
  );
};

export default Spinner;
