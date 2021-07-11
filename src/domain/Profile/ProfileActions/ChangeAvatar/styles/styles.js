import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;

  color: ${(props) => props.theme.primaryFontColor};
`;

export const ActionWrapper = styled.div`
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

export const FileInput = styled.input`
  display: none;
`;

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 1rem 2rem;
  font-size: 1.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: ${(props) => (props.isBottom ? '24px' : '0')};

  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};
  border-radius: 20px;
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (min-width: 768px) {
    max-width: 600px;
    font-size: 2rem;
    border-radius: 30px;
  }

  @media only screen and (min-width: 1024px) {
    width: 80%;
    font-size: 2.5rem;
  }
`;
