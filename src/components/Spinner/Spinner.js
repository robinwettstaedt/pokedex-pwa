import { css } from '@emotion/react';
import RingLoader from 'react-spinners/ClipLoader';
import React from 'react';
import SpinnerWrapper from './SpinnerWrapper';

function Spinner() {
  const override = css``;

  return (
    <SpinnerWrapper>
      <RingLoader color="red" loading={true} css={override} size={250} />
    </SpinnerWrapper>
  );
}

export default Spinner;
