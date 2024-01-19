import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div>
        <img src="/mitienda/public/logolamp.png" alt="Logo de la tienda" />
      </div>
      <div>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
      <div>
        <CartWidget/>
      </div>
    </nav>
  );
};

export default NavBar;
