import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PhraseWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const CatchPhrase = styled.div`
  font-size: 1.2rem;
  margin-right: 0.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.9rem;
  }
`;

export const IMG = styled.img`
  height: 20px;

  @media only screen and (min-width: 768px) {
    display: none;
  }

  /* @media only screen and (min-width: 1024px) {
    height: 24px;
    display: block;
  } */
`;

export const TimeWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
`;

export const Date = styled.div`
  font-size: 1.2rem;
  margin-left: 0.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.4rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.9rem;
  }
`;
