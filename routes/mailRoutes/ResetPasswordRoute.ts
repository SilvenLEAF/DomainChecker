import { Router, Request, Response, NextFunction } from 'express'
import * as resetPasswordController from '../../controllers/mailControllers/resetPasswordController';


const router = Router();



router.post('/forgottenPassword', resetPasswordController.report_forgotten_password);
router.post('/resetPassword', resetPasswordController.reset_old_password_with_new_one)







export default router;