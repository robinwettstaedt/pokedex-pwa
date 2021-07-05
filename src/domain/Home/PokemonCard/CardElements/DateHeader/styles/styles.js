import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (min-width: 768px) {
    padding: 1.5rem;
    height: 10vh;
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }

  @media only screen and (min-width: 1024px) {
    padding: 2rem;
  }
`;

export const PhraseWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const CatchPhrase = styled.div`
  font-size: 1.2rem;
  margin-right: 0.5rem;
`;

export const IMG = styled.img`
  height: 20px;

  @media only screen and (min-width: 768px) {
    height: 32px;
  }

  @media only screen and (min-width: 1024px) {
    height: 42px;
    margin-left: 1rem;
  }
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Date = styled.div`
  font-size: 1.2rem;
  margin-left: 0.5rem;
`;
