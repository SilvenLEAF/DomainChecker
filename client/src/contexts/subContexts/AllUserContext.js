import React, { createContext, useState } from 'react'


export const AllUserContext = createContext();


function AllUserContextProvider({ children }) {
  const [allUsers, setAllUsers] = useState([]);
  return (
    <AllUserContext.Provider value={{ allUsers, setAllUsers }} >
      { children }
    </AllUserContext.Provider>
  )
}

export default AllUserContextProvider
