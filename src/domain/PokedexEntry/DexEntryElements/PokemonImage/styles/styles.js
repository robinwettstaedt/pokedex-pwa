import styled from 'styled-components';

export const ImageWrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  height: 95vw;
  /* padding: 1rem; */

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    height: 47.5vw;
  }

  @media only screen and (min-width: 1200px) {
    height: 35vw;
  }
`;

export const PokemonImage = styled.img`
  width: 85%;
  height: 85%;
`;
