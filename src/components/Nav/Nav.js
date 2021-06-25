import React, { useState } from 'react';
import Search from './Search';
import Dropout from './DropoutNav/Dropout';
import MenuButton from './MenuButton';
import Avatar from './Avatar';
import { NavWrapper, RightWrapper } from './styles/NavElements';

function Nav() {
  const [dropoutOpen, setDropoutOpen] = useState(false);

  return (
    <NavWrapper>
      <Avatar />
      <RightWrapper>
        <Search />
        <MenuButton dropoutOpen={dropoutOpen} setDropoutOpen={setDropoutOpen} />
      </RightWrapper>
      <Dropout isOpen={dropoutOpen} />
    </NavWrapper>
  );
}

export default Nav;
