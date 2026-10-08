const express = require('express');
const router = express.Router();
const admissionController = require('../controllers/admissionController');

// POST /api/admission - Submit admission form
router.post('/', admissionController.submit);

// GET /api/admission - Get all admissions (admin)
router.get('/', admissionController.getAll);

module.exports = router;
