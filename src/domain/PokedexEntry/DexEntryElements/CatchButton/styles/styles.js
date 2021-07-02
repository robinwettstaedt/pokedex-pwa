import styled from 'styled-components';
import { motion } from 'framer-motion';

// CatchButton Components
export const BallWrapper = styled(motion.div)`
  position: fixed;
  left: 1.2rem;
  bottom: 1.2rem;

  @media only screen and (min-width: 768px) {
    left: 1.5rem;
    bottom: 1.5rem;
  }

  @media only screen and (min-width: 1024px) {
    left: 2rem;
    bottom: 2rem;
  }
`;

export const SVG = styled.svg`
  width: 70px;
  height: 70px;
  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media only screen and (min-width: 1024px) {
    width: 120px;
    height: 120px;
  }
`;
