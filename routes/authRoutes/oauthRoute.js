const router = require('express').Router();
const passport = require('passport');






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
.                 LINKEDIN
------------------------------------------ */
router.get('/auth/linkedin', passport.authenticate('linkedin'));




router.get('/auth/linkedin/callback',
  passport.authenticate('linkedin'),
  (req, res)=>{
    res.redirect('/');
  }
)








/* ------------------------------------------
.                 TWITTER
------------------------------------------ */
router.get('/auth/twitter', passport.authenticate('twitter'));




router.get('/auth/twitter/callback',
  passport.authenticate('twitter'),
  (req, res)=>{
    res.redirect('/');
  }
)





























module.exports = router;