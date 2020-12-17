import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/shared/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './components/shared/Routes';
import NotificationProvider from './components/shared/Notifications';
import GlobalStoreProvider from './components/shared/Globals';

const App = () => {
  return (
    <GlobalStoreProvider>
      <NotificationProvider>
        <BrowserRouter>
          <Navigation/>
          <Routes/>
        </BrowserRouter>
      </NotificationProvider>
    </GlobalStoreProvider>
  );
}
 
export default App;