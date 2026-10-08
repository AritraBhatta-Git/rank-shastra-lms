const { pgTable, serial, text, varchar, timestamp, boolean, date } = require('drizzle-orm/pg-core');

const admissions = pgTable('admissions', {
  id: serial('id').primaryKey(),
  studentName: varchar('student_name', { length: 255 }).notNull(),
  dob: date('dob'),
  gender: varchar('gender', { length: 50 }),
  countryCode: varchar('country_code', { length: 10 }).default('+91'),
  mobile: varchar('mobile', { length: 20 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),

  // Academic Details
  institutionType: varchar('institution_type', { length: 50 }),
  schoolName: varchar('school_name', { length: 255 }),
  board: varchar('board', { length: 255 }),
  currentClass: varchar('current_class', { length: 50 }),
  degree: varchar('degree', { length: 255 }),
  stream: varchar('stream', { length: 255 }),
  targetExam: varchar('target_exam', { length: 255 }),

  // Course Details
  courseApplied: varchar('course_applied', { length: 255 }),
  mode: varchar('mode', { length: 50 }),

  // Guardian's Details
  fatherName: varchar('father_name', { length: 255 }),
  motherName: varchar('mother_name', { length: 255 }),
  guardianOtherName: varchar('guardian_other_name', { length: 255 }),
  guardianCountryCode: varchar('guardian_country_code', { length: 10 }).default('+91'),
  guardianMobile: varchar('guardian_mobile', { length: 20 }),
  occupation: varchar('occupation', { length: 255 }),
  income: varchar('income', { length: 50 }),

  // Address
  address: text('address'),
  city: varchar('city', { length: 100 }),
  state: varchar('state', { length: 100 }),
  pinCode: varchar('pin_code', { length: 20 }),

  // Additional Info
  source: varchar('source', { length: 255 }),
  previousCoaching: varchar('previous_coaching', { length: 255 }),

  // Metadata
  declaration: boolean('declaration').default(false),
  isQuickLead: boolean('is_quick_lead').default(false),
  createdAt: timestamp('created_at').defaultNow()
});

module.exports = { admissions };
