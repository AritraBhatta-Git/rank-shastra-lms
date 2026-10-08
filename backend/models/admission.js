const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
  // 1. Student Information
  studentName: { type: String, required: true },
  dob: { type: Date },
  gender: { type: String },
  countryCode: { type: String, default: '+91' },
  mobile: { type: String, required: true },
  email: { type: String, required: true },

  // 2. Academic Details
  institutionType: { type: String, enum: ['School', 'College'] },
  schoolName: { type: String },
  board: { type: String },
  currentClass: { type: String },
  degree: { type: String },
  stream: { type: String },
  targetExam: { type: String },

  // 3. Course Details
  courseApplied: { type: String },
  mode: { type: String },

  // 4. Guardian's Details
  fatherName: { type: String },
  motherName: { type: String },
  guardianOtherName: { type: String },
  guardianCountryCode: { type: String, default: '+91' },
  guardianMobile: { type: String },
  occupation: { type: String },
  income: { type: String },

  // 5. Address
  address: { type: String },
  city: { type: String },
  state: { type: String },
  pinCode: { type: String },

  // 6. Additional Info
  source: { type: String },
  previousCoaching: { type: String },

  // Metadata
  declaration: { type: Boolean, default: false },
  isQuickLead: { type: Boolean, default: false }, // To distinguish between quick form and full form
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Admission', AdmissionSchema);


