import React, { useState } from 'react';
import Search from './NavElements/Search/Search';
import Dropout from './DropoutNav/Dropout';
import MenuButton from './NavElements/MenuButton';
import Avatar from './NavElements/Avatar';
import { NavWrapper, RightWrapper } from './styles/styles';

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
