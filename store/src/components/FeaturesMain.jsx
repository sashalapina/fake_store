import './FeaturesMain.css'

function FeaturesMain() {
  return (
    <>
      <div className="features__container">
        <h3 className="features__title">What makes our brand different</h3>
        <ul className="features__list">
          <li className="features__list-item">
            <img className="features__list-item-icon" src="Delivery.svg" alt="" />
            <p className="features__list-item-title">Next day as standard</p>
            <p className="features__list-item-text">Order before 3pm and get your order the next day as standard</p>
          </li>
          <li>
            <img className="features__list-item-icon" src="Checkmark--outline.svg" alt="" />
            <p className="features__list-item-title">Made by true artisans</p>
            <p className="features__list-item-text">Handmade crafted goods made with real passion and craftmanship</p>
          </li>
          <li>
            <img className="features__list-item-icon" src="Purchase.svg" alt="" />
            <p className="features__list-item-title">Unbeatable prices</p>
            <p className="features__list-item-text">
              For our materials and quality you won’t find better prices anywhere
            </p>
          </li>
          <li>
            <img className="features__list-item-icon" src="Sprout.svg" alt="" />
            <p className="features__list-item-title">Recycled packaging</p>
            <p className="features__list-item-text">
              We use 100% recycled packaging to ensure our footprint is manageable
            </p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default FeaturesMain
