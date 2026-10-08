const { defineConfig } = require('drizzle-kit');
require('dotenv').config();

const dbUrl = process.env.DATABASE_URL || '';
// Bypassing DNS for drizzle-kit
const ipUrl = dbUrl.replace('ep-round-surf-ao77zwb8-pooler.c-2.ap-southeast-1.aws.neon.tech', '13.251.17.193');

module.exports = defineConfig({
  schema: './schema.js',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    host: '13.251.17.193',
    user: 'neondb_owner',
    password: 'npg_mla4NVqGXs0S',
    database: 'neondb',
    port: 5432,
    ssl: { 
      rejectUnauthorized: false,
      servername: 'ep-round-surf-ao77zwb8-pooler.c-2.ap-southeast-1.aws.neon.tech'
    }
  },
});



