import M from 'materialize-css'
import './../../../styles/Form.scss'



import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
 
 


import { AuthContext } from '../../../contexts/subContexts/AuthContext'
import { Toast } from '../../../helpers/MyAlerts'











function ChangeEmail() {
  useEffect(() => {
    M.AutoInit();
  }, [])





  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();


  
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');



  const handleSubmit = async (e)=>{
    e.preventDefault();

  
    try {

      Toast.fire({
        icon: 'info',
        title: 'Please wait...'
      })

      const response = await fetch('/user/changeEmail', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ userId: userData._id, email })
      });
  
      const data = await response.json();
      console.log(data);
      
      
      if(data.error){
        setError(data.msg);
      } else {
        setEmail('');
        setUserData(data);

        Toast.fire({
          icon: 'success',
          title: 'Email successfully changed'
        })

        setTimeout(()=>{
          history.push('/verifyDoor')
        }, 3000);


      }

  
  
  
      
    } catch (err) {
      console.log(err)

      if(err.error) setError(err.msg);
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



  if(!userData) history.push('/login')
  if(userData && userData.isVerified) history.push('/');


  return (
    <div className= "container" >



      <form onSubmit= { handleSubmit } className="myDefaultForm" >
        <h6 className="myDefaultFormName" >Change your Email</h6>






        <div className="myInputHolder">            
          <label htmlFor="email">Type your Email <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix fa fa-envelope"></i>
            <input type="email" name="email" value={ email } onChange={ e=> setEmail(e.target.value) } required />
          </div>
        </div>






        <div className="input-field right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light">
            <i className="fa fa-send"></i> Send
          </button>
          
          <Link to="/verifyDoor" className= "btn myRedBtn waves-effect waves-light">
            Back <i className="fa fa-arrow-left"></i>
          </Link>
        </div>


        



        
      </form>
    </div>
  )

}

export default ChangeEmail
