import React from 'react'
import AuthContextProvider from './subContexts/AuthContext'
import AllUserProvider from './subContexts/AllUserContext'

function RootContext({ children, loggedInUserData }) {
  return (
    <>
      <AuthContextProvider loggedInUserData={ loggedInUserData } >
        <AllUserProvider>
          { children }
        </AllUserProvider>
      </AuthContextProvider>
    </>
  )
}

export default RootContext
