import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hotelzify - Twilio 10 DLC Verification',
  description: 'SMS Consent and Compliance Documentation for Twilio 10 DLC Campaign Registration',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
