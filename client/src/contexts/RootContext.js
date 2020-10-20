import React from 'react'
import AllUserProvider from './subContexts/AllUserContext'

function RootContext({ children }) {
  return (
    <>
      
      <AllUserProvider>
        { children }
      </AllUserProvider>
    
    </>
  )
}

export default RootContext
