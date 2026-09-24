import { ADVANTAGES, REGULATORY } from '../data'
import { Icon } from '../icons'
import PageHero from '../components/PageHero'
import laboratoryImg from '../assets/Laboratory.jpg'

export default function Compliance() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Regulatory framework alignment."
        text="Riscella operates under stringent quality management frameworks to support audit-ready laboratory and manufacturing environments."
        backgroundImage={laboratoryImg}
      />

      <section className="section paper">
        <div className="wrap">
          <p className="section-kicker">Regulatory Framework</p>
          <h2 className="heading-lg">Quality, safety and traceability.</h2>

          <div className="reg-grid">
            {REGULATORY.map((item) => (
              <article className="reg" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="compliance-callout">
            <Icon name="check" />
            <div>
              <h3>Documentation matters.</h3>
              <p>
                Every chemical batch is supported by relevant quality
                documentation such as Certificates of Analysis (CoA) and
                Material Safety Data Sheets (MSDS), according to the product
                and applicable requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="section-kicker">Competitive Advantage</p>
          <h2 className="heading-lg">Why partner with Riscella?</h2>

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
    </>
  )
}
