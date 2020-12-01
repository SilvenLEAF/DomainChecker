import M from 'materialize-css'
import '../../styles/profile/Profile.scss'


import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment'
 




import { AuthContext } from '../../contexts/subContexts/AuthContext';
import { Toast } from '../../helpers/MyAlerts'



function Profile() {
  useEffect(()=>{ 
    M.AutoInit();
  }, [])
  
  
  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  

  const deleteProfile = async (e) =>{
    e.preventDefault();

  
  

    Toast.fire({
      icon: 'info',
      title: 'Please wait...'
    })
    
    const userId = userData._id;
  
    const deletedProfileRes = await fetch('/user/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userId})
    });

    const deletedProfileData = await deletedProfileRes.json();

    console.log(deletedProfileData)
    
    setTimeout(()=>{
      history.push('/login')
      setUserData(null);
    }, 3000)
    
  }


  if(!userData) history.push('/login');
  if(userData && !userData.isVerified) history.push('/verifyDoor');

  return (
    <div className="container myProfilePage" >
      <div className="mainProfileIcon" style={{background: `url(${ userData.profileImage || "/Logo.png" }) center/cover`}} ></div>

      <div className="myProfileMainHeader">
        <div className="myProfileUserName">{ userData.username }</div>        
        <div className="myProfileTitle myThemeColorText" >{ userData.title }</div>
        <div className="myProfileLocation red-text">{ userData.location } </div>
      </div>



      <div className="row">
        

      <div className="myProfileInfoHolder col s12 m6">
        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-home"></i> Lives in 
          </div>
          <div className="myProfileInfoAnswer">
            { userData.location }
          </div>
        </div>







        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-rocket"></i> Joined on
          </div>
          <div className="myProfileInfoAnswer">
            { moment(userData.createdAt).calendar() }
          </div>
        </div>




        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-medkit"></i> Working at
          </div>
          <div className="myProfileInfoAnswer">
            { userData.workingAt ? userData.workingAt : (
              <span className="red-text">no info given</span>
            ) }
          </div>
        </div>




        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-graduation-cap"></i> Career status
          </div>
          <div className="myProfileInfoAnswer">
          { userData.careerStatus ? userData.careerStatus : (
              <span className="red-text">no info given</span>
            ) }
          </div>
        </div>






        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-share-alt"></i> Website link
          </div>
          <div className="myProfileInfoAnswer">
          { userData.websiteLink ? (
            <a href={ (userData.websiteLink.search('http://') === -1) ? 'https://' + userData.websiteLink : userData.websiteLink } target="_blank" rel="noopener noreferrer" >
              { userData.websiteLink }
            </a>
          ) : (
              <span className="red-text">no info given</span>
            ) }
            
          </div>
        </div>





        <div>
          <div className="myProfileInfoTitle">
            <i className="fab fa-twitter"></i> Connect on Twitter
          </div>
          <div className="myProfileInfoAnswer">
          { userData.twitterHandle ? userData.twitterHandle : (
              <span className="red-text">no info given</span>
            ) }
          </div>
        </div>


      </div>


      <div className="myProfileAboutHolder col s12 m5 offset-m1">
      <p className="myProfileAbout">
        { userData.about }
      </p>

       <div className="myProfileBtnsHolder myBtnsHolder right-align">
          <Link to="/updateProfile" className="btn myBtn waves-effect waves-light myCornerless"><i className="fa fa-edit"></i> Update Account</Link>
          <button className="btn myRedBtn waves-effect waves-light myCornerless" onClick={ deleteProfile } ><i className="fa fa-trash"></i> Delete Account</button>
        </div>
     </div>


      </div>




    </div>
  )
}

export default Profile
