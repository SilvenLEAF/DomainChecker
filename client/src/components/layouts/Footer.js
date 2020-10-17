import React from 'react'
import './../../styles/footer/Footer.scss'




function Footer(props) {
  return (
    <div id="myFooter">
      <div className="container">



        <h6 className= "center white-text lighten-5">Developed by SilvenLEAF</h6>


        <div className="mySocialIconsHolder">
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SilvenLEAF?s=20" className="mySocialIcon"><i className="fa fa-twitter"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/SilvenLEAF" className="mySocialIcon"><i className="fa fa-github"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="#" className="mySocialIcon"><i className="fa fa-linkedin"></i></a>
        </div>


        <div id="myFooterCopyright">
          <div className="center-align">&copy; SilvenLEAF all rights reserved 2020</div>
        </div>



      </div>
    </div>
  )
}

export default Footer
