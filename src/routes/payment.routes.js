

import express from 'express';
import * as paymentController from '../concerns/payment/payment.controller.js';
import {handlePaystackWebhook} from '../concerns/payment/webhook.controller.js';

const router = express.Router();

router.post('/initiate', paymentController.initiatePayment);

// Important: raw body for Paystack signature validation (if you add signature check later)
router.post('/webhook', express.json({ verify: (req, res, buf) => { req.rawBody = buf; } }), handlePaystackWebhook);



export default router;
