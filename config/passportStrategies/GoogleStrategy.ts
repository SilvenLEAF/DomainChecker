

import { Strategy } from 'passport-google-oauth20';
import User from '../../models/User';
import bcrypt from 'bcryptjs';






export default new Strategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    callbackURL: `/auth/google/callback`
  },




  (accessToken, refreshToken, profile, done)=>{

    
    // users can not create 2 accouts with google and email
    if(profile.emails && profile.emails[0] && profile.emails[0].value){


      User.findOne({ 'local.email': profile.emails![0].value }).then(existingUser=>{


        // if the user already exists, retrieve the account
        if(existingUser) return done(undefined, existingUser);


        const password = Math.floor(Math.random() * 10000 + 10000).toString();

        

        // if not, create a new account
        User.create({
          username: profile.displayName,
          profileImage: profile.photos![0].value,
          
          createdAt: new Date(),
          isVerified: true,
          email: profile.emails![0].value,

          google: {
            googleId: profile.id,
            email: profile.emails![0].value,

            username: profile.displayName,
            profileImage: profile.photos![0].value,

          },


          local: {
            email: profile.emails![0].value,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync()),
            
            username: profile.displayName,
            profileImage: profile.photos![0].value,
          },
          

        }).then(newUser=> done(undefined, newUser));

      })



    } else {
      
      User.findOne({ 'google.googleId': profile.id }).then(existingUser=>{


        // if the user already exists, retrieve the account
        if(existingUser) return done(undefined, existingUser);



        // if not, create a new account
        User.create({
          username: profile.displayName,
          profileImage: profile.photos![0].value,
          
          createdAt: new Date(),
          isVerified: true,
          email: profile.emails![0].value,

          google: {
            googleId: profile.id,
            email: profile.emails![0].value,

            username: profile.displayName,
            profileImage: profile.photos![0].value,

          }


        }).then(newUser=> done(undefined, newUser));

      })



    }

  }
)