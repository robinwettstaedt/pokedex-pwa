import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem ${(props) => props.theme.outsideMobilePaddingLeftRight};
  gap: 12px;

  @media only screen and (min-width: 768px) {
    gap: 24px;
    padding: 1rem ${(props) => props.theme.outsideTabletPaddingLeftRight};
  }

  @media only screen and (min-width: 1024px) {
    gap: 28px;
    padding: 1rem ${(props) => props.theme.outsideDesktopPaddingLeftRight};
  }
`;

export const CardWrapper = styled.div`
  width: 95vw;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    width: 90vw;
  }
  @media only screen and (min-width: 1600px) {
    width: 75vw;
  }
  @media only screen and (min-width: 2000px) {
    width: 70vw;
  }
`;

export const Heading = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  font-size: 2.5rem;
  align-self: start;

  @media only screen and (min-width: 768px) {
    font-size: 3rem;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 5rem;
  }

  @media only screen and (min-width: 1200px) {
    margin-left: 4vw;
  }

  @media only screen and (min-width: 1600px) {
    margin-left: 11vw;
  }

  @media only screen and (min-width: 2000px) {
    margin-left: 14vw;
  }
`;

export const Button = styled.button`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  height: 60px;
  font-size: 1.2rem;

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    border-radius: ${(props) => props.theme.tabletBorderRadius};
    font-size: 1.5rem;
    height: 80px;
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.8rem;
    height: 100px;
  }
`;

export const BottomSpacer = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    height: 80px;
  }

  @media only screen and (min-width: 1024px) {
    height: 100px;
  }
`;

export const SpacerDot = styled.div`
  width: 10px;
  height: 10px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.primaryFontColor};

  @media only screen and (min-width: 768px) {
    width: 15px;
    height: 15px;
  }

  @media only screen and (min-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;

export const EmptyWrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryCardBackgroundColor};

  border-radius: ${(props) => props.theme.primaryBorderRadius};
  border: ${(props) => props.theme.primaryBorderValue};
  box-shadow: ${(props) => props.theme.primaryBoxShadowValue};

  @media only screen and (min-width: 768px) {
    height: 80px;
    font-size: 1.2rem;
  }

  @media only screen and (min-width: 1024px) {
    height: 100px;
    font-size: 1.5rem;
  }
`;
