import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 ${(props) => props.theme.outsideMobilePaddingLeftRight};

  @media only screen and (min-width: 768px) {
    padding: 0 ${(props) => props.theme.outsideTabletPaddingLeftRight};
  }

  @media only screen and (min-width: 1024px) {
    padding: 0 ${(props) => props.theme.outsideDesktopPaddingLeftRight};
  }
`;

export const ActionWrapper = styled.div`
  width: 100%;
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
  margin-bottom: 32px;
`;

export const HeaderText = styled.div`
  text-align: center;
  font-size: 1.5rem;

  @media only screen and (min-width: 768px) {
    font-size: 2rem;
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
