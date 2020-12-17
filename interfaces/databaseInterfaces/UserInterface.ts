import mongoose, { Document } from 'mongoose'






/* ----------------------------------
.           SUB interfaces
---------------------------------- */
interface GoogleInterface {
  googleId: string,
  email: string,
  username: string,
  profileImage: string,
};










interface GithubInterface {
  githubId: string,
  email: string,
  username: string,
  profileImage: string,
};











interface LinkedinInterface {
  linkedinId: string,
  email?: string,
  username: string,
  profileImage: string,
};








interface TwitterInterface {
  twitterId: string,
  
  username: string,
  profileImage: string,
};









interface LocalInterface {
  email: string,
  password: string,
  
    
  resetToken?: string,
  resetTokenExpires?: number,
  
  
  verificationToken?: string,
  verificationTokenExpires?: number,
  
  
  
  username: string,
  profileImage: string,
}
















/* ------------------------------------------
.            MAIN INTERFACE
------------------------------------------ */
export default interface UserInterface extends Document {
  google?: GoogleInterface,
  github?: GithubInterface,
  linkedin?: LinkedinInterface,

  twitter?: TwitterInterface,

  

  local?: LocalInterface,




  username: string,
  profileImage: string,
  createdAt: Date,
  role?: string,
  isVerified?: boolean,
  email?: string,



  about?: string,



  title?: string,
  location?: string,
  careerStatus?: string,
  workingAt?: string,
  



  websiteLink?: string,
  twitterHandle?: string,
}







