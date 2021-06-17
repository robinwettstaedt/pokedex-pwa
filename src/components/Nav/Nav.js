import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <Link to="/">Home </Link>
      <Link to="/profile">Profile </Link>
      <Link to="/pokedex">Pokedex</Link>
      <Link to="/pokedex/1">Bisa</Link>
      <Link to="/pokedex/150">Bisa</Link>
    </div>
  );
}

export default Nav;
