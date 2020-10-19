import React, { createContext, useState } from 'react'



export const AuthContext = createContext();






function AuthContextProvider({ children, loggedInUserData }) {

  const [userData, setUserData] = useState(loggedInUserData);


  


  return (
    <AuthContext.Provider value={{ userData, setUserData }} >
      { children }
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
