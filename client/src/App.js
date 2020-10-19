import 'materialize-css/dist/css/materialize.min.css'



import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


import RootAppStucture from './PAGES/RootAppStructure';
import RootContext from './contexts/RootContext';




function App() {
  const [loggedInUserData, setLoggedInUserData] = useState();
  

  useEffect(()=>{
    const getLoggedInUser = async (e) =>{
      const res = await fetch('http://localhost:5000/user');
      const data = await res.json();
      
      console.log(data);
      
      if(data.user) {
        setLoggedInUserData(data.user);
        
      }
    }

    getLoggedInUser();

  }, [])




  return (
    <BrowserRouter basename="/">
      <RootContext loggedInUserData={ loggedInUserData } >
        <div className="App"><RootAppStucture/></div>
      </RootContext>
    </BrowserRouter>
  );
}

export default App;
