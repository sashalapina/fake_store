import './Hero.css'

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero__left-column">
          <div>
            <p className="hero__left-column-title">The furniture brand for the future, with timeless designs</p>
            <button className="hero__left-column-btn">View collection</button>
          </div>
          <div>
            <p className="hero__left-column-text">
              A new era in eco friendly furniture with Avelon, the French luxury retail brand with nice fonts, tasteful
              colors and a beautiful way to display things digitally using modern web technologies.
            </p>
          </div>
        </div>
        <div className="hero__right-column"></div>
      </div>
    </>
  )
}

export default Hero
