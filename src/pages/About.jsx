import { TARGET_SECTORS, VALUES } from '../data'
import { Icon } from '../icons'
import PageHero from '../components/PageHero'
import laboratoryImg from '../assets/Laboratory.jpg'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Riscella"
        title="A scientific supply partner built around technical expertise."
        text="Riscella Enterprises Limited bridges world-class global scientific manufacturers and local industries through compliance-verified sourcing, cold-chain distribution, and technical deployment."
        backgroundImage={laboratoryImg}
      />

      <section className="section">
        <div className="wrap">
          <p className="section-kicker">Our Identity</p>
          <h2 className="heading-lg">Company Overview</h2>

          <div className="split">
            <p>
              Riscella Enterprises Limited is a premier Ugandan enterprise
              specializing in compliance-verified sourcing, cold-chain
              distribution, and technical deployment of high-grade laboratory
              assets. As a direct distributor for leading global manufacturers,
              we do not just supply products—we deliver complete analytical
              ecosystems backed by specialized technical expertise.
            </p>

            <p>
              Strategically headquartered in Wandegeya, Kampala, we bridge the
              gap between world-class global scientific manufacturers and local
              industries. Our leadership and scientific expertise are focused
              on optimizing assay accuracy, throughput, research reproducibility,
              and reliable supply-chain continuity.
            </p>
          </div>

          <div className="vision-grid">
            <div className="panel">
              <p className="section-kicker">Corporate Mandate</p>
              <h3>Our Vision</h3>
              <p className="body-copy1">
                To be the most trusted and preferred scientific supply
                enterprise across East Africa, recognized for our absolute
                commitment to standard-compliant testing and robust client
                technical support.
              </p>
            </div>

            <div className="panel">
              <p className="section-kicker">Corporate Mandate</p>
              <h3>Our Mission</h3>
              <p className="body-copy1">
                To empower scientific research and industrial quality assurance
                by delivering precise, reliable, and compliant laboratory
                supplies with unmatched logistical efficiency.
              </p>
            </div>
          </div>

          <h3 className="section-title" style={{ marginTop: 56 }}>
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

      <section className="section paper">
        <div className="wrap">
          <p className="section-kicker">Scientific Leadership</p>
          <h2 className="heading-lg">Built by scientists and laboratory technologists.</h2>

          <div className="feature-grid">
            <article className="feature-card">
              <Icon name="flask" />
              <h3>Scientific expertise</h3>
              <p>
                Riscella was established and is strategically driven by a board
                comprising chemical scientists and laboratory technologists
                with foundations in analytical chemistry, instrumentation, and
                biochemical molecular behavior.
              </p>
            </article>

            <article className="feature-card">
              <Icon name="check" />
              <h3>Supplier auditing</h3>
              <p>
                Scientific expertise shapes supplier auditing criteria and
                compliance frameworks, supporting reliable product
                recommendations and alternative sourcing consultations.
              </p>
            </article>

            <article className="feature-card">
              <Icon name="building" />
              <h3>Regional focus</h3>
              <p>
                The company is positioned to support research and manufacturing
                environments across East Africa with specialized analytical
                chemistry solutions and laboratory supplies.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
