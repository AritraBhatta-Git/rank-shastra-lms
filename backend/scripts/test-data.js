const dbModule = require('../db');
const { admissions } = require('../schema');

async function insertTest() {
  console.log('🧪 Inserting test admission...');
  
  try {
    await dbModule.initPromise;
    const db = dbModule.db;
    if (!db) throw new Error('Database not ready');

    
    const result = await db.insert(admissions).values({
      studentName: 'Test Student',
      mobile: '9876543210',
      email: 'test@rankshastra.com',
      courseApplied: 'NEET Preparation (Class 11 - 12)',
      institutionType: 'School',
      schoolName: 'Test High School',
      isQuickLead: false,
      declaration: true
    }).returning();

    console.log('✅ Test record inserted:', result[0]);
    process.exit(0);
  } catch (err) {
    console.error('❌ Insertion failed:', err.message);
    process.exit(1);
  }
}

insertTest();
