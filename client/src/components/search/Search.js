import M from 'materialize-css'
import '../../styles/Form.scss';
import '../../styles/Search.scss';


import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'




function Search() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const [domainName, setDomainName] = useState('')
  const [ipAddress, setIpAddress] = useState('');

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const res = await fetch('/getIpAddress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ domainName })
    });

    const data = await res.json();
    console.log(data);
    setIpAddress(data.addresses);

  }
  
  return (
    <div className="container">
      <form className="myDefaultForm" onSubmit={ handleSubmit } >
        <div className="myInputHolder">
          <label htmlFor="domainName">Your Domain Name <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix material-icons">memory</i>
            <input type="text" value={ domainName } onChange={ e=> setDomainName(e.target.value) } required />
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
          { ipAddress ? "Already taken" : "Available" }
        </h2>
        
        <h3 className="pageTitle center-align">
          <span className="red-text">
            { ipAddress ? ipAddress : "YAY!" }
          </span>
        </h3>

      </div>

      
    </div>
  )
}

export default Search
