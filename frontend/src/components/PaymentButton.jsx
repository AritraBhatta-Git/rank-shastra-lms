import { useState } from 'react';
import axios from 'axios';

const PaymentButton = ({ amount = 500, buttonText = "Pay Now", onSuccess, className = "" }) => {
    const [loading, setLoading] = useState(false);
    
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    const razorpayKey = import.meta.env.VITE_RAZORPAY_KEY_ID || 'rzp_test_SjaPMIiu7BCN3h';

    const getNumericAmount = (priceStr) => {
        if (typeof priceStr === 'number') return priceStr;
        const match = String(priceStr).match(/\d+/);
        if (match) return parseInt(match[0].replace(/,/g, ''));
        return 500;
    };

    const handlePayment = async () => {
        setLoading(true);
        
        const finalAmount = getNumericAmount(amount);
        if (finalAmount < 1) {
            alert('Invalid amount');
            setLoading(false);
            return;
        }

        try {
            // 1. Create Order
            const { data: order } = await axios.post(
                `${apiUrl}/payment/create-order`,
                { amount: finalAmount },
                { headers: { 'Content-Type': 'application/json' } }
            );

            // 2. Razorpay Options
            const options = {
                key: razorpayKey,
                amount: order.amount,
                currency: order.currency,
                name: 'Rank Shastra',
                description: `Payment of ₹${finalAmount}`,
                order_id: order.id,
                handler: async (response) => {
                    // 3. Verification
                    try {
                        const { data: verification } = await axios.post(
                            `${apiUrl}/payment/verify-payment`,
                            {
                                order_id: response.razorpay_order_id,
                                payment_id: response.razorpay_payment_id,
                                signature: response.razorpay_signature
                            }
                        );

                        if (verification.success) {
                            alert(`✅ Payment Successful! Amount: ₹${finalAmount}`);
                            if (onSuccess) onSuccess(verification);
                        } else {
                            alert('❌ Verification Failed. Contact Support.');
                        }
                    } catch (err) {
                        console.error('Verification error:', err);
                        alert('Payment verification failed. Please contact support.');
                    }
                },
                prefill: {
                    name: "Student",
                    email: "student@rankshastra.com",
                    contact: "9876543210"
                },
                theme: { color: "#c8f000" } // Updated to match the brand neon green
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
            razorpay.on('payment.failed', (response) => {
                alert(`Payment Failed: ${response.error.description}`);
                setLoading(false);
            });
        } catch (error) {
            console.error('Error:', error);
            alert(error.response?.data?.error || 'Network/Server Error');
        } finally {
            setLoading(false);
        }
    };

    // Razorpay script loader
    const loadScript = () => {
        return new Promise((resolve) => {
            if (window.Razorpay) return resolve(true);
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
    };

    const onClick = async () => {
        const loaded = await loadScript();
        if (!loaded) {
            alert("Razorpay SDK failed to load. Check internet.");
            return;
        }
        handlePayment();
    };

    return (
        <button onClick={onClick} disabled={loading} className={className}>
            {loading ? 'Processing...' : buttonText}
        </button>
    );
};

export default PaymentButton;