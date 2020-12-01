const router = require('express').Router();
const resetPasswordController = require('../../controllers/mailControllers/resetPasswordController');






router.post('/forgottenPassword', resetPasswordController.report_forgotten_password);
router.post('/resetPassword', resetPasswordController.reset_old_password_with_new_one)







module.exports = router;