import { createClient } from '@supabase/supabase-js'

// Get Supabase configuration from environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Validate environment variables
if (!supabaseUrl) {
  console.error('[v0] Missing NEXT_PUBLIC_SUPABASE_URL environment variable')
  throw new Error(
    'Missing NEXT_PUBLIC_SUPABASE_URL environment variable. ' +
    'Please check your .env.local file and ensure it contains a valid Supabase URL. ' +
    'See DATABASE_SETUP.md for detailed setup instructions.'
  )
}

if (!supabaseAnonKey) {
  console.error('[v0] Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable')
  throw new Error(
    'Missing NEXT_PUBLIC_SUPABASE_ANON_KEY environment variable. ' +
    'Please check your .env.local file and ensure it contains a valid Supabase anonymous key. ' +
    'See DATABASE_SETUP.md for detailed setup instructions.'
  )
}

if (!supabaseServiceKey) {
  console.warn(
    '[v0] Missing SUPABASE_SERVICE_ROLE_KEY environment variable. ' +
    'If your database has RLS enabled, server-side operations will fail. ' +
    'See DATABASE_SETUP.md for instructions on adding the service role key.'
  )
}

// Validate URL format
if (!supabaseUrl.startsWith('https://')) {
  console.warn('[v0] Supabase URL should start with https://')
}

// Create Supabase client for server-side operations with service role key
// This bypasses RLS policies and is used for API routes
export const createServerClient = () => {
  const key = supabaseServiceKey || supabaseAnonKey
  return createClient(supabaseUrl, key)
}

// Initialize the client (reused across requests)
let supabaseClient: ReturnType<typeof createClient> | null = null

export const getSupabaseClient = () => {
  if (!supabaseClient) {
    supabaseClient = createServerClient()
  }
  return supabaseClient
}
