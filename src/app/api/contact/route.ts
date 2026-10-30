import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length === 0) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 })
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'A valid email address is required' }, { status: 400 })
    }

    if (!message || typeof message !== 'string' || message.trim().length === 0) {
      return NextResponse.json({ error: 'Message cannot be empty' }, { status: 400 })
    }

    // Check if user has Resend API key configured in Vercel Environment Variables
    if (process.env.RESEND_API_KEY) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Portfolio Contact <onboarding@resend.dev>',
          to: ['pgpuneet2001@gmail.com'],
          reply_to: email,
          subject: `⚡ New Portfolio Inquiry from ${name.trim()}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      })

      if (resendRes.ok) {
        return NextResponse.json({ success: true, provider: 'resend' })
      }
    }

    // Default zero-config delivery via FormSubmit API to pgpuneet2001@gmail.com
    const forwardRes = await fetch('https://formsubmit.co/ajax/pgpuneet2001@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
        _subject: `⚡ Portfolio Inquiry: ${name.trim()}`,
        _template: 'table',
      }),
    })

    if (!forwardRes.ok) {
      throw new Error(`Upstream dispatch returned status ${forwardRes.status}`)
    }

    const data = await forwardRes.json()
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Contact form transmission error:', error)
    return NextResponse.json(
      { error: 'Transmission failed. Please reach out directly at pgpuneet2001@gmail.com' },
      { status: 500 }
    )
  }
}
