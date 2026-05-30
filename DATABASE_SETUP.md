# Database Connection Setup Guide

This guide explains how to connect your forms to a database using environment variables.

## Overview

Your forms now use API routes to submit data to a database instead of direct client-side connections. This provides better security and control over your database operations.

## Environment Variables

You need to set up the following environment variables in your `.env.local` file:

### Required Variables

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

**Important:** If you have Row Level Security (RLS) enabled on your database tables, you MUST add the `SUPABASE_SERVICE_ROLE_KEY`. This key is used for server-side API operations and bypasses RLS policies.

- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are public variables (safe to expose in the browser)
- `SUPABASE_SERVICE_ROLE_KEY` is private and must never be exposed to the client

## How to Get Your Supabase Credentials

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click **Settings** → **API**
4. Copy the following values:
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - **service_role secret** → `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

### Getting the Service Role Key

The Service Role Key is found in the same API settings page, but note:
- It has elevated permissions and can bypass RLS policies
- NEVER expose it to the browser or client-side code
- Store it only in `.env.local` (which is in .gitignore)

## Setup Steps

### 1. Create `.env.local` file
```bash
cp .env.example .env.local
```

### 2. Add your Supabase credentials
Edit `.env.local` and replace the placeholder values with your actual Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=https://your-actual-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-key-here
```

### 3. Ensure Database Tables Exist
Your Supabase project should have these tables:

#### contact_inquiries
```sql
CREATE TABLE contact_inquiries (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

#### consultations
```sql
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

### 4. Test Your Connection
Start your development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Then test the forms:
- Contact form: http://localhost:3000/contact
- Educational Consultation: http://localhost:3000/educational-consultation

## API Routes

Your forms now submit to these API endpoints:

- **POST `/api/contact`** - Submit contact inquiries
- **POST `/api/consultation`** - Submit consultation requests

### Request Format

#### Contact Form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Subject line",
  "message": "Message content"
}
```

#### Consultation Form
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1 (234) 567-8900",
  "education_level": "bachelor",
  "target_country": "USA",
  "target_university": "Harvard"
}
```

## Troubleshooting

### Error: "Missing Supabase environment variables"
- Ensure your `.env.local` file has both `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- Check that the values are not empty or contain placeholder text
- Restart your development server after adding environment variables

### Error: "Failed to save contact inquiry" or "Failed to save consultation request"
This typically means your RLS policies are blocking the insert. Solutions:

**Option 1: Add the Service Role Key (Recommended for secure setup)**
1. Go to Supabase Dashboard → Settings → API
2. Copy the **service_role secret** key
3. Add it to your `.env.local`:
   ```
   SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
   ```
4. Restart your development server
5. Try submitting the form again

**Option 2: Disable RLS on the tables (Less secure, for testing only)**
In Supabase SQL Editor, run:
```sql
-- Only for development/testing!
ALTER TABLE contact_inquiries DISABLE ROW LEVEL SECURITY;
ALTER TABLE consultations DISABLE ROW LEVEL SECURITY;
```

**Option 3: Create RLS policies that allow anonymous inserts**
In Supabase SQL Editor, run:
```sql
-- Allow anonymous users to insert
CREATE POLICY "Allow anonymous inserts" ON contact_inquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous inserts" ON consultations
  FOR INSERT WITH CHECK (true);
```

### CORS Issues
If you see CORS errors, make sure your Supabase project allows requests from your domain.

### Error: "The contact_inquiries table does not exist"
1. Create the tables using the SQL provided in this guide (see "Ensure Database Tables Exist" section)
2. Or copy and run the SQL in your Supabase SQL Editor

## Security Notes

- `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` are public and safe to expose
- Never commit your `.env.local` file to git (it's in `.gitignore`)
- For sensitive operations, use the Service Role Key only on the server side
- Consider enabling Row Level Security (RLS) on your Supabase tables for added security

## Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Environment Variables](https://nextjs.org/docs/basic-features/environment-variables)
- [API Routes in Next.js](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
