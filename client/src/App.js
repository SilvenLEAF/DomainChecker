import 'materialize-css/dist/css/materialize.min.css'



import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';


import RootAppStucture from './PAGES/RootAppStructure';
import RootContext from './contexts/RootContext';
import { AuthContext } from './contexts/subContexts/AuthContext';




function App() {
  const [userData, setUserData] = useState();
  

  useEffect(()=>{
    const getLoggedInUser = async (e) =>{
      const res = await fetch('/user');
      const data = await res.json();
      
      console.log(data);
      
      if(data.user) {
        setUserData(data.user);
        
      }
    }

    getLoggedInUser();

  }, [])




  return (
    <BrowserRouter basename="/">
      <AuthContext.Provider value={{ userData, setUserData }} >
        <RootContext >
          <div className="App"><RootAppStucture/></div>
        </RootContext>
      </AuthContext.Provider>
    </BrowserRouter>
  );
}

export default App;
