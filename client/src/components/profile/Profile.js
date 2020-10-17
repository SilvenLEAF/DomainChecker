import M from 'materialize-css'
import '../../styles/Profile.scss'


import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';


import { AuthContext } from '../../contexts/subContexts/AuthContext';




function Profile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  
  const { userData } = useContext(AuthContext);
  const history = useHistory();

  

  const deleteProfile = async (e) =>{
    e.preventDefault();

    const requestedUserId = userData._id;
    
    const deletedProfileRes = await fetch('/users/', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({requestedUserId})
    });

    const deletedProfileData = await deletedProfileRes.json();

    console.log(deletedProfileData)
    window.location.href = `/login`
  }


  // if(!userData._id) history.push('/login')

  return (
    <div className="container myProfilePage">      
      <div className="mainProfileIcon" style={{background: `url("/Logo.png") center/cover`}} ></div>

      <div className="myProfileMainHeader">
        <div className="myProfileUserName">SilvenLEAF SilvenLEAF</div>
        <div className="myProfileTitle" >Fullstack Developer</div>
        <div className="myProfileLocation red-text"> Mt View, California, USA </div>
      </div>



      <div className="row">
        

      <div className="myProfileInfoHolder col s12 m6">
        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-home"></i> Lives in 
          </div>
          <div className="myProfileInfoAnswer">
            Mt View, California, USA
          </div>
        </div>




        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-medkit"></i> Working at
          </div>
          <div className="myProfileInfoAnswer">
            home due to coronavirus
          </div>
        </div>




        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-graduation-cap"></i> Career status
          </div>
          <div className="myProfileInfoAnswer">
            Fullstack Developer at SilvenLEAF ORG
          </div>
        </div>






        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-share-alt"></i> Website link
          </div>
          <div className="myProfileInfoAnswer">
            <a href="#" target="silvenleaf.github.io">
              silvenleaf.github.io
            </a>
          </div>
        </div>





        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-twitter"></i> Connect on Twitter
          </div>
          <div className="myProfileInfoAnswer">
            @SilvenLEAF
          </div>
        </div>


      </div>


     <div className="myProfileAboutHolder col s12 m5 offset-m1">
     <p className="myProfileAbout">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sunt a quae tenetur iure? Sit repellendus necessitatibus unde iusto. Dignissimos quisquam consectetur vel velit rerum tempore, a accusamus saepe modi tempora sit quo? Laudantium nihil eligendi quidem. Enim nulla odit ad tenetur molestias perferendis? Culpa obcaecati voluptatum harum debitis id?
      </p>

       <div className="myProfileBtnsHolder myBtnsHolder right-align">
          <Link to="/updateProfile" className="btn myBtn waves-effect waves-light"><i className="fa fa-edit"></i> Update Account</Link>
          <button className="btn myRedBtn waves-effect waves-light"><i className="fa fa-trash"></i> Delete Account</button>
        </div>
     </div>


      </div>




    </div>
  )
}

export default Profile
