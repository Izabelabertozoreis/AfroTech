import React from 'react';
import { Link } from 'react-router-dom';



const Menu = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favoritos">Favoritos</Link></li>
        <li><Link to="/desejados">Desejados</Link></li>
        <li><Link to="/avaliados">Avaliados</Link></li>
        <li><Link to="/resenha">Resenha</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;