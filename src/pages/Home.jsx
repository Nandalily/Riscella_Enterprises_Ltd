import { Link } from 'react-router-dom'
import heroLabImg from '../assets/hero-lab.jpg'
import { ADVANTAGES, BRANDS, HOME_CATEGORIES } from '../data'
import { Icon } from '../icons'

export default function Home() {
  return (
    <>
      <section className="hero">
        <img className="hero-bg" src={heroLabImg} alt="Laboratory" />
        <div className="hero-shade" />

        <div className="wrap hero-copy">
          <p className="section-kicker">RISCELLA ENTERPRISES LIMITED</p>
          <h1>Exceeding Imaginations in Scientific Sourcing &amp; Technical Deployment</h1>

          <div className="hero-actions">
            <p>
              Empowering East African laboratories with compliance-verified
              distribution of high-grade chemicals, analytical reagents, and
              durable laboratory consumables.
            </p>

            <div className="hero-buttons">
              <Link className="btn btn-teal" to="/contact">
                Request a Quote
              </Link>
              <Link className="btn btn-ghost" to="/products">
                Explore Our Product Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <p className="section-kicker">What We Do</p>
          <h2 className="section-title">What We Deal in &amp; Deliver</h2>

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

          <div className="home-hook">
            <div>
              <p className="section-kicker">Supply-chain continuity</p>
              <h2>Keep critical laboratory and production operations moving.</h2>
              <p>
                We serve as a mission-critical supply chain partner for
                manufacturing plants, industrial processing factories, and
                research institutions across East Africa. By buffering
                essential manufacturing reagents locally in Kampala, Riscella
                helps reduce exposure to international shipping delays and
                procurement lead times.
              </p>
            </div>
            <Link className="btn btn-teal" to="/solutions">
              Explore Our Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="section-kicker">Global Portfolios</p>
          <h2 className="section-title">Authorized Brands</h2>

          <div className="brand-grid">
            {BRANDS.map((brand) => (
              <div className="brand-tile" key={brand.name}>
                {brand.mark ? <span className="brand-mark">{brand.mark}</span> : null}
                <span className={brand.className}>{brand.name}</span>
              </div>
            ))}
          </div>

          <div className="section-cta">
            <Link className="btn btn-ghost-dark" to="/products">
              View Products &amp; Brands
            </Link>
          </div>
        </div>
      </section>

      <section className="section paper">
        <div className="wrap">
          <div className="split-heading">
            <div>
              <p className="section-kicker">Why Riscella</p>
              <h2 className="heading-lg">Technical supply, not just product delivery.</h2>
            </div>
            <p className="lede">
              Our model combines verified sourcing, technical consultation,
              documentation, and logistics designed around laboratory and
              manufacturing requirements.
            </p>
          </div>

          <div className="adv-grid">
            {ADVANTAGES.slice(0, 4).map((item) => (
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
    </>
  )
}
