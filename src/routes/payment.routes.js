import express from 'express';
import { initiatePayment, verifyPayment } from '../payment/payment.controller.js';

const router = express.Router();

router.post('/pay', initiatePayment);
router.get('/verify', verifyPayment);

export default router;
