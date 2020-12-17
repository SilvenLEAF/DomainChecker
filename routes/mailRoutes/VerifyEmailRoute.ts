import { Router } from 'express'
import * as verifyEmailController from '../../controllers/mailControllers/verifyEmailController';




const router = Router();




router.post('/requestVerification', verifyEmailController.request_verification);
router.post('/verifyEmail', verifyEmailController.verify_email)









export default router;