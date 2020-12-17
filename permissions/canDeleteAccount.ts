import UserInterface from "../interfaces/databaseInterfaces/UserInterface";


export default  (userId: any, user: UserInterface)=>{
  
  // user can only delete their own account
  if(userId == user._id) return true;
  
  
  // user can NOT delete someone else's account
  return false;
}