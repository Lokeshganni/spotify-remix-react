import BackArrow from '../BackArrow/BackArrow'
import './NotFound.css'

const NotFound = () => (
  <>
    <BackArrow />
    <div className="not-found-container">
      <img
        src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728844589/Frame_153-not-found_blcego.svg"
        alt="page not found"
      />
      <h1>Page Not Found</h1>
    </div>
  </>
)

export default NotFound
