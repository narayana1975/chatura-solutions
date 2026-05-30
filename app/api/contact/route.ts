import { NextRequest, NextResponse } from 'next/server'
import { getSupabaseClient } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, subject, and message are all required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Validate phone format (basic check)
    const phoneRegex = /^[\d\s\-\+\(\)]+$/
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number' },
        { status: 400 }
      )
    }

    // Get Supabase client
    const supabase = getSupabaseClient()

    // Insert contact inquiry into database
    const { error, data } = await supabase
      .from('contact_inquiries')
      .insert([
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          subject: subject.trim(),
          message: message.trim(),
        },
      ])
      .select()

    if (error) {
      console.error('[v0] Database error:', {
        code: error.code,
        message: error.message,
        details: error.details,
      })
      
      // Provide more specific error messages
      if (error.code === 'PGRST116') {
        return NextResponse.json(
          { error: 'The contact_inquiries table does not exist. Please create it first using the DATABASE_SETUP.md instructions.' },
          { status: 500 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to save contact inquiry. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Contact inquiry submitted successfully',
        data 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[v0] API error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return NextResponse.json(
      { error: `Internal server error: ${errorMessage}` },
      { status: 500 }
    )
  }
}
