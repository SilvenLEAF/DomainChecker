import M from 'materialize-css'
import './../../../styles/Form.scss'



import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
 
 


import { AuthContext } from '../../../contexts/subContexts/AuthContext';
import { Toast } from '../../../helpers/MyAlerts';











function ResetPassword() {
  useEffect(() => {
    M.AutoInit();
  }, [])

  const { userData } = useContext(AuthContext);

  const { token } = useParams();
  const history = useHistory();
  


  
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const [error, setError] = useState('');


  const handleSubmit = async (e)=>{
    e.preventDefault();

    try {
      
      Toast.fire({
        icon: 'info',
        title: 'Please wait...'
      })
      
      if(confirmPassword !== newPassword) {
        return setError('Type same password twice');
      };
        
      
      const response = await fetch('/resetPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newPassword, token })
      });
  
      const data = await response.json();

      console.log(data);


      if(data.error) {
        setError(data.msg);
      } else {
        Toast.fire({
          icon: 'success',
          title: 'Password Updated'
        })
  
        setTimeout(()=>{
          history.push('/login');
        }, 3000)
      }
  
  
  
      setNewPassword('');
      setConfirmPassword('');
      

    } catch (err) {      
      console.log(err);

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




  if(userData) history.push('/');



  return (
    <div className= "container" >



      <form onSubmit= { handleSubmit } className="myDefaultForm" >
        <h6 className="myDefaultFormName" >Reset your Password</h6>

        





        <div className="myInputHolder">            
          <label htmlFor="password">New password <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix material-icons">memory</i>
            <input type="password" name="password" value={ newPassword } onChange={ e=> setNewPassword(e.target.value) } required />
          </div>
        </div>





        <div className="myInputHolder">            
          <label htmlFor="password">Confirm new password <span className="red-text">(Required)</span></label>
          <div>
            <i className="myPrefix material-icons">memory</i>
            <input type="password" name="confirmPassword" value={ confirmPassword } onChange={ e=> setConfirmPassword(e.target.value) } required />
          </div>
        </div>






        <div className="input-field right-align">
          <button type="submit" className= "btn myBtn waves-effect waves-light">
            <i className="fa fa-send"></i> Reset
          </button>
          
          <Link to="/forgotten" className= "btn myRedBtn waves-effect waves-light">
            Back <i className="fa fa-arrow-left"></i>
          </Link>
        </div>


        {/* <div className="myDefaultFormFooter">
          <p>Wanna know more about me?</p>
        </div> */}




        
      </form>
    </div>
  )

}

export default ResetPassword
