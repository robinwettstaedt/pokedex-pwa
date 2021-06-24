import React, { useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 95vw;
  height: 200px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`;

function Stats({ stats }) {
  useEffect(() => {
    console.log(stats[0].stat.name, stats[0].base_stat);
    console.log(stats[1].stat.name, stats[1].base_stat);
    console.log(stats[2].stat.name, stats[2].base_stat);
    console.log(stats[3].stat.name, stats[3].base_stat);
    console.log(stats[4].stat.name, stats[4].base_stat);
    console.log(stats[5].stat.name, stats[5].base_stat);
  }, [stats]);

  return (
    <>
      <Wrapper>Here will be the stats</Wrapper>
    </>
  );
}

export default Stats;
