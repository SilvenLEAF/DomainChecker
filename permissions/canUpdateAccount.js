module.exports = canUpdateAccount = (userId, user)=>{

  // if they are not DEMO user, they can update their account
  if(user.role !== 'demo' && userId == user._id) return true;
  
  
  // the DEMO user can NOT update their account. And only the creator can update their own account
  return false;
}