import React from 'react';
import Drawer from './component/Drawer/Drawer';
import Main from './component/Main/Main';
import Navbar from './component/Navbar/Navbar';

import { Provider } from "./component/Context/Context";
import './App.css';

function App() {
  return (
    <Provider>
      <h1>CryptoKnight</h1>
      <Drawer />
      <Main />
      <Navbar />
    </Provider>
  );
}

export default App;
