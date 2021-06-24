import React from 'react';
import styled from 'styled-components';
import Type from './Type';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 95vw;
  height: 60px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  .text {
    font-weight: medium;
    font-size: 1.5rem;
  }
  .types {
    display: flex;
    /* justify-content: center; */
  }
  .second-type {
    margin-left: 0.6rem;
  }
`;

function Name({ firstType, secondType }) {
  return (
    <>
      <Wrapper>
        <span className="text">Type</span>
        <span className="types">
          {firstType && <Type type={firstType} />}
          {secondType && (
            <div className="second-type">
              <Type type={secondType} />
            </div>
          )}
        </span>
      </Wrapper>
    </>
  );
}

export default Name;
