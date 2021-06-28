import React, { useEffect } from 'react';
import { Wrapper } from './styles/styles';

const Stats = ({ stats }) => {
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
};

export default Stats;
