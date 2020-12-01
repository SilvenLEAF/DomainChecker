module.exports = canDeleteAccount = (userId, user)=>{

  // if they are not DEMO user, they can delete their account
  if(userId == user._id) return true;
  
  
  // the DEMO user can NOT delete their account. And only the creator can update their own account
  return false;
}