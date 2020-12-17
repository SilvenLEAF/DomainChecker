

import { Strategy } from 'passport-github';
import User from '../../models/User';







export default new Strategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID!,
    clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    callbackURL: `/auth/github/callback`
  },




  (accessToken, refreshToken, profile, done)=>{




    User.findOne({ 'github.githubId': profile.id }).then(existingUser =>{



      // if the user already exists, retrieve the account
      if(existingUser) return done(undefined, existingUser);



      // if not, create a new account
      User.create({
        username: profile.displayName,
        profileImage: profile.photos![0].value,
        
        createdAt: new Date(),
        isVerified: true,
        email: profile.emails![0].value,

        github: {
          githubId: profile.id,
          email: profile.emails![0].value,

          username: profile.displayName,
          profileImage: profile.photos![0].value,
        }
        
      }).then(newUser=> done(undefined, newUser));



    })
  }
)