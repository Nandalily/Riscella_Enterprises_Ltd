import { CONTACT, PHONES } from '../data'
import { Icon } from '../icons'
import { Link } from 'react-router-dom'
import QuoteForm from '../components/QuoteForm'
import PageHero from '../components/PageHero'
import laboratoryImg from '../assets/Laboratory.jpg'

export default function Contact() {
  const whatsappNumber = '0783289521'
  const whatsappHref = `https://wa.me/256783289521?text=${encodeURIComponent('Hello Riscella Enterprises Limited, I would like to request a quote for laboratory products and supplies.')}`

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk to our technical desk."
        text="Send your RFQ, product requirements, preferred standards, or technical sourcing request and our team can review the details."
        action={false}
        backgroundImage={laboratoryImg}
      />

      <section className="section contact">
        <div className="wrap">
          <div className="contact-grid">
            <div className="contact-info">
              <p className="section-kicker">Riscella Enterprises Limited</p>
              <h2>Let’s discuss your laboratory supply requirements.</h2>

              <div className="contact-item">
                <Icon name="pin" />
                <p>
                  {CONTACT.address}
                  <br />
                  {CONTACT.poBox}
                </p>
              </div>

              <div className="contact-item">
                <Icon name="mail" />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>

              <div className="contact-item">
                <Icon name="phone" />
                <div>
                  {PHONES.map((phone) => (
                    <div key={phone}>
                      <a href={`tel:${phone.replace(/\s/g, '')}`}>
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="contact-quick-links">
                <div className="contact-quick-card whatsapp-card">
                  <span className="contact-card-tag">Fastest response</span>
                  <h3>Chat on WhatsApp</h3>
                  <p>Reach our team directly on 0783 289 521.</p>
                  <a
                    className="btn btn-whatsapp"
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>

              <div className="contact-actions">
                <a className="btn btn-teal" href={`mailto:${CONTACT.email}`}>
                  Email Technical Desk
                </a>
                <Link className="btn btn-ghost-dark" to="/products">
                  Browse Products
                </Link>
              </div>
            </div>

            <div className="contact-form-panel">
              <p className="section-kicker">Request a Quote</p>
              <h2>Send your requirements</h2>
              <p className="request-help-text">
                Share your product needs and we’ll prepare the best sourcing option for you.
              </p>
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
