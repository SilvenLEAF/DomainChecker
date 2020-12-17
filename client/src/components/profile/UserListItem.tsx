import React from 'react'


interface propsInterface {
  item: any
}



function UserListItem(props: propsInterface) {
  const { item } = props;



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
