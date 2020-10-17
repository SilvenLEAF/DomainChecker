import M from 'materialize-css'
import '../../styles/UserList.scss'

import React, { useEffect, useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { AuthContext } from '../../contexts/subContexts/AuthContext'
// import { AllUsersContext } from '../../contexts/subContexts/AllUsersContext'



import UserListItem from './UserListItem'









function UserList() {
  useEffect(()=>{
    M.AutoInit();
  }, [])





  const { userData, setUserData } = useContext(AuthContext)
  // const { allUsers, setAllUsers } = useContext(AllUsersContext)
  const [allUsers, setAllUsers] = useState([1,2,3,4,5,6,7,8,9])
  const history = useHistory()
  





  // if(!userData._id) history.push('/login')

  return (
    <div className="container myUserListPage">
      <h6 className="blue-text">All users</h6>


      <ul>
        {
          allUsers[0] && allUsers.map((item, index)=>{
            return (
              <Link to={ "/userProfile/" + index } key={ index } >
                <UserListItem/>
              </Link>
            )
          })
        }
      </ul>



    </div>
  )
}

export default UserList
