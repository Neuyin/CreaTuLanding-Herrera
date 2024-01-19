import React from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer message="¡Gracias por visitarnos!" />
    </div>
  );
};

export default App;