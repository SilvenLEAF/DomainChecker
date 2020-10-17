import M from 'materialize-css'
import '../../styles/Form.scss';
import '../../styles/Search.scss';


import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'




function Search() {
  useEffect(()=>{
    M.AutoInit();
  }, [])

  
  return (
    <div className="container">
      <form className="myDefaultForm">
        <div className="myInputHolder">
          <label htmlFor="domainName">Your Domain Name <span className="red-text">(Required)</span></label>
          <div>            
            <i className="myPrefix material-icons">memory</i>
            <input type="text" required />
          </div>
        </div>
        
        <div className="center-align">
          <button className="btn myBtn waves-effect waves-light">
            Check your Domain
          </button>
        </div>
      </form>



      <div className="searchResultHolder">
        <h2 className="pageTitle center-align">
          Already taken
        </h2>
        
        <h3 className="pageTitle center-align">
          <span className="red-text">
            127.127.127.127
          </span>
        </h3>

      </div>

      
    </div>
  )
}

export default Search
