const AdmissionModel = require('../models/admission');

const admissionController = {
  async submit(req, res) {
    try {
      const { name, class: studentClass, target_exam, phone, email, mode } = req.body;

      // Basic validation
      if (!name || !studentClass || !target_exam || !phone || !email || !mode) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
      }

      const admission = await AdmissionModel.create({ name, class: studentClass, target_exam, phone, email, mode });

      return res.status(201).json({
        success: true,
        message: '🎉 Admission enquiry submitted! Our team will contact you shortly.',
        data: admission,
      });
    } catch (error) {
      console.error('Admission submit error:', error);
      return res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
  },

  async getAll(req, res) {
    try {
      const admissions = await AdmissionModel.findAll();
      return res.status(200).json({ success: true, data: admissions });
    } catch (error) {
      console.error('Get admissions error:', error);
      return res.status(500).json({ success: false, message: 'Server error.' });
    }
  },
};

module.exports = admissionController;
