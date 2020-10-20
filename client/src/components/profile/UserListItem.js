import React from 'react'

function UserListItem({ item }) {
  return (
    <li>
    <div className="myUserProfileIcon" style={{background: `url(${ item.profileImage || "/Logo.png" }) center/cover` }}></div>
    <div>
      <div className="myUserName">
        {item.username}
      </div>

      <p className="grey-text">
        {item.title}
      </p>
    </div>

    <div className="fa fa-eye"></div>

  </li>
  )
}

export default UserListItem
