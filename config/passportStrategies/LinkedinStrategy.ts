



import { Strategy } from 'passport-linkedin-oauth2';
import User from '../../models/User';





export default new Strategy(
  {
    clientID: process.env.LINKEDIN_CLIENT_ID!,
    clientSecret: process.env.LINKEDIN_CLIENT_SECRET!,
    callbackURL: `/auth/linkedin/callback`
  }, 

  (accessToken, refreshToken, profile, done)=>{
    console.log(profile);


    User.findOne({ 'linkedin.linkedinId': profile.id }).then(existingUser=>{


      // if the user already exists, retrieve the account
      if(existingUser) return done(undefined, existingUser);



      // if not, create a new account
      User.create({
        username: profile.displayName,
        profileImage: profile.photos[0]!.value,
        
        createdAt: new Date(),
        isVerified: true,
        // email: profile.emails![0].value,

        linkedin: {
          linkedinId: profile.id,
          // email: profile.emails![0].value,

          username: profile.displayName,
          profileImage: profile.photos![0].value,
        }
        
      }).then(newUser=> done(undefined, newUser));




    })
  }
)