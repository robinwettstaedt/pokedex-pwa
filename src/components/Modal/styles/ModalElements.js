import styled from 'styled-components';

export const ModalBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;

  width: 92.5%;
  max-width: 600px;
  padding: 2rem 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    padding: 2rem;
    border-radius: ${(props) => props.theme.tabletBorderRadius};
  }

  @media only screen and (min-width: 1024px) {
  }
`;

export const ModalContent = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

export const ModalButton = styled.button`
  width: 100%;
  margin-top: 32px;
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
`;

// export const Button = styled.button`
//   width: 100%;
//   max-width: 400px;
//   padding: 1rem 2rem;
//   font-size: 1.5rem;

//   margin-top: ${(props) => (props.isBottom ? '24px' : '0')};

//   color: ${(props) => props.theme.primaryFontColor};
//   background: ${(props) => props.theme.primaryBackgroundColor};
//   border-radius: 20px;
//   border: ${(props) => props.theme.primaryBorderValue};
//   box-shadow: ${(props) => props.theme.boxShadow};

//   @media only screen and (min-width: 768px) {
//     max-width: 600px;
//     font-size: 2rem;
//     border-radius: 30px;
//   }

//   @media only screen and (min-width: 1024px) {
//     width: 80%;
//     font-size: 2.5rem;
//   }
