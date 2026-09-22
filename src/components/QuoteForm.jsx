import { useState } from 'react'
import { CONTACT } from '../data'

export default function QuoteForm() {
  const [status, setStatus] = useState('')

  function onSubmit(event) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const company = form.get('company')
    const email = form.get('email')
    const message = form.get('message')

    const body = encodeURIComponent(
      `Name: ${name}\nInstitution / Company: ${company}\nEmail / Phone: ${email}\n\nRFQ / Message:\n${message}`,
    )

    window.location.href =
      `mailto:${CONTACT.email}?subject=${encodeURIComponent('RFQ — Riscella Enterprises')}&body=${body}`

    setStatus(
      'Your email client will open with this request. If it does not, write to us directly.',
    )
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="company" placeholder="Institution / Company" required />
      <input name="email" placeholder="Email / Phone" required />
      <textarea
        name="message"
        rows="6"
        placeholder="Upload RFQ / Message"
        required
      />

      <button className="btn btn-teal" type="submit">
        Submit Request
      </button>

      {status ? <p className="form-status">{status}</p> : null}
    </form>
  )
}
