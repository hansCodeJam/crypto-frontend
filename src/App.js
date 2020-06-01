import React from 'react';
import Navbar from './component/Navbar/Navbar';
import Loader from './component/Loader/Loader'
import { Provider } from "./component/Context/Context";

const Main = React.lazy(() => import('./component/Main/Main'))
const Drawer = React.lazy(() => import('./component/Drawer/Drawer'))


function App() {
  return (
    <Provider>
      <React.Suspense fallback={<Loader/>}>
        <h1>CryptoKnight</h1>
        <Drawer />
        <Main />
        <Navbar />
      </React.Suspense>
    </Provider>
  );
}

export default App;
