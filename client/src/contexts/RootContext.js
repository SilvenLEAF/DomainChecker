import React from 'react'
import AuthContextProvider from './subContexts/AuthContext'

function RootContext({ children }) {
  return (
    <>
      <AuthContextProvider>
        { children }
      </AuthContextProvider>
    </>
  )
}

export default RootContext
