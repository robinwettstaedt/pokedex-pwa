import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  height: 95vw;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    height: 47.5vw;
  }
`;

export const StatsBackground = styled.div`
  height: 90%;
  width: 100%;
  padding: 1.5rem 2rem 1rem;

  display: grid;
  grid-template-columns: 1fr, 15fr;
  grid-template-rows: 6fr, 1fr;
  /* grid-template-areas: 'numbers | bars | bars' 'none | stat-names stat-names'; */

  background-color: ${(props) => props.theme[props.type]};
  border-radius: ${(props) => props.theme.primaryBorderRadius};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }
`;

export const NumbersWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 6;

  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Number = styled.div`
  font-size: 1rem;
`;

export const BarsWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 16;
  grid-row-start: 1;
  grid-row-end: 7;

  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatsBarEmpty = styled.div`
  height: 90%;
  width: 18px;
  border-radius: ${(props) => props.theme.tabletBorderRadius};
  background-color: ${(props) => props.theme.statsBarBackgroundColor}; ;
`;

export const StatsBarFilled = styled.div`
  height: 70%;
  border-radius: 50%;
  background-color: 'white';
`;

export const StatNamesWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 8;
  grid-row-start: 6;
  grid-row-end: 7;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BarWithStatWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Stat = styled.div`
  font-size: 1rem;
  /* margin-top: 0.5rem; */
`;
