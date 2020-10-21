import M from 'materialize-css'
import '../../styles/Profile.scss'
import '../../styles/UpdateProfile.scss'


import React, { useEffect, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';


import { AuthContext } from '../../contexts/subContexts/AuthContext';




function UpdateProfile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  
  const { userData, setUserData } = useContext(AuthContext);
  const history = useHistory();

  
  const [username, setUsername] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('');
  const [about, setAbout] = useState('')

  const [careerStatus, setCareerStatus] = useState('');
  const [workingAt, setWorkingAt] = useState('');

  const [websiteLink, setWebsiteLink] = useState('');
  const [twitterHandle, setTwitterHandle] = useState('');





  const handleSubmit = async (e)=>{
    e.preventDefault();

    const updateObj = {};
    updateObj.userId = userData._id;

    if(username) updateObj.username = username;
    if(profileImage) updateObj.profileImage = profileImage;

    if(location) updateObj.location = location;
    if(title) updateObj.title = title;
    if(about) updateObj.about = about;

    if(careerStatus) updateObj.careerStatus = careerStatus;
    if(workingAt) updateObj.workingAt = workingAt;
    if(websiteLink) updateObj.websiteLink = websiteLink;
    if(twitterHandle) updateObj.twitterHandle = twitterHandle;
    

    console.log('update started');


    const res = await fetch('/user', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateObj)
    })


    const data = await res.json();
    setUserData(data);
    history.push('/profile')
  }
  

  if(!userData) history.push('/login')

  return (
    <div id="myUpdateProfilePage" className="container myProfilePage">      
      <div className="mainProfileIcon" style={{background: `url(${ userData.profileImage }) center/cover`}} ></div>

      <div className="myProfileMainHeader">
        <div className="myProfileUserName"> { userData.username } </div>
        <div className="myProfileTitle" >{ userData.title }</div>
        <div className="myProfileLocation red-text"> All fields are OPTIONAL </div>
      </div>



      <form className="row" onSubmit={ handleSubmit } >
          

        <div className="myProfileInfoHolder col s12 m6">
          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-address-card-o"></i> Username 
            </div>
            <div className="myProfileInfoAnswer">
              <input type="text" placeholder={ userData.username} value={username} onChange={ e=> setUsername(e.target.value) } />
            </div>
          </div>
          
          
          
          
          
          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-cogs"></i> is a/an 
            </div>
            <div className="myProfileInfoAnswer">
              <input type="text" placeholder={ userData.title} value={title} onChange={ e=> setTitle(e.target.value) } />
            </div>
          </div>






          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-home"></i> Lives in 
            </div>
            <div className="myProfileInfoAnswer">
              <input type="text" placeholder={ userData.location} value={location} onChange={ e=> setLocation(e.target.value) } />
            </div>
          </div>




          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-medkit"></i> Working at
            </div>
            <div className="myProfileInfoAnswer">
              <input type="text" placeholder={ userData.workingAt} value={workingAt} onChange={ e=> setWorkingAt(e.target.value) } />
            </div>
          </div>




          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-graduation-cap"></i> Career status
            </div>
            <div className="myProfileInfoAnswer">
              <input type="text" placeholder={ userData.careerStatus} value={careerStatus} onChange={ e=> setCareerStatus(e.target.value) } />
            </div>
          </div>






          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-share-alt"></i> Website link
            </div>
            <div className="myProfileInfoAnswer">
              <input type="text" placeholder={ userData.websiteLink} value={websiteLink} onChange={ e=> setWebsiteLink(e.target.value) } />
            </div>
          </div>





          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-twitter"></i> Connect on Twitter
            </div>
            <div className="myProfileInfoAnswer">
              <input type="text" placeholder={ userData.twitterHandle} value={twitterHandle} onChange={ e=> setTwitterHandle(e.target.value) } />
            </div>
          </div>
          
          
          
          
          
          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-picture-o"></i> Profile image URL
            </div>
            <div className="myProfileInfoAnswer">
              <input type="text" placeholder="give a valid URL" value={profileImage} onChange={ e=> setProfileImage(e.target.value) } />
            </div>
          </div>


        </div>


        <div className="col s12 m5 offset-m1">     
            <div className="myUpdateProfileAbout Holder">
              <textarea name="about" className="myUpdateProfileAbout"
                placeholder={ userData.about} value={about} onChange={ e=> setAbout(e.target.value) }
              ></textarea>  
            </div>

            <div className="myBtnsHolder right-align">
              <button className="btn myBtn waves-effect waves-light"><i className="fa fa-edit"></i> Update</button>
              <Link to="/profile" className="btn myRedBtn waves-effect waves-light"><i className="fa fa-remove"></i> Cancel</Link>
            </div>
        </div>


      </form>




    </div>
  )
}

export default UpdateProfile
