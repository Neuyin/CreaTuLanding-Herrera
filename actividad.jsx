import React, { createContext, useContext, useState } from 'react';
import './style.css';

const UserContext = createContext();

const useUserContext = () => useContext(UserContext);

const ContextProvider = (props) => {
  const inicialState = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    profilePic:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/20px-User-avatar.svg.png',
    isLoggedIn: true,
  };

  const [user, setUser] = useState(inicialState);

  function changeLogin(currentState) {
    const userAux = {
      ...user,
      isLoggedIn: !currentState,
    };

    setUser(userAux);
  }

  return (
    <UserContext.Provider value={{ user, changeLogin }}>
      {props.children}
    </UserContext.Provider>
  );
};

const App = () => {
  return (
    <div>
      <ContextProvider>
        <Nav />
        <UserInfo />
        <Footer />
      </ContextProvider>
    </div>
  );
};

export default App;

const UserInfo = () => {
  const { user } = useUserContext();

  return (
    <div className="user-info">
      <h2>Información del usuario:</h2>
      <p>
        Nombre: {user.name} <Avatar img={user.profilePic} />
      </p>
      <p>Email: {user.email}</p>
    </div>
  );
};

const Avatar = (props) => {
  const { img } = props;
  const { user } = useUserContext();

  return (
    <img className="avatar" src={user.isLoggedIn && img} alt="user avatar" />
  );
};

const Footer = () => {
  const { user } = useUserContext();

  return (
    <footer>
      <small>
        <p>2023 ©Coderhouse all rights reserved</p>
        <a href="#">
          <Avatar img={user.profilePic} />
          Go to dashboard
        </a>
      </small>
    </footer>
  );
};

const Nav = () => {
  const { user, changeLogin } = useUserContext();

  if (user.isLoggedIn)
    return (
      <nav>
        <button onClick={() => changeLogin(user.isLoggedIn)}>
          Bienvenido, {user.name}. Click para Logout
        </button>
      </nav>
    );

  return (
    <nav>
      <button onClick={() => changeLogin(user.isLoggedIn)}>
        Hola! Click Login
      </button>
    </nav>
  );
};
