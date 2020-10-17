import React from 'react'

function UserListItem() {
  return (
    <li>
    <div className="myUserProfileIcon" style={{background: `url(/Logo.png) center/cover` }}></div>
    <div>
      <div className="myUserName">
        SilvenLEAF SilvenLEAF
      </div>

      <p className="grey-text">
        Fullstack Developer
      </p>
    </div>

    <div className="fa fa-eye"></div>

  </li>
  )
}

export default UserListItem
