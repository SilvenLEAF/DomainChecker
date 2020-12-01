



const Strategy = require('passport-linkedin-oauth2').Strategy;
const User = require('../../models/User');





module.exports = LinkedinStrategy = new Strategy(
  {
  clientID: process.env.LINKEDIN_CLIENT_ID,
  clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
  callbackURL: `/auth/linkedin/callback`,
  scope: ['r_emailaddress', 'r_liteprofile'],
  }, 

  (accessToken, refreshToken, profile, done)=>{
    console.log(profile);


    User.findOne({ 'linkedin.linkedinId': profile.id }).then(existingUser=>{


      // if the user already exists, retrieve the account
      if(existingUser) return done(null, existingUser);



      // if not, create a new account
      User.create({
        username: profile.displayName,
        profileImage: profile.photos[1].value || profile.photos[0].value,
        
        createdAt: new Date(),
        isVerified: true,
        email: profile.emails[0].value,

        'linkedin.linkedinId': profile.id,
        'linkedin.email': profile.emails[0].value,

        'linkedin.username': profile.displayName,
        'linkedin.profileImage': profile.photos[1].value || profile.photos[0].value,
      }).then(newUser=> done(null, newUser));




    })
  }
)