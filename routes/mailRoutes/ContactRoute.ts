import { Router, Request, Response, NextFunction } from 'express'
import * as contactController from '../../controllers/mailControllers/contactController';

const router = Router();





router.post('/contact', contactController.users_contact_me_to_my_email_from_the_frontEND_form);





export default router;