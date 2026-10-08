# Rank Shastra Backend - Database Setup

This project has been migrated from MongoDB to **Neon PostgreSQL** using **Drizzle ORM**.

## 🚀 Database Configuration

The backend is configured to connect to your Neon database using the following environment variable in `.env`:

```env
DATABASE_URL=postgresql://neondb_owner:npg_mla4NVqGXs0S@ep-round-surf-ao77zwb8-pooler.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require
```

### Key Components:
- **`db.js`**: Initializes the PostgreSQL pool and Drizzle instance.
- **`schema.js`**: Defines the database schema (Table: `admissions`).
- **`server.js`**: Handles API requests using Drizzle for type-safe database operations.

## 🛠️ Database Management Commands

We have added Drizzle-specific scripts to `package.json`:

1. **Push Schema**: Synchronize your local schema with the Neon database.
   ```bash
   npm run db:push
   ```

2. **Database Studio**: Open a local GUI to view and edit your Neon data.
   ```bash
   npm run db:studio
   ```

3. **Manual Sync**: If push fails due to network restrictions, use the custom sync script:
   ```bash
   node scripts/sync-db.js
   ```

## 📝 Schema Details

The `admissions` table includes:
- **Student Info**: Name, DOB, Gender, Mobile, Email.
- **Academic Details**: Institution, Class, Board, Target Exam.
- **Guardian Details**: Parent names, Contact, Income.
- **Address**: City, State, Pin Code.
- **Lead Metadata**: `isQuickLead` (to distinguish between quick modal vs full form).

## ⚠️ Troubleshooting Connectivity

If you see `getaddrinfo ENOTFOUND` in the logs:
1. Ensure your machine has internet access to `.neon.tech` domains.
2. If using a VPN or restricted network, you may need to whitelist the Neon host.
3. The current setup uses the **Pooler Host** for better performance in serverless/development environments.

---
*Created by Antigravity AI*
