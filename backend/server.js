const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();


const dbModule = require('./db');
const { admissions } = require('./schema');
const { desc } = require('drizzle-orm');




// Swagger Configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Rank Shastra API',
      version: '1.0.0',
      description: 'API Documentation for Rank Shastra Admission & Payment System',
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT || 5000}`,
        description: 'Local development server',
      },
    ],
  },
  apis: ['./server.js', './routes/*.js'], // Path to the API docs
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// ========== ROUTES ==========

// Root route redirect to Swagger
app.get('/', (req, res) => {
  res.redirect('/api-docs');
});

// ✅ PAYMENT ROUTES IMPORT - YEH ADD KARO
const paymentRoutes = require('./routes/paymentRoutes');


// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Database Initialization Middleware

app.use(async (req, res, next) => {
    // Skip health check if needed, but here we wait for DB
    if (req.path === '/api/health') return next();
    
    try {
        await dbModule.initPromise;
        if (!dbModule.db) throw new Error('Database not ready');
        next();
    } catch (err) {
        res.status(503).json({ success: false, message: 'Database connection is still initializing. Please refresh in a moment.' });
    }
});


app.use('/api/payment', paymentRoutes);




/**
 * @swagger
 * /api/admissions:
 *   post:
 *     summary: Submit a new admission or lead
 *     tags: [Admissions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - studentName
 *               - mobile
 *               - email
 *             properties:
 *               studentName: { type: string }
 *               mobile: { type: string }
 *               email: { type: string }
 *               courseApplied: { type: string }
 *               isQuickLead: { type: boolean }
 *     responses:
 *       201:
 *         description: Admission submitted successfully
 *       400:
 *         description: Bad request
 */
app.post('/api/admissions', async (req, res) => {
  try {
    console.log('📝 New admission received:', req.body.studentName);
    const [newAdmission] = await dbModule.db.insert(admissions).values(req.body).returning();
    res.status(201).json({ success: true, message: 'Admission submitted successfully', data: newAdmission });
  } catch (error) {

    console.error('❌ Admission submit error:', error);
    res.status(400).json({ success: false, message: error.message });
  }
});

/**
 * @swagger
 * /api/admissions:
 *   get:
 *     summary: Retrieve all admissions
 *     tags: [Admissions]
 *     responses:
 *       200:
 *         description: List of all admissions
 *       500:
 *         description: Server error
 */
app.get('/api/admissions', async (req, res) => {
  try {
    const allAdmissions = await dbModule.db.query.admissions.findMany({
      orderBy: [desc(admissions.createdAt)]
    });
    res.status(200).json({ success: true, data: allAdmissions });
  } catch (error) {

    console.error('❌ Admission fetch error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});


app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: '🚀 RankShastra API is running' });
});

// Test route to check payment routes are working
app.get('/api/payment-test', (req, res) => {
  res.json({ message: 'Payment routes are registered! Use POST to /api/payment/create-order' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`✅ Payment routes available at http://localhost:${PORT}/api/payment/create-order`);
});