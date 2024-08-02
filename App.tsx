import React, { useContext } from 'react';
import { StatusBar } from 'react-native';

import './gesture-handler';
import Navigation from './src/Navigation';
import { MainProvider } from './src/contexts/MainContext'

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <MainProvider>
        <Navigation />
      </MainProvider>
    </>
  );
}

export default App;