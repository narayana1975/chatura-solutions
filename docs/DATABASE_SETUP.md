# Database Setup Guide for Chatura Solutions

This guide walks you through setting up your Supabase database and configuring environment variables for the contact forms and consultation requests.

## Quick Start

### 1. Get Your Supabase Credentials
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Navigate to **Settings** → **API**
4. Copy these values:
   - **Project URL** (copy the entire URL, e.g., `https://your-project.supabase.co`)
   - **anon public** key (under "Project API keys")
   - **service_role secret** key (under "Project API keys" - scroll down, keep this SECRET!)

### 2. Create `.env.local` File
```bash
# From your project root directory
cp .env.example .env.local
```

### 3. Add Your Credentials to `.env.local`
Edit `.env.local` and replace the placeholder values:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-actual-service-role-key-here
```

### 4. Create Database Tables
Copy and run the following SQL in your Supabase SQL Editor (go to **SQL Editor** in the left sidebar):

```sql
-- Create contact_inquiries table
CREATE TABLE contact_inquiries (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create consultations table
CREATE TABLE consultations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  target_country TEXT,
  target_university TEXT,
  education_level TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 5. Test Your Setup
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit http://localhost:3000/contact and submit a test message. If successful, you'll see "Message sent successfully!"

---

## Environment Variables Explained

### Public Variables (Safe to expose)
- **NEXT_PUBLIC_SUPABASE_URL**: Your Supabase project URL
  - Example: `https://abcdefg123.supabase.co`
  - Location: Supabase Dashboard → Settings → API → Project URL

- **NEXT_PUBLIC_SUPABASE_ANON_KEY**: Anonymous key for client-side operations
  - Location: Supabase Dashboard → Settings → API → Project API keys → anon public

### Private Variable (KEEP SECRET!)
- **SUPABASE_SERVICE_ROLE_KEY**: Admin key for server-side operations
  - Location: Supabase Dashboard → Settings → API → Project API keys → service_role secret
  - This key has elevated permissions and should NEVER be exposed to the client
  - It's used by your API routes to bypass Row Level Security (RLS) policies
  - NEVER commit this to git (already in `.gitignore`)

---

## Database Schema Details

### contact_inquiries Table

This table stores contact form submissions from your contact page.

| Column | Type | Required | Notes |
|--------|------|----------|-------|
| id | BIGSERIAL | ✓ | Primary key, auto-increments |
| name | TEXT | ✓ | User's full name |
| email | TEXT | ✓ | User's email address |
| phone | TEXT | ✓ | User's phone number |
| subject | TEXT | ✓ | Subject of the inquiry |
| message | TEXT | ✓ | Message content |
| created_at | TIMESTAMP | ✓ | Auto-set to current timestamp |

### consultations Table

This table stores educational consultation requests.

| Column | Type | Required | Notes |
|--------|------|----------|-------|
| id | BIGSERIAL | ✓ | Primary key, auto-increments |
| name | TEXT | ✓ | User's full name |
| email | TEXT | ✓ | User's email address |
| phone | TEXT | ✓ | User's phone number |
| target_country | TEXT | ✗ | Desired country for education |
| target_university | TEXT | ✗ | Desired university name |
| education_level | TEXT | ✓ | Current education level |
| created_at | TIMESTAMP | ✓ | Auto-set to current timestamp |

---

## API Endpoints

### POST /api/contact
Submit a contact form inquiry.

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (234) 567-8900",
  "subject": "Question about services",
  "message": "I would like to know more about..."
}
```

**Success response (201):**
```json
{
  "success": true,
  "message": "Contact inquiry submitted successfully",
  "data": [{"id": 1, "name": "John Doe", ...}]
}
```

**Error response (400/500):**
```json
{
  "error": "Descriptive error message"
}
```

### POST /api/consultation
Submit an educational consultation request.

**Request body:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "phone": "+1 (345) 678-9012",
  "education_level": "bachelor",
  "target_country": "USA",
  "target_university": "MIT"
}
```

**Success response (201):**
```json
{
  "success": true,
  "message": "Consultation request submitted successfully",
  "data": [{"id": 1, "name": "Jane Doe", ...}]
}
```

