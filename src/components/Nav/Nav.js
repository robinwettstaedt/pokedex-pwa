import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeChangeContext } from '../../contexts/ThemeChangeContext';
import app from '../../utils/Firebase';
import Search from './Search';
import Dropout from './DropoutNav/Dropout';
import MenuButton from './DropoutNav/MenuButton';
import Avatar from './Avatar';

const Wrapper = styled.div`
  color: ${(props) => props.theme.primaryFontColor};
  background: ${(props) => props.theme.primaryBackgroundColor};

  width: 100vw;
  height: 60px;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const RightWrapper = styled.div`
  width: 85%;
  height: 30px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
`;

function Nav() {
  const [dropoutOpen, setDropoutOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeChangeContext);

  const changeTheme = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <Wrapper>
      <Avatar />
      {/* <Link to="/">Home </Link>
      <Link to="/profile">Profile </Link>
      <Link to="/pokedex">Pokedex </Link> */}
      {/* <button onClick={() => changeTheme()}>Change Theme</button> */}
      <RightWrapper>
        <Search />
        <MenuButton dropoutOpen={dropoutOpen} setDropoutOpen={setDropoutOpen} />
      </RightWrapper>
      <Dropout isOpen={dropoutOpen} />
    </Wrapper>
  );
}

export default Nav;
