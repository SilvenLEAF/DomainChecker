import { Router } from 'express';
import * as DnsController from '../controllers/DnsController';




const router = Router();



router.post('/getIpAddress', DnsController.find_ip_address);





export default router;