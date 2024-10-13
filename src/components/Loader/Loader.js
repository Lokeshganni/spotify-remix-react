import './Loader.css'

const Loader = () => (
  <div data-testid="loader" className="loader-container">
    <img
      src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728546141/Grouplogo_y1s5s2.svg"
      alt="login website logo"
      className="loading-logo"
    />
    <h1 className="loading">Loading...</h1>
  </div>
)

export default Loader
