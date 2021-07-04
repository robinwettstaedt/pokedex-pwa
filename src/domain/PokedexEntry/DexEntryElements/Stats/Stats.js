import React, { useEffect } from 'react';
import {
  Wrapper,
  StatsBackground,
  BarsWrapper,
  StatsBarEmpty,
  StatsBarFilled,
  NumbersWrapper,
  Number,
  StatNamesWrapper,
  Stat,
  BarWithStatWrapper,
} from './styles/styles';

const Stats = ({ stats, type }) => {
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
      <Wrapper>
        <StatsBackground type={type}>
          <NumbersWrapper>
            <Number>250</Number>
            <Number>200</Number>
            <Number>150</Number>
            <Number>100</Number>
            <Number>50</Number>
            <Number>0</Number>
          </NumbersWrapper>

          <BarsWrapper>
            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled />
              </StatsBarEmpty>
              <Stat>HP</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled />
              </StatsBarEmpty>
              <Stat>HP</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled />
              </StatsBarEmpty>
              <Stat>HP</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled />
              </StatsBarEmpty>
              <Stat>HP</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled />
              </StatsBarEmpty>
              <Stat>HP</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled />
              </StatsBarEmpty>
              <Stat>HP</Stat>
            </BarWithStatWrapper>
          </BarsWrapper>
        </StatsBackground>
      </Wrapper>
    </>
  );
};

export default Stats;
