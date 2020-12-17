import React, { createContext, useState } from 'react'


interface allUserContextInterface {
  allUsers: never[],
  setAllUsers: Function
}



interface propsInterface {
  children: React.ReactNode
}


export const AllUserContext = createContext( {} as allUserContextInterface );











function AllUserContextProvider(props: propsInterface) {
  const [allUsers, setAllUsers] = useState([]);
  return (
    <AllUserContext.Provider value={{ allUsers, setAllUsers }} >
      { props.children }
    </AllUserContext.Provider>
  )
}

export default AllUserContextProvider
