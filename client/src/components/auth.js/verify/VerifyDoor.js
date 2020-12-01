import M from 'materialize-css'
import '../../../styles/VerifyDoor.scss';


import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
 
 



import { AuthContext } from '../../../contexts/subContexts/AuthContext'
import { Toast } from '../../../helpers/MyAlerts'



function VerifyDoor() {
  useEffect(()=>{
    M.AutoInit();
  }, [])


  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  const [error, setError] = useState('');

  const handleRequestVerification = async ()=>{
    try {
      Toast.fire({
        icon: 'info',
        title: 'Please wait...'
      })
      
      const response = await fetch('/requestVerification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: userData.local.email})
      });
  
      const data = await response.json();
      console.log(data)

      if(data.error) {
        setError(data.msg);
      } else{
        Toast.fire({
          icon: 'success',
          title: 'Check your email for further instructions'
        })
      }
      

      
    } catch (err) {
      console.log(err);
      if(err.error) setError(err.msg)
    }

  }



  useEffect(()=>{
    if(error){
      Toast.fire({
        icon: 'error',
        title: error
      })
    }
  }, [error])




  if(!userData) history.push('/login');
  if(userData && userData.isVerified) history.push('/');
  
  
  return (
    <div className="container myVerifyDoorPage"
      

    >
      <h5 className="pageTitle red-text center-align">Account NOT verified!</h5>

      <p>
        Your account is NOT verified. You must verify your account to continue. Click on the Verify Button to verify your account.
      </p>

      <p>
        <span className="red-text"> { userData.local.email } </span> Not your mail? Click on the Change Email Button to change your email.
      </p>

      <div className="myBtnsHolder right-align">
        <button className="btn myBtn myCornerless" onClick={ handleRequestVerification } >Verify Account</button>
        <Link to="/changeEmail" className="btn mySecondaryBtn myCornerless">Change Email</Link>
      </div>
      
    </div>
  )
}

export default VerifyDoor
