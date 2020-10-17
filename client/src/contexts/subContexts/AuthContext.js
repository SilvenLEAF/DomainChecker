import React, { createContext, useState } from 'react'



export const AuthContext = createContext();






function AuthContextProvider({ children }) {

  const [userData, setUserData] = useState({
    user: 'I am logged in',
  });


  


  return (
    <AuthContext.Provider value={{ userData, setUserData }} >
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
