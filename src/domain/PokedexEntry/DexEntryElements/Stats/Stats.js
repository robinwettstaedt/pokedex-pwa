import React from 'react';
import {
  Wrapper,
  StatsBackground,
  BarsWrapper,
  StatsBarEmpty,
  StatsBarFilled,
  NumbersWrapper,
  Number,
  Stat,
  BarWithStatWrapper,
} from './styles/styles';

const Stats = ({ stats, type }) => {
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
                <StatsBarFilled height={100 / (250 / stats[0].base_stat)} />
              </StatsBarEmpty>
              <Stat>HP</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled height={100 / (250 / stats[1].base_stat)} />
              </StatsBarEmpty>
              <Stat>ATT</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled height={100 / (250 / stats[2].base_stat)} />
              </StatsBarEmpty>
              <Stat>DEF</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled height={100 / (250 / stats[3].base_stat)} />
              </StatsBarEmpty>
              <Stat>S.A</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled height={100 / (250 / stats[4].base_stat)} />
              </StatsBarEmpty>
              <Stat>S.D</Stat>
            </BarWithStatWrapper>

            <BarWithStatWrapper>
              <StatsBarEmpty>
                <StatsBarFilled height={100 / (250 / stats[5].base_stat)} />
              </StatsBarEmpty>
              <Stat>SPD</Stat>
            </BarWithStatWrapper>
          </BarsWrapper>
        </StatsBackground>
      </Wrapper>
    </>
  );
};

export default Stats;
