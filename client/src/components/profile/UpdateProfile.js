import M from 'materialize-css'
import '../../styles/Profile.scss'
import '../../styles/UpdateProfile.scss'


import React, { useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom';


import { AuthContext } from '../../contexts/subContexts/AuthContext';




function UpdateProfile() {
  useEffect(()=>{
    M.AutoInit();
  }, [])
  
  
  const { userData } = useContext(AuthContext);
  const history = useHistory();

  

  

  // if(!userData._id) history.push('/login')

  return (
    <div id="myUpdateProfilePage" className="container myProfilePage">      
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
            <i className="fa fa-address-card-o"></i> Username 
          </div>
          <div className="myProfileInfoAnswer">
            <input type="text" placeholder="SilvenLEAF SilvenLEAF" />
          </div>
        </div>
        
        
        
        
        
        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-cogs"></i> is a/an 
          </div>
          <div className="myProfileInfoAnswer">
            <input type="text" placeholder="Fullstack Developer" />
          </div>
        </div>






        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-home"></i> Lives in 
          </div>
          <div className="myProfileInfoAnswer">
            <input type="text" placeholder="Mt View, California, USA" />
          </div>
        </div>




        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-medkit"></i> Working at
          </div>
          <div className="myProfileInfoAnswer">
            <input type="text" placeholder="home due to coronavirus" />
          </div>
        </div>




        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-graduation-cap"></i> Career status
          </div>
          <div className="myProfileInfoAnswer">
            <input type="text" placeholder="Fullstack Developer at SilvenLEAF ORG" />
          </div>
        </div>






        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-share-alt"></i> Website link
          </div>
          <div className="myProfileInfoAnswer">
            <input type="text" placeholder="silvenleaf.github.io" />
          </div>
        </div>





        <div>
          <div className="myProfileInfoTitle">
            <i className="fa fa-twitter"></i> Connect on Twitter
          </div>
          <div className="myProfileInfoAnswer">
            <input type="text" placeholder="@SilvenLEAF" />
          </div>
        </div>


      </div>


     <div className="col s12 m5 offset-m1">     
        <div className="myUpdateProfileAbout Holder">
          <textarea name="about" className="myUpdateProfileAbout"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque necessitatibus consectetur laborum odio distinctio aut. Alias, eos neque. Odit itaque exercitationem aut neque. Amet dolorum iusto autem aliquid eius, eaque voluptate ullam atque dignissimos eum accusantium praesentium accusamus pariatur nesciunt asperiores odit? Maxime temporibus, ullam dicta beatae blanditiis hic adipisci."
          ></textarea>  
        </div>

        <div className="myBtnsHolder right-align">
          <button className="btn myBtn waves-effect waves-light"><i className="fa fa-edit"></i> Update</button>
          <Link to="/profile" className="btn myRedBtn waves-effect waves-light"><i className="fa fa-remove"></i> Cancel</Link>
        </div>
     </div>


      </div>




    </div>
  )
}

export default UpdateProfile
