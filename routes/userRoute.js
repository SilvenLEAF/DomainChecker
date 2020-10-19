const router = require('express').Router();
const userController = require('../controllers/userController');




// ---------------------GET LOGGED IN USER
router.get('/', (req, res, next)=>{  
  if(req.user){
    res.json({ user: req.user })
  } else {
    res.json({ msg: `Not logged in` })
  }
})





router.get('/all', userController.get_all_users);
router.delete('/', userController.delete_account);
router.put('/', userController.update_profile);





module.exports = router;