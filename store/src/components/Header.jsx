import { useState, useEffect } from 'react'
import axios from 'axios'
import './Header.css'

function Header() {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const getData = () => {
      axios
        .get('https://fakestoreapi.com/products/categories')
        .then(function (response) {
          setCategories(response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
    getData()
  }, [])

  return (
    <>
      <div className="header">
        <div className="header__top-section">
          <div className="header__top-section-search">
            <a className="header__top-section-search-link" href="#">
              <img width={22} className="header__top-section-search-img" src="/Search.svg" alt="Search icon" />
            </a>
          </div>
          <div className="header__top-section-logo">
            <a className="header__top-section-logo-link" href="#">
              Fake Store
            </a>
          </div>
          <div className="header__top-section-group-btns">
            <a className="header__top-section-group-btns-items" href="#">
              <img width={22} src="Shopping--cart.svg" alt="" />
            </a>
            <a href="#">
              <img width={22} src="User--avatar.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="header__bottom-section">
          <ul className="header__bottom-section-menu-list">
            {categories.map((category) => (
              <li key={category} className="header__bottom-section-menu-list-item">
                <a href="#">{category}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Header
