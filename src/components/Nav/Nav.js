import React, { useState, useContext } from 'react';
import Search from './NavElements/Search/Search';
import Dropout from './DropoutNav/Dropout';
import MenuButton from './NavElements/MenuButton';
import Avatar from './NavElements/Avatar';
import { NavWrapper, PlaceholderNav, RightWrapper } from './styles/styles';
import { AuthContext } from '../../contexts/AuthContext';

function Nav() {
  const [dropoutOpen, setDropoutOpen] = useState(false);
  const { pending } = useContext(AuthContext);

  if (pending) {
    return null;
  }

  return (
    <>
      <Dropout isOpen={dropoutOpen} setDropoutOpen={setDropoutOpen} />
      <NavWrapper>
        <Avatar />
        <RightWrapper>
          <Search />
          <MenuButton
            dropoutOpen={dropoutOpen}
            setDropoutOpen={setDropoutOpen}
          />
        </RightWrapper>
      </NavWrapper>
      <PlaceholderNav />
    </>
  );
}

export default Nav;
