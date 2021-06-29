import styled from 'styled-components';

export const ImageWrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  width: 95vw;
  height: 95vw;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue}; ;
`;

export const PokemonImage = styled.img`
  width: 90%;
  height: 90%;
`;
