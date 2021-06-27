import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 95vw;
  height: 120px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  .height,
  .weight {
    font-weight: medium;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
  }
`;
// git sunday update
function Name({ height, weight }) {
  return (
    <>
      <Wrapper>
        <div className="height">
          <span>Height:</span>
          <span>{height / 10} m</span>
        </div>
        <div className="weight">
          <span>Weight:</span>
          <span>{weight / 10} kg</span>
        </div>
      </Wrapper>
    </>
  );
}

export default Name;
