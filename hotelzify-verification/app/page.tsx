import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="border-b-4 border-blue-600 pb-4 mb-8">
          <h1 className="text-4xl font-bold text-gray-900">
            Hotelzify - Twilio 10 DLC Verification Documentation
          </h1>
        </div>

        {/* Campaign Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Campaign Overview
          </h2>
          <div className="space-y-2 text-gray-700">
            <p><strong>Brand:</strong> Hotelzify</p>
            <p><strong>Use Case:</strong> Transactional - Booking Confirmations and Stay Updates</p>
            <p><strong>Message Type:</strong> Hotel reservation confirmations, check-in/check-out notifications, and booking updates</p>
          </div>
        </section>

        {/* Compliance Summary */}
        <section className="mb-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            Compliance Summary
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li><strong>Express Written Consent:</strong> Obtained via AI voice agent during booking process</li>
            <li><strong>Clear Opt-In Language:</strong> Users explicitly asked if they want to receive text messages</li>
            <li><strong>STOP/HELP Keywords:</strong> Clearly communicated in both voice consent and confirmation SMS</li>
            <li><strong>Terms & Privacy:</strong> Links provided in confirmation message</li>
            <li><strong>Consent Logging:</strong> Timestamp, phone number, and source recorded for audit trail</li>
          </ul>
        </section>

        {/* Screenshot 1 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Screenshot 1: Consent Collection via AI Agent
          </h2>

          <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                Call Recording Interface - Express Written Consent Collection
              </h3>
              <div className="text-gray-700 space-y-2">
                <p>This screenshot demonstrates how Hotelzify collects express written consent from guests during the booking process via an AI voice agent. The conversation shows:</p>
                <ul className="list-disc ml-6 space-y-2 mt-3">
                  <li><span className="bg-yellow-200 px-1 font-semibold">Timestamp 14:21:03</span> - AI Agent explicitly asks: "Would you like to receive <strong>booking confirmations and stay updates by text message</strong>?"</li>
                  <li>Clear disclosure of <span className="bg-yellow-200 px-1 font-semibold">STOP and HELP keywords</span> for opt-out and assistance</li>
                  <li><span className="bg-yellow-200 px-1 font-semibold">Timestamp 14:21:08</span> - Guest provides affirmative consent: "Yes, please."</li>
                  <li><span className="bg-yellow-200 px-1 font-semibold">Timestamp 14:21:10</span> - AI Agent confirms the phone number where messages will be sent</li>
                  <li><span className="bg-yellow-200 px-1 font-semibold">Timestamp 14:21:12</span> - System logs consent with full audit trail: Booking ID, Phone Number, Timestamp, and Recording Source</li>
                  <li>Consent status displayed as <span className="bg-yellow-200 px-1 font-semibold">"Consent: YES"</span> in call details panel</li>
                  <li>Recording #A21983 available for compliance verification</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 border-2 border-gray-400 rounded overflow-hidden">
              <Image
                src="/screenshot1.png"
                alt="AI Agent Consent Collection - Call Recording Interface showing conversation flow"
                width={1280}
                height={810}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Screenshot 2 */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Screenshot 2: Opt-In Confirmation SMS
          </h2>

          <div className="border border-gray-300 rounded-lg p-6 bg-gray-50">
            <div className="mb-4">
              <h3 className="text-lg font-bold text-blue-600 mb-2">
                Initial Confirmation Text Message
              </h3>
              <div className="text-gray-700 space-y-2">
                <p>This screenshot shows the confirmation SMS sent immediately after consent is obtained. The message includes all required compliance elements:</p>
                <ul className="list-disc ml-6 space-y-2 mt-3">
                  <li><span className="bg-yellow-200 px-1 font-semibold">Sender Identification:</span> "Hotelzify" clearly displayed as the sender</li>
                  <li><span className="bg-yellow-200 px-1 font-semibold">Message Purpose:</span> "booking confirmations and stay updates"</li>
                  <li><span className="bg-yellow-200 px-1 font-semibold">Opt-Out Instructions:</span> "Reply STOP to opt out"</li>
                  <li><span className="bg-yellow-200 px-1 font-semibold">Help Instructions:</span> "Reply HELP for help"</li>
                  <li><span className="bg-yellow-200 px-1 font-semibold">Terms of Service:</span> https://hotelzify.com/terms-conditions</li>
                  <li><span className="bg-yellow-200 px-1 font-semibold">Privacy Policy:</span> https://hotelzify.com/privacy-policy</li>
                  <li><span className="bg-yellow-200 px-1 font-semibold">Message Type:</span> Labeled as "Transactional" in the interface</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 border-2 border-gray-400 rounded overflow-hidden">
              <Image
                src="/screenshot2.png"
                alt="Opt-In Confirmation SMS showing compliance elements"
                width={978}
                height={280}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </section>

        {/* Compliance Attestation */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Compliance Attestation
          </h2>
          <p className="text-gray-700 mb-4">
            Hotelzify's SMS messaging program complies with all CTIA guidelines and TCPA requirements:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li>✓ Express written consent obtained before sending any messages</li>
            <li>✓ Clear and conspicuous disclosure of message purpose</li>
            <li>✓ STOP keyword implemented for immediate opt-out</li>
            <li>✓ HELP keyword implemented for customer support</li>
            <li>✓ Terms of Service and Privacy Policy readily accessible</li>
            <li>✓ Consent records maintained with timestamp and source attribution</li>
            <li>✓ Recording available for audit purposes</li>
          </ul>
        </section>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
          <p>Hotelzify - Twilio 10 DLC Campaign Verification</p>
          <p>Generated: October 3, 2025</p>
        </footer>
      </div>
    </main>
  )
}
