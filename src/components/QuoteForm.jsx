import { useState } from 'react'
import { CONTACT } from '../data'

export default function QuoteForm() {
  const [status, setStatus] = useState('')

  function isValidEmailOrPhone(value) {
    const trimmed = value.trim()

    if (!trimmed) return false

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)
    if (emailOk) return true

    const digitsOnly = trimmed.replace(/\D/g, '')
    return digitsOnly.length >= 9 && digitsOnly.length <= 15
  }

  function onSubmit(event) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const company = String(form.get('company') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()

    if (!name || !company || !email || !message) {
      setStatus('Please fill in all fields so we can prepare the right response.')
      return
    }

    if (!isValidEmailOrPhone(email)) {
      setStatus('Please enter a valid email address or phone number.')
      return
    }

    const body = encodeURIComponent(
      `Name: ${name}\nInstitution / Company: ${company}\nEmail / Phone: ${email}\n\nRFQ / Message:\n${message}`,
    )

    window.location.href =
      `mailto:${CONTACT.email}?subject=${encodeURIComponent('RFQ — Riscella Enterprises')}&body=${body}`

    setStatus(
      'Your email app is opening with your request. If it does not, send us a quick WhatsApp message instead.',
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field-group">
        <label htmlFor="rfq-name">Full name</label>
        <input id="rfq-name" name="name" type="text" placeholder="e.g. Jane Mukasa" required />
      </div>

      <div className="field-group">
        <label htmlFor="rfq-company">Institution / Company</label>
        <input id="rfq-company" name="company" type="text" placeholder="e.g. Quality Chemical Industries" required />
      </div>

      <div className="field-group">
        <label htmlFor="rfq-email">Email or phone</label>
        <input
          id="rfq-email"
          name="email"
          type="text"
          inputMode="email"
          placeholder="e.g. info@company.com or +256 700 000 000"
          required
        />
      </div>

      <div className="field-group">
        <label htmlFor="rfq-message">Your requirement</label>
        <textarea
          id="rfq-message"
          name="message"
          rows="6"
          placeholder="Tell us the products, quantities, standards, urgency, and delivery details you need."
          required
        />
      </div>

      <button className="btn btn-teal" type="submit">
        Send Request
      </button>

      {status ? <p className="form-status">{status}</p> : null}
    </form>
  )
}
