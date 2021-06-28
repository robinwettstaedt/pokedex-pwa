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
`;
