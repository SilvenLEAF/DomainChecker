const router = require('express').Router();
const passport = require('passport');





/* ------------------------------------------
.                 LOGOUT
------------------------------------------ */
router.get('/logout', (req, res)=>{
  req.logOut();
  res.redirect('/');
});









/* ------------------------------------------
.                 SIGNUP
------------------------------------------ */
router.post('/signup', (req, res, next)=>{
  passport.authenticate('local-signup', (err, user, info)=>{
    if(err) return res.status(400).json(err);

    req.logIn(user, (err)=>{
      if(err) return res.status(500).json({ msg: `Oops, something went wrong`, error: err.message });
    
      return res.json(user);
    })
    
  })(req, res, next)
})










/* ------------------------------------------
.                 LOGIN
------------------------------------------ */
router.post('/login', (req, res, next)=>{
  passport.authenticate('local-login', (err, user, info)=>{
    if(err) return res.status(400).json(err);

    req.logIn(user, (err)=>{
      if(err) return res.status(500).json({ msg: `Oops something went wrong`, error: err.message });


      return res.json(user)
    })



  })(req, res, next)
})














/* ------------------------------------------
.                 GOOGLE
------------------------------------------ */
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));



router.get('/auth/google/callback', 
  passport.authenticate('google'),
  (req, res)=>{
    res.redirect('/')
  }
)












/* ------------------------------------------
.                 GITHUB
------------------------------------------ */
router.get('/auth/github', passport.authenticate('github'));




router.get('/auth/github/callback',
  passport.authenticate('github'),
  (req, res)=>{
    res.redirect('/');
  }
)














/* ------------------------------------------
.                 FACEBOOK
------------------------------------------ */
router.get('/auth/facebook', passport.authenticate('facebook'));



router.get('/auth/facebook/callback',
  passport.authenticate('facebook'),
  (req, res)=>{
    res.redirect('/');
  }
)






















module.exports = router;