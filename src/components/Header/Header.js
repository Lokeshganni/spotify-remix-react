import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {IoMenu} from 'react-icons/io5'

import './Header.css'

const Header = props => {
  const [showLogout, setShowLogout] = useState(false)

  const handleHamburg = () => {
    setShowLogout(prevState => !prevState)
  }

  const handleLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <div className="header-container-sm">
        <Link className="header-logo-link-ele" to="/">
          <img
            src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728546141/Grouplogo_y1s5s2.svg"
            alt="login website logo"
            className="header-logo"
          />
        </Link>
        <button onClick={handleHamburg} className="sm-menu-btn" type="button">
          <IoMenu className="sm-menu-icon" />
        </button>
        {showLogout && (
          <div className="sm-logout-btn-container">
            <button
              onClick={handleLogout}
              className="sm-logout-btn"
              type="button"
            >
              Logout
            </button>
          </div>
        )}
      </div>
      <div className="header-container-lg">
        <Link className="header-logo-link-ele" to="/">
          <img
            src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728546141/Grouplogo_y1s5s2.svg"
            alt="login website logo"
            className="header-logo"
          />
        </Link>
        <button className="sm-menu-btn" type="button" onClick={handleLogout}>
          <img
            src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728557372/log-out-04logout-icon_mdrsld.svg"
            alt="logout icon"
            className="lg-logout-icon"
          />
          <p className="logout-para">Logout</p>
        </button>
      </div>
    </>
  )
}
export default withRouter(Header)
