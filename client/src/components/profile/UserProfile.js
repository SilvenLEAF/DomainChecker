import M from 'materialize-css'
import '../../styles/Profile.scss'


import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';
import moment from 'moment'


import { AuthContext } from '../../contexts/subContexts/AuthContext';
import { AllUserContext } from '../../contexts/subContexts/AllUserContext';




function UserProfile(props) {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  
  const { userData } = useContext(AuthContext);
  const { allUsers } = useContext(AllUserContext);
  const history = useHistory();

  const index = props.match.params.index;

  const item = allUsers[parseInt(index)]

  

  if(!userData) history.push('/login')

  return (
    <div className="container myProfilePage">      
      <div className="mainProfileIcon" style={{background: `url(${ item.profileImage || "/Logo.png" }) center/cover`}} ></div>

      <div className="myProfileMainHeader">
        <div className="myProfileUserName">{ item.username }</div>
        <div className="myProfileTitle" >{ item.title }</div>
        <div className="myProfileLocation red-text"> { item.location } </div>
      </div>



      <div className="row">
        

      <div className="myProfileInfoHolder col s12 m6">
        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-home"></i> Lives in 
          </div>
          <div className="myProfileInfoAnswer">
            { item.location }
          </div>
        </div>







          <div>
            <div className="myProfileInfoTitle">
              <i className="fa fa-rocket"></i> Joined on
            </div>
            <div className="myProfileInfoAnswer">
              { moment(item.createdAt).calendar() }
            </div>
          </div>






        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-medkit"></i> Working at
          </div>
          <div className="myProfileInfoAnswer">
            { item.workingAt ? item.workingAt : (
              <span className="red-text">no info given</span>
            ) }
          </div>
        </div>




        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-graduation-cap"></i> Career status
          </div>
          <div className="myProfileInfoAnswer">
          { item.careerStatus ? item.careerStatus : (
              <span className="red-text">no info given</span>
            ) }
          </div>
        </div>






        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-share-alt"></i> Website link
          </div>
          <div className="myProfileInfoAnswer">
          { item.websiteLink ? (
            <a href={ (item.websiteLink.search('http://') === -1) ? 'https://' + item.websiteLink : item.websiteLink } target="_blank" rel="noopener noreferrer" >
              { item.websiteLink }
            </a>
          ) : (
              <span className="red-text">no info given</span>
            ) }
            
          </div>
        </div>





        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-twitter"></i> Connect on Twitter
          </div>
          <div className="myProfileInfoAnswer">
          { item.twitterHandle ? item.twitterHandle : (
              <span className="red-text">no info given</span>
            ) }
          </div>
        </div>


      </div>


     <div className="myProfileAboutHolder col s12 m5 offset-m1">
     <p className="myProfileAbout">
        { item.about }
      </p>

       <div className="myProfileBtnsHolder myBtnsHolder right-align">
          <Link to="/allUsers" className="btn myBtn waves-effect waves-light"> Go back <i className="fa fa-arrow-left"></i> </Link>          
        </div>
     </div>


      </div>




    </div>
  )
}

export default UserProfile
