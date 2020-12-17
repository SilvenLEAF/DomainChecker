import '../../styles/loaders/Loader.scss'


import React from 'react'


interface propsInterface {
  title: string | undefined
}


function BouncingLoader(props: propsInterface) {
  return (
    <div className="container myLoaderHolder">
      <div>
        <div className="bouncer">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="myLoadingTitle"> { props.title ? props.title : "Loading..." } </h3>
      </div>
    </div>
  )
}

export default BouncingLoader
