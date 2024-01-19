import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div>
      <h2>Bienvenido a nuestra tienda</h2>
      <p>{props.message}</p>
      {/* Aquí puedes mostrar el catálogo de productos en el futuro */}
    </div>
  );
};

export default ItemListContainer;
