import styled from 'styled-components';

export const AvatarImage = styled.img`
  width: 50vw;
  height: 50vw;
  max-width: 320px;

  border-radius: 50%;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (min-width: 1024px) {
    max-width: 380px;
  }
`;

export const Username = styled.div`
  font-size: 2rem;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 4rem;
  }
`;

export const CaughtWrapper = styled.div`
  width: 100%;
  font-size: 1.2rem;

  display: flex;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
    margin-top: 2rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 2.5rem;
    margin-top: 3rem;
  }
`;
