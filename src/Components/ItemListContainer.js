import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div>
      <h2>Bienvenido a nuestra tienda</h2>
      <p>{props.message}</p>
      {/* catalogo de productos*/}
    </div>
  );
};

export default ItemListContainer;
