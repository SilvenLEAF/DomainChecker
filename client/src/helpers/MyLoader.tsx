import '../styles/loaders/Loader.scss'

import BouncingLoader from './loaders/BouncingLoader'
import SpinningLoader from './loaders/SpinningLoader'
import FlippingLoader from './loaders/FlippingLoader'


import React from 'react'





interface propsInterface {
  title?: string
}




function MyLoader(props: propsInterface) {

  return (
    <>
     <SpinningLoader title={ props.title } />
    </>
  )
}

export default MyLoader
