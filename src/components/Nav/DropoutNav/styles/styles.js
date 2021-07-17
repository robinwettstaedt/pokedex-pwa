import styled from 'styled-components';
import { motion } from 'framer-motion';

// styles for anything below 1200 view width
export const Wrapper = styled(motion.div)`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  height: 100%;
  width: 60%;
  left: 70%;
  position: fixed;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};

  @media only screen and (min-width: 768px) {
    width: 40%;
    left: 80%;
  }
`;

export const Spacer = styled.div`
  width: 50%;
  height: 100%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    padding: 4rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 6rem;
  }
`;

// styles for anything above 1200 view width
export const WideWrapper = styled(motion.div)`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  height: 100%;
  width: 60%;
  left: 60%;
  position: fixed;
  z-index: 3;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.boxShadow};
`;

export const WideSpacer = styled.div`
  height: 100%;
  width: 60%;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    padding: 4rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 6rem;
  }
`;
