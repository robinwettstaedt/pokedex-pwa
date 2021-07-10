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

export const ActionWrapper = styled.div`
  height: 90vh;
  width: 90vw;
  max-width: 600px;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};
  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    padding: 3rem 2rem;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 800px;
    padding: 3rem 1rem;
  }
`;

export const HeaderWrapper = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5vh;
`;

export const Heading = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 3.5rem;
  }
`;

export const HeaderText = styled.div`
  text-align: center;
  font-size: 1rem;

  @media only screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

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
  height: 48px;
  padding: 1rem;
  font-size: 1.5rem;

  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};
  border-radius: 20px;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (min-width: 768px) {
    height: 60px;
    max-width: 500px;
    padding: 1.5rem;
    font-size: 1.8rem;
    border-radius: 30px;
  }
`;

export const AuthLink = styled(Link)`
  color: ${(props) => props.theme.primaryFontColor};
  /* text-decoration: none; */
  @media only screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const Button = styled.button`
  width: 180px;
  height: 48px;
  padding: 1rem 2rem;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};
  border-radius: 20px;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (min-width: 768px) {
    width: 220px;
    height: 60px;
    padding: 1rem 2rem;
    font-size: 2rem;
    border-radius: 30px;
  }
`;
