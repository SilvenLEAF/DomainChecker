import 'materialize-css/dist/css/materialize.min.css'



import React from 'react';
import { BrowserRouter } from 'react-router-dom';


import RootAppStucture from './PAGES/RootAppStructure';
import RootContext from './contexts/RootContext';




function App() {
  return (
    <BrowserRouter basename="/">
      <RootContext>
        <div className="App"><RootAppStucture/></div>
      </RootContext>
    </BrowserRouter>
  );
}

export default App;
