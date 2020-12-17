import UserInterface from "../interfaces/databaseInterfaces/UserInterface";

export default (userId: any, user: UserInterface)=>{

  // if they are not DEMO user, they can only update their own account
  if(user.role !== 'demo' && userId == user._id) return true;
  
  
  // the DEMO user can NOT update their account. And only the creator can update their own account
  return false;
}