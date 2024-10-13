import './TryAgain.css'

const TryAgain = ({handleTryAgain}) => (
  <div className="try-again-container">
    <img
      className="try-again-alert-icon"
      src="https://res.cloudinary.com/dbkxhpzlo/image/upload/v1728800384/alert-triangletry-again_uzwmcx.svg"
      alt="failure view"
    />
    <p className="try-again-para">Something went wrong. Please try again</p>
    <button onClick={handleTryAgain} className="try-again-btn" type="button">
      Try Again
    </button>
  </div>
)

export default TryAgain
