const router = require('express').Router();
const userController = require('../../controllers/userController');


// -------------------middlewares-------------------
const isLoggedin = require('../../middlewares/isLoggedin');
const DeleteAccount = require('../../middlewares/DeleteAccount');
const UpdateAccount = require('../../middlewares/UpdateAccount');









// -------------------------GET LOGGED IN USER
router.get('/', isLoggedin, (req, res, next)=>{
  res.json({ user: req.user });
});







router.get('/all', isLoggedin, userController.get_all_users);
router.delete('/', isLoggedin, DeleteAccount, userController.delete_account);
router.put('/', isLoggedin, UpdateAccount, userController.update_account);

router.put('/changeEmail', isLoggedin, UpdateAccount, userController.change_email);













module.exports = router;