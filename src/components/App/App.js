import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../../utils/themes';
import { ThemeChangeContext } from '../../contexts/ThemeChangeContext';
import Nav from '../Nav/Nav';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Home from '../../domain/Home/Home';
import Login from '../../domain/Login/Login';
import SignUp from '../../domain/SignUp/SignUp';
import DexList from '../../domain/Pokedex/DexList';
import DexEntry from '../../domain/PokedexEntry/DexEntry';
import Profile from '../../domain/Profile/Profile';
import DeleteAccount from '../../domain/Profile/ProfileActions/DeleteAccount/DeleteAccount';
import ChangePassword from '../../domain/Profile/ProfileActions/ChangePassword/ChangePassword';
import ChangeAvatar from '../../domain/Profile/ProfileActions/ChangeAvatar/ChangeAvatar';
import ChangeUsername from '../../domain/Profile/ProfileActions/ChangeUsername/ChangeUsername';
import Modal from '../Modal/Modal';
import { ModalContext } from '../../contexts/ModalContext';
import Spinner from '../Spinner/Spinner';
import { AuthContext } from '../../contexts/AuthContext';

const App = () => {
  const { theme } = useContext(ThemeChangeContext);
  const { pending } = useContext(AuthContext);
  const { showModal } = useContext(ModalContext);
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <GlobalStyles theme={theme} />
      {showModal && <Modal />}
      <Router>
        <>
          {pending ? (
            <Spinner />
          ) : (
            <>
              <PrivateRoute path="/" component={Nav} />

              <PrivateRoute exact path="/" component={Home} />

              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />

              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute
                exact
                path="/profile/delete"
                component={DeleteAccount}
              />
              <PrivateRoute
                exact
                path="/profile/avatar"
                component={ChangeAvatar}
              />
              <PrivateRoute
                exact
                path="/profile/username"
                component={ChangeUsername}
              />
              <PrivateRoute
                exact
                path="/profile/passwordchange"
                component={ChangePassword}
              />

              <PrivateRoute exact path="/pokedex" component={DexList} />
              <PrivateRoute exact path="/pokedex/:id" component={DexEntry} />
            </>
          )}
        </>
      </Router>
    </ThemeProvider>
  );
};

export default App;
