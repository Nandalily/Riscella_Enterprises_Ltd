import { CATEGORIES, BRANDS } from '../data'
import { Icon } from '../icons'
import PageHero from '../components/PageHero'
import product3Img from '../assets/product3.jpg'

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Brands & Products"
        title="Core laboratory products and scientific portfolios."
        text="High-grade chemicals, analytical reagents, laboratory consumables, protective equipment, and specialized standards for research and industrial quality environments."
        backgroundImage={product3Img}
      />

      <section className="section paper products-section">
        <div className="wrap products-content">
          <p className="section-kicker">Product Categories</p>
          <h2 className="heading-lg">Core product categories</h2>

          <div className="categories-timeline">
            {CATEGORIES.map((cat, index) => (
              <div
                className={`category-timeline-item ${
                  index % 2 === 0 ? 'timeline-left' : 'timeline-right'
                }`}
                key={cat.name}
              >
                <div className="timeline-dot">
                  <span />
                </div>

                <div className="category-card">
                  <div className="category-card-header">
                    <div className="category-icon">
                      <Icon name={cat.icon} />
                    </div>
                    <h3>{cat.name}</h3>
                  </div>

                  <p className="category-range">
                    <strong>Range:</strong> {cat.range}
                  </p>

                  <p className="category-applications">
                    <strong>Applications:</strong> {cat.applications}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="note">
            <strong>Custom formulations:</strong> Custom reagent formulations
            can be prepared strictly according to your specific production
            line Standard Operating Procedures (SOPs).
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="section-kicker">Global Portfolios</p>
          <h2 className="heading-lg">Authorized brands &amp; global portfolios</h2>

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
    </>
  )
}
