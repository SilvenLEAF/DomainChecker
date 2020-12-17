import React from 'react'
import AllUserContextProvider from './subContexts/AllUserContext'



interface propsInterface {
  children: React.ReactNode
}



function RootContext(props: propsInterface) {
  return (
    <>
      
      <AllUserContextProvider>
        { props.children }
      </AllUserContextProvider>
    
    </>
  )
}

export default RootContext
