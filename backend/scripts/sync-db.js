const dbModule = require('../db');

async function sync() {
  console.log('🚀 Starting Database Sync...');
  
  try {
    await dbModule.initPromise;
    const pool = dbModule.pool;


    // Create the admissions table manually if Drizzle push is tricky in this environment
    const sql = `
      CREATE TABLE IF NOT EXISTS admissions (
        id SERIAL PRIMARY KEY,
        student_name VARCHAR(255) NOT NULL,
        dob DATE,
        gender VARCHAR(50),
        country_code VARCHAR(10) DEFAULT '+91',
        mobile VARCHAR(20) NOT NULL,
        email VARCHAR(255) NOT NULL,
        institution_type VARCHAR(50),
        school_name VARCHAR(255),
        board VARCHAR(255),
        current_class VARCHAR(50),
        degree VARCHAR(255),
        stream VARCHAR(255),
        target_exam VARCHAR(255),
        course_applied VARCHAR(255),
        mode VARCHAR(50),
        father_name VARCHAR(255),
        mother_name VARCHAR(255),
        guardian_other_name VARCHAR(255),
        guardian_country_code VARCHAR(10) DEFAULT '+91',
        guardian_mobile VARCHAR(20),
        occupation VARCHAR(255),
        income VARCHAR(50),
        address TEXT,
        city VARCHAR(100),
        state VARCHAR(100),
        pin_code VARCHAR(20),
        source VARCHAR(255),
        previous_coaching VARCHAR(255),
        declaration BOOLEAN DEFAULT FALSE,
        is_quick_lead BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    
    await pool.query(sql);
    console.log('✅ Admissions table verified/created.');
    process.exit(0);
  } catch (err) {
    console.error('❌ Sync failed:', err.message);
    process.exit(1);
  }
}

sync();
