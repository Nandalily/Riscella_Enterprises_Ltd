import { Link } from 'react-router-dom'

export default function PageHero({ eyebrow, title, text,  backgroundImage, action = true }) {
  return (
    <section className="page-hero">  
    <img
        className="page-hero-image"
        src={backgroundImage}
        alt=""
      />
      <div className="wrap page-hero-inner">
        {eyebrow ? <p className="section-kicker">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {text ? <p>{text}</p> : null}

        {action ? (
          <div className="hero-actions">
            <Link className="btn btn-teal" to="/contact">
              Request a Quote
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  )
}
