import { Router } from 'express';
import { ContactControllers } from '../controllers/contact.controller';

const router = Router();

router.post('/', ContactControllers.create);
// router.get('/',ContactControllers.getAll)

export default router;
