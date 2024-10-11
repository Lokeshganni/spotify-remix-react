import {Link} from 'react-router-dom'

import {IoMenu} from 'react-icons/io5'

import './Header.css'

const Header = () => (
  <>
    <div className="header-container-sm">
      <Link className="header-logo-link-ele" to="/">
        <img
          src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728546141/Grouplogo_y1s5s2.svg"
          alt="login website logo"
          className="header-logo"
        />
      </Link>
      <button className="sm-menu-btn" type="button">
        <IoMenu className="sm-menu-icon" />
      </button>
    </div>
    <div className="header-container-lg">
      <Link className="header-logo-link-ele" to="/">
        <img
          src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728546141/Grouplogo_y1s5s2.svg"
          alt="login website logo"
          className="header-logo"
        />
      </Link>
      <button className="sm-menu-btn" type="button">
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
export default Header
