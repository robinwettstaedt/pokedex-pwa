import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.primaryFontColor};
`;

export const LoginWrapper = styled.div`
  height: 90vh;
  width: 90vw;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  color: ${(props) => props.theme.primaryFontColor};

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1024px) {
  }
`;

export const HeaderWrapper = styled.div`
  height: 30%;
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10vh;
`;

export const Heading = styled.div`
  font-size: 2rem;
`;

export const HeaderText = styled.div``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const Label = styled.label`
  display: none;
`;

export const Input = styled.input`
  width: 80vw;
  max-width: 400px;
  height: 36px;
  padding: 1rem;

  background: ${(props) => props.theme.primaryCardBackgroundColor};
  border-radius: 20px;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const SignUpLink = styled(Link)``;
