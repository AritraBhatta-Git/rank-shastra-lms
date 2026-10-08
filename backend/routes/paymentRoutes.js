const express = require('express');
const Razorpay = require('razorpay');
const crypto = require('crypto');
require('dotenv').config();

const router = express.Router();

// Debug: Check if keys are loaded
console.log('🔑 Razorpay Key ID:', process.env.RAZORPAY_KEY_ID ? '✅ Loaded' : '❌ Missing');
console.log('🔑 Razorpay Secret:', process.env.RAZORPAY_SECRET ? '✅ Loaded' : '❌ Missing');

// Initialize Razorpay
let razorpay;
try {
    razorpay = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_SECRET
    });
    console.log('✅ Razorpay initialized');
} catch (err) {
    console.error('❌ Razorpay init failed:', err.message);
}

// 1. Create Order
router.post('/create-order', async (req, res) => {
    console.log('📦 Create order request received:', req.body);
    
    try {
        const { amount } = req.body;
        
        if (!amount || amount <= 0) {
            console.log('❌ Invalid amount:', amount);
            return res.status(400).json({ error: 'Valid amount is required' });
        }
        
        const options = {
            amount: Math.round(amount * 100),
            currency: 'INR',
            receipt: `receipt_${Date.now()}`
        };
        
        console.log('📤 Creating order with options:', options);
        
        const order = await razorpay.orders.create(options);
        console.log('✅ Order created:', order.id);
        
        res.json(order);
        
    } catch (error) {
        console.error('❌ Create order error:', error);
        console.error('Error details:', error.response?.data || error.message);
        res.status(500).json({ 
            error: 'Failed to create order', 
            details: error.message,
            razorpay_error: error.response?.data
        });
    }
});

// 2. Verify Payment
router.post('/verify-payment', async (req, res) => {
    console.log('🔐 Verify payment request received');
    
    try {
        const { order_id, payment_id, signature } = req.body;
        
        const body = order_id + "|" + payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_SECRET)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature === signature) {
            console.log('✅ Payment verified successfully:', payment_id);
            res.json({ success: true, message: "Payment verified successfully" });
        } else {
            console.log('❌ Invalid signature for payment:', payment_id);
            res.status(400).json({ success: false, message: "Invalid signature" });
        }
    } catch (error) {
        console.error('❌ Verify error:', error);
        res.status(500).json({ error: 'Verification failed' });
    }
});

// Test route
router.get('/test', (req, res) => {
    res.json({ 
        message: 'Payment routes working!',
        key_loaded: !!process.env.RAZORPAY_KEY_ID,
        secret_loaded: !!process.env.RAZORPAY_SECRET
    });
});

module.exports = router;