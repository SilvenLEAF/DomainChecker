import React from 'react'
import AllUserContextProvider from './subContexts/AllUserContext'




function RootContext({ children }) {
  return (
    <>
      
      <AllUserContextProvider>
        
        { children }
        
      </AllUserContextProvider>
    
    </>
  )
}

export default RootContext