---

## Row Level Security (RLS)

Your database uses Row Level Security (RLS) to protect your data. Here's what you need to know:

### Why Service Role Key is Required
- The anonymous key (`NEXT_PUBLIC_SUPABASE_ANON_KEY`) cannot bypass RLS policies
- Your API routes use the service role key to securely insert data while enforcing RLS on reads
- This provides a balance between security and functionality

### If RLS is Causing Issues
If you get "Failed to save contact inquiry" errors:

**Option 1: Ensure Service Role Key is Added (Recommended)**
```
SUPABASE_SERVICE_ROLE_KEY=your-actual-service-role-key-here
```
Then restart your dev server.

**Option 2: Disable RLS (Development Only)**
In Supabase SQL Editor, run:
```sql
-- WARNING: Only for development/testing!
ALTER TABLE contact_inquiries DISABLE ROW LEVEL SECURITY;
ALTER TABLE consultations DISABLE ROW LEVEL SECURITY;
```

**Option 3: Create RLS Policies for Anonymous Access**
In Supabase SQL Editor, run:
```sql
-- Allow anonymous users to insert into contact_inquiries
CREATE POLICY "Allow anonymous inserts" ON contact_inquiries
  FOR INSERT WITH CHECK (true);

-- Allow anonymous users to insert into consultations
CREATE POLICY "Allow anonymous inserts" ON consultations
  FOR INSERT WITH CHECK (true);
```

---

## Troubleshooting

### ❌ Error: "Missing Supabase environment variables"
**Cause:** `.env.local` is missing or incomplete

**Fix:**
1. Create `.env.local`: `cp .env.example .env.local`
2. Add your actual Supabase credentials
3. Restart dev server: `npm run dev`

### ❌ Error: "Failed to save contact inquiry" or "Failed to save consultation request"
**Cause:** RLS policy is blocking the insert, or service role key is missing

**Fix:**
1. Verify `SUPABASE_SERVICE_ROLE_KEY` is in `.env.local`
2. Verify the value is correct (from Supabase Dashboard → Settings → API)
3. Restart dev server
4. If still failing, check Supabase logs: **Logs** → **Database** in the sidebar

### ❌ Error: "The contact_inquiries table does not exist"
**Cause:** Tables haven't been created in Supabase

**Fix:**
1. Go to Supabase Dashboard → **SQL Editor**
2. Click **New Query**
3. Copy and paste the SQL from "Create Database Tables" section
4. Click **Run**

### ❌ Error: "Please provide a valid phone number"
**Cause:** Phone number format doesn't match validation

**Fix:**
- Use formats like: `+1 (234) 567-8900`, `(234) 567-8900`, `+1-234-567-8900`, `1234567890`
- Avoid special characters except: `+ - ( )`

### ❌ Error: "Please provide a valid email address"
**Cause:** Email format is invalid

**Fix:**
- Use standard email format: `name@domain.com`

### ❌ CORS Errors in Browser Console
**Cause:** Browser blocking requests to Supabase

**Fix:**
1. Supabase handles CORS automatically for its domains
2. If you're getting CORS errors, verify your Supabase URL is correct
3. Check browser console for the exact error

---

## Security Checklist

- [ ] `.env.local` is in `.gitignore` (should already be set up)
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is NEVER hardcoded in any file
- [ ] `SUPABASE_SERVICE_ROLE_KEY` is ONLY in `.env.local` (not `.env.example`)
- [ ] You're using RLS on your database tables
- [ ] You've enabled HTTPS for your production domain

---

## Useful Supabase Links

- [Supabase Documentation](https://supabase.com/docs)
- [Supabase SQL Editor](https://supabase.com/dashboard/project/_/sql/new)
- [Environment Variables Best Practices](https://nextjs.org/docs/basic-features/environment-variables)
- [Row Level Security Guide](https://supabase.com/docs/guides/auth/row-level-security)

---

## Next Steps

Once your database is set up:
1. Test both forms at `/contact` and `/educational-consultation`
2. Verify data appears in Supabase dashboard under **Table Editor**
3. Set up email notifications if desired (in Supabase)
4. Deploy to production with the same environment variables set in Vercel
