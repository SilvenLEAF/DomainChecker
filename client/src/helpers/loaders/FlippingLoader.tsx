import '../../styles/loaders/Loader.scss'


import React from 'react'




interface propsInterface {
  title: string | undefined
}



function FlippingLoader(props: propsInterface) {
  return (
    <div className="container myLoaderHolder">
      <div>
        <h3 className="myLoadingTitle"> { props.title ? props.title : "Loading..." } </h3>
        <div className="square">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default FlippingLoader
