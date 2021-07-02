import styled from 'styled-components';

export const TypeButton = styled.div`
  color: white;
  background: ${(props) => props.theme[props.type]};

  width: 90px;
  height: 30px;

  font-size: 1.25rem;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 100px;
    height: 40px;

    font-size: 1.6rem;
    border-radius: 8px;
  }

  @media only screen and (min-width: 1024px) {
    width: 150px;
    height: 60px;

    font-size: 2.2rem;
    border-radius: 12px;
  }
`;
