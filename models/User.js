const mongoose = require('mongoose');






/* ----------------------------------
.           SUB SCHEMAs
---------------------------------- */




const GoogleSchema = new mongoose.Schema({
  googleId: String,
  email: String,
  username: String,
  profileImage: String,
});










const GithubSchema = new mongoose.Schema({
  githubId: String,
  email: String,
  username: String,
  profileImage: String,
});











const LinkedinSchema = new mongoose.Schema({
  linkedinId: String,
  email: String,
  username: String,
  profileImage: String,
});








const TwitterSchema = new mongoose.Schema({
  twitterId: String,
  
  username: String,
  profileImage: String,
});









const LocalSchema = new mongoose.Schema({
  email: String,
  password: String,
  
    
  resetToken: String,
  resetTokenExpires: Date,
  
  
  verificationToken: String,
  verificationTokenExpires: Date,
  
  
  
  username: String,
  profileImage: String,
})
















/* ------------------------------------------
.                MAIN SCHEMA
------------------------------------------ */
const UserSchema = new mongoose.Schema({
  google: GoogleSchema,
  github: GithubSchema,
  linkedin: LinkedinSchema,

  twitter: TwitterSchema,

  

  local: LocalSchema,




  username: String,
  profileImage: String,
  createdAt: String,
  role: {
    type: String,
    default: 'user',
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  email: String,





  about: {
    type: String,
    default: `Hi there Stranger! Wanna know about me? Well, to be honest, there's not much to say. I am just a human from Planet Earth. I love making friends and learning new things. I LOVE exploring the unexplored adventures of life. I wanna live my life to the fullest. Let's be friends, OK?`,
  },



  title: {
    type: String,
    default: `A Human Being`,
  },
  location: {
    type: String,
    default: `Somewhere on Earth`, 
  },
  careerStatus: String,
  workingAt: String,
  



  websiteLink: String,
  twitterHandle: String,
});







/* ------------------------------------------
.                USER MODEL
------------------------------------------ */
module.exports = User = mongoose.model('User', UserSchema);