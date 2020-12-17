

import { Strategy } from 'passport-twitter';
import User from '../../models/User';







export default new Strategy(
  {
    consumerKey: process.env.TWITTER_CONSUMER_KEY!,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET!,
    callbackURL: `/auth/twitter/callback`
  },




  (accessToken, refreshToken, profile, done)=>{
    console.log(profile);

    User.findOne({ 'twitter.twitterId': profile.id }).then(existingUser=>{


      // if the user already exists, retrieve the account
      if(existingUser) return done(undefined, existingUser);



      // if not, create a new account
      User.create({
        username: profile.displayName,
        profileImage: profile.photos![0].value,
        createdAt: new Date(),
        isVerified: true,

        twitter: {
          twitterId: profile.id,

          username: profile.displayName,
          profileImage: profile.photos![0].value,
        },


        twitterHandle: `@${ profile.username }`,


        
      }).then(newUser=> done(undefined, newUser));




    })
  } 
)