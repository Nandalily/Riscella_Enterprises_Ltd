import { useEffect, useState } from 'react'
import {
  ADVANTAGES,
  BRANDS,
  CATEGORIES,
  CLIENTS,
  CONTACT,
  HOME_CATEGORIES,
  NAV_LINKS,
  PHONES,
  REGULATORY,
  SECTORS,
  STEPS,
  TARGET_SECTORS,
  VALUES,
} from './data'
import { Icon } from './icons'

function Header({ active }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="wrap nav">
        <a className="brand" href="#home">
          <span className="brand-name">
            RISCELLA <span className="brand-ltd">ENTERPRISES LTD</span>
          </span>
          <span className="brand-tag">EXCEEDING IMAGINATIONS</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a className={active === link.href ? 'active' : ''} href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a className="btn btn-teal" href="#contact">
                Request a Quote
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
      <div className={open ? 'wrap mobile-menu open' : 'wrap mobile-menu'}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </a>
        ))}
        <a className="btn btn-teal" href="#contact" onClick={() => setOpen(false)}>
          Request a Quote
        </a>
      </div>
    </header>
  )
}

function QuoteForm() {
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
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent('RFQ — Riscella Enterprises')}&body=${body}`
    setStatus('Your email client will open with this request. If it does not, write to us directly.')
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <input name="name" placeholder="Name" required />
      <input name="company" placeholder="Institution / Company" required />
      <input name="email" placeholder="Email / Phone" required />
      <textarea name="message" rows="4" placeholder="Upload RFQ / Message" required />
      <button className="btn btn-teal" type="submit">
        Submit Request
      </button>
      {status ? <p className="form-status">{status}</p> : null}
    </form>
  )
}

export default function App() {
  const [active, setActive] = useState('#home')

  useEffect(() => {
    const ids = ['home', 'about', 'products', 'solutions', 'compliance', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: [0.15, 0.4] },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header active={active} />
      <main id="main">
        <section className="hero" id="home">
          <img className="hero-bg" src="/hero-lab.jpg" alt="" />
          <div className="hero-shade" />
          <div className="wrap hero-copy">
            <h1>Exceeding Imaginations in Scientific Sourcing &amp; Technical Deployment</h1>
            <div className="hero-actions">
              <a className="btn btn-teal" href="#products">
                Explore Our Solutions
              </a>
              <a className="btn btn-ghost" href="/product-catalog.html" download>
                Download Product Catalog
              </a>
            </div>
          </div>
        </section>

        <section className="section paper">
          <div className="wrap">
            <h2 className="section-title">Laboratory Chemicals &amp; Solvents</h2>
            <div className="cards-4">
              {HOME_CATEGORIES.map((item) => (
                <article className="mini-card" key={item.name}>
                  <div className="icon-box">
                    <Icon name={item.icon} size={18} />
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.short}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <h2 className="section-title">Authorized Brands</h2>
            <div className="brand-grid">
              {BRANDS.map((brand) => (
                <div className="brand-tile" key={brand.name}>
                  {brand.mark ? <span className="brand-mark">{brand.mark}</span> : null}
                  <span className={brand.className}>{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <p className="section-kicker">About Us</p>
            <h2 className="heading-lg">Our identity</h2>
            <div className="split">
              <p>
                Riscella Enterprises Limited is a premier Ugandan enterprise specializing in the
                compliance-verified sourcing, cold-chain distribution, and technical deployment of
                high-grade laboratory chemicals, analytical reagents, and durable laboratory
                consumables. Strategically headquartered on Sir Apollo Kaggwa Road in Wandegeya,
                Kampala, we bridge the gap between world-class global scientific manufacturers and
                local industries — delivering complete analytical ecosystems backed by specialized
                technical expertise, not just products.
              </p>
              <p>
                Riscella was established and is strategically driven by a distinguished Board of
                Directors comprising seasoned chemical scientists and elite laboratory
                technologists — addressing the systemic challenges of supply-chain fragmentation,
                inconsistent chemical lot purities, and extended procurement lead times that stall
                industrial manufacturing lines and academic research cycles across the region.
                Unlike traditional logistics or trading entities, we speak the exact technical
                language of your lab managers, QA directors, and chemical engineers to optimize
                your assay accuracy, throughput, and research reproducibility.
              </p>
            </div>
            <div className="vision-grid">
              <div className="panel">
                <h3>Our Vision</h3>
                <p className="body-copy">
                  To be the most trusted and preferred scientific supply enterprise across East
                  Africa, recognized for accelerating research outcomes and industrial quality
                  through uncompromised technological excellence and standard-compliant testing.
                </p>
              </div>
              <div className="panel">
                <h3>Our Mission</h3>
                <p className="body-copy">
                  To empower scientific research and industrial quality assurance by delivering
                  precise, reliable, and compliant laboratory supplies with unmatched logistical
                  efficiency.
                </p>
              </div>
            </div>
            <h3 className="section-title" style={{ marginTop: 40 }}>
              Core values
            </h3>
            <div className="values">
              {VALUES.map((value) => (
                <div className="value" key={value.title}>
                  <Icon name={value.icon} />
                  <h4>{value.title}</h4>
                  <p>{value.desc}</p>
                </div>
              ))}
            </div>
            <div className="chips">
              <strong>Target sectors:</strong>
              {TARGET_SECTORS.map((sector) => (
                <span className="chip" key={sector}>
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section paper" id="products">
          <div className="wrap">
            <p className="section-kicker">Brands &amp; Products</p>
            <h2 className="heading-lg">Core product categories</h2>
            <div style={{ marginTop: 28, borderBottom: '1px solid var(--line)' }}>
              {CATEGORIES.map((cat) => (
                <div className="cat-row" key={cat.name}>
                  <h3>
                    <Icon name={cat.icon} />
                    {cat.name}
                  </h3>
                  <p>{cat.range}</p>
                  <p>{cat.applications}</p>
                </div>
              ))}
            </div>
            <p className="note">
              Custom reagent formulations can be prepared strictly according to your production
              line’s Standard Operating Procedures (SOPs).
            </p>
            <h3 className="section-title" style={{ marginTop: 48 }}>
              Authorized brands &amp; global portfolios
            </h3>
            <div className="brand-cards">
              {BRANDS.map((brand) => (
                <article className="brand-card" key={brand.name}>
                  <h3>
                    {brand.name} {brand.sub}
                  </h3>
                  <p>{brand.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="solutions">
          <div className="wrap">
            <p className="section-kicker">Market Solutions</p>
            <h2 className="heading-lg">Sectors we serve</h2>
            <div className="sectors">
              {SECTORS.map((sector) => (
                <article className="sector-card" key={sector.title}>
                  <Icon name={sector.icon} />
                  <h3>{sector.title}</h3>
                  <p>{sector.desc}</p>
                </article>
              ))}
            </div>
            <h3 className="section-title" style={{ marginTop: 48 }}>
              Strategic client portfolio &amp; success highlights
            </h3>
            <p className="lede" style={{ marginTop: 8 }}>
              An approved technical supply partner for prominent, high-capacity pharmaceutical
              manufacturing and healthcare production operations across East Africa.
            </p>
            <div className="clients">
              {CLIENTS.map((client) => (
                <article className="client" key={client.name}>
                  <h4>
                    <Icon name="building" size={18} />
                    {client.name}
                  </h4>
                  <p>{client.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section paper" id="compliance">
          <div className="wrap">
            <p className="section-kicker">Compliance</p>
            <h2 className="heading-lg">Regulatory framework alignment</h2>
            <p className="lede" style={{ marginTop: 10 }}>
              Riscella operates under stringent quality management frameworks to ensure your
              laboratory is always audit-ready.
            </p>
            <div className="reg-grid">
              {REGULATORY.map((item) => (
                <article className="reg" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </article>
              ))}
            </div>
            <h3 className="section-title" style={{ marginTop: 48 }}>
              Why partner with Riscella?
            </h3>
            <div className="adv-grid">
              {ADVANTAGES.map((item) => (
                <article className="adv" key={item.title}>
                  <Icon name={item.icon} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="wrap">
            <p className="section-kicker">How to Order</p>
            <h2 className="heading-lg">Procurement process</h2>
            <p className="lede" style={{ marginTop: 10 }}>
              A structured, four-step procurement framework makes product sourcing seamless,
              transparent, and audit-ready.
            </p>
            <div className="steps">
              {STEPS.map((step) => (
                <article className="step" key={step.n}>
                  <div className="n">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap">
            <p className="section-kicker">Contact Us</p>
            <h2 className="heading-lg">Talk to our technical desk</h2>
            <div className="contact-grid">
              <div>
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
                        <a href={`tel:${phone.replace(/\s/g, '')}`}>{phone}</a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <QuoteForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">RISCELLA ENTERPRISES LTD</div>
          <p>Exceeding Imaginations — Kampala, Uganda</p>
          <p>© {new Date().getFullYear()} Riscella Enterprises Limited</p>
        </div>
      </footer>
    </>
  )
}
