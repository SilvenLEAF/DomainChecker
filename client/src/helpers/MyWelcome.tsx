import '../styles/loaders/Loader.scss'

import BouncingLoader from './loaders/BouncingLoader'
import SpinningLoader from './loaders/SpinningLoader'
import FlippingLoader from './loaders/FlippingLoader'


import React from 'react'



interface propsInterface {
  title: string | undefined
}


function MyWelcome(props: propsInterface) {
  return (
    <>
     <FlippingLoader title={ props.title ? props.title : "Welcome!" } />
    </>
  )
}

export default MyWelcome
