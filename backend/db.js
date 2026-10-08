const { Pool } = require('pg');
const { drizzle } = require('drizzle-orm/node-postgres');
const dns = require('dns');
require('dotenv').config();
const schema = require('./schema');


// Extract hostname from connection string
const dbUrl = process.env.DATABASE_URL;
const NEON_HOST = dbUrl ? dbUrl.split('@')[1].split('/')[0].split('?')[0] : '';

async function createPool() {
  console.log(`🚀 Connecting to: ${NEON_HOST}`);

  
  // Set public DNS
  try { dns.setServers(['8.8.8.8', '1.1.1.1']); } catch(e) {}

  let targetHost = NEON_HOST;
  
  try {
    const addresses = await new Promise((resolve, reject) => {
      dns.resolve4(NEON_HOST, (err, addrs) => {
        if (err) reject(err);
        else resolve(addrs);
      });
    });
    if (addresses && addresses.length > 0) {
      targetHost = addresses[0];
      console.log(`✅ Host resolved to IP: ${targetHost}`);
    }
  } catch (err) {
    console.warn('⚠️ DNS Resolution failed:', err.message);
  }

  // Manually parse connection string for full control
  const pool = new Pool({
    user: 'neondb_owner',
    host: targetHost,
    database: 'neondb',
    password: 'npg_mla4NVqGXs0S',
    port: 5432,
    ssl: { 
      rejectUnauthorized: false, // In development, bypass full cert chain check
      servername: NEON_HOST,      // Hint for SNI
      checkServerIdentity: () => undefined // Bypasses the "altnames" mismatch error
    },
    connectionTimeoutMillis: 15000,
  });

  pool.on('connect', () => {
    console.log('✅ Connected to Neon PostgreSQL (IP Bypass Mode)');
  });

  return pool;
}

// Global DB instance placeholder
let db;
let pool;

async function init() {
  try {
    pool = await createPool();
    db = drizzle(pool, { schema });
    
    const client = await pool.connect();
    console.log('✅ Database connection verified!');
    client.release();
  } catch (err) {
    console.error('❌ Connectivity Fix Failed:', err.message);
    console.log('💡 Note: Your network is likely blocking port 5432 or Neon.tech entirely.');
  }
}

const initPromise = init();

module.exports = {
  get db() { return db; },
  get pool() { return pool; },
  initPromise
};








