const router = require('express').Router();
const DnsController = require('../controllers/DnsController');



router.post('/getIpAddress', DnsController.find_ip_address);





module.exports = router;