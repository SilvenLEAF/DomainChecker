import { Router } from 'express';
import * as userController from '../../controllers/userController';




// -------------------middlewares-------------------
import isLoggedin from '../../middlewares/isLoggedin';
import DeleteAccount from '../../middlewares/DeleteAccount';
import UpdateAccount from '../../middlewares/UpdateAccount';





const router = Router();






// -------------------------GET LOGGED IN USER
router.get('/', isLoggedin, (req, res, next)=>{
  res.json({ user: req.user });
});







router.get('/all', isLoggedin, userController.get_all_users);
router.delete('/', isLoggedin, DeleteAccount, userController.delete_account);
router.put('/', isLoggedin, UpdateAccount, userController.update_account);

router.put('/changeEmail', isLoggedin, UpdateAccount, userController.change_email);










export default router;