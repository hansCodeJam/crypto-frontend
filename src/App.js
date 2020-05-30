import React from 'react';
import './App.css';
import Drawer from './component/Drawer/Drawer';
import Main from './component/Main/Main';
import Navbar from './component/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <h1>CryptoKnight</h1>
     <Drawer />
     <Main />
     <Navbar />
    </div>
  );
}

export default App;
