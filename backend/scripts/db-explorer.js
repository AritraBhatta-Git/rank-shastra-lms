const dbModule = require('../db');

async function explorer() {
  console.log('🔍 Database Explorer - Table: admissions');
  
  try {
    // Wait for the DB to initialize (DNS bypass etc.)
    await dbModule.initPromise;
    
    const pool = dbModule.pool;
    if (!pool) throw new Error('Database pool could not be initialized.');

    const client = await pool.connect();
    
    // 1. Check Table Structure
    const columns = await client.query(`
      SELECT column_name, data_type 
      FROM information_schema.columns 
      WHERE table_name = 'admissions'
    `);
    
    console.log('\n📋 Table Structure:');
    columns.rows.forEach(col => {
      console.log(`  - ${col.column_name} (${col.data_type})`);
    });

    // 2. Count Rows
    const count = await client.query('SELECT COUNT(*) FROM admissions');
    console.log(`\n🔢 Total Records: ${count.rows[0].count}`);

    // 3. Show Latest 5 Records
    if (parseInt(count.rows[0].count) > 0) {
      const latest = await client.query('SELECT id, student_name, mobile, created_at FROM admissions ORDER BY created_at DESC LIMIT 5');
      console.log('\n🆕 Latest 5 Records:');
      latest.rows.forEach(row => {
        console.log(`  [ID: ${row.id}] ${row.student_name} (${row.mobile}) - ${row.created_at}`);
      });
    } else {
      console.log('\n📭 No records found yet.');
    }

    client.release();
    process.exit(0);
  } catch (err) {
    console.error('❌ Explorer failed:', err.message);
    process.exit(1);
  }
}

explorer();
