import React from 'react';
import { DroputBackground } from './styles/styles';

const Background = ({ setDropoutOpen }) => {
  const handleClick = () => {
    setDropoutOpen(false);
  };

  return (
    <>
      <DroputBackground onClick={handleClick} />
    </>
  );
};

export default Background;
