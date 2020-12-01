const router = require('express').Router();
const verifyEmailController = require('../../controllers/mailControllers/verifyEmailController');







router.post('/requestVerification', verifyEmailController.request_verification);
router.post('/verifyEmail', verifyEmailController.verify_email)









module.exports = router;