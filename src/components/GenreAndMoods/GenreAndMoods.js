import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

import TryAgain from '../TryAgain/TryAgain'
import Loader from '../Loader/Loader'

import getApiData from '../../services/api'
import './GenreAndMoods.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const GenreAndMoods = () => {
  const [categoriesData, setCategoriesData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const url = 'https://apis2.ccbp.in/spotify-clone/categories'
    const data = await getApiData(url)

    if (data.apiRes === 'failed') {
      setApiStatus(apiStatusConstants.failure)
    } else {
      setCategoriesData(data.apiRes.categories)
      setApiStatus(apiStatusConstants.success)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const renderGenreAndMoodsLoader = () => (
    <div className="category-failure-container">
      <Loader />
    </div>
  )

  const handleTryAgain = () => {
    getData()
  }

  const renderGenreAndMoodsSuccess = () => (
    <ul className="category-ul-container">
      {categoriesData &&
        categoriesData.items.map(each => (
          <li key={each.id} className="category-li-container">
            <Link to="/">
              <div className="category-card">
                <img
                  className="category-card-img"
                  src={each.icons[0].url}
                  alt="category"
                />
                <p className="category-name">{each.name}</p>
              </div>
            </Link>
          </li>
        ))}
    </ul>
  )

  const renderGenreAndMoodsFailure = () => (
    <div className="category-failure-container">
      <TryAgain handleTryAgain={handleTryAgain} />
    </div>
  )

  const renderGenreAndMoods = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderGenreAndMoodsLoader()
      case apiStatusConstants.success:
        return renderGenreAndMoodsSuccess()
      case apiStatusConstants.failure:
        return renderGenreAndMoodsFailure()
      default:
        return null
    }
  }

  return <>{renderGenreAndMoods()}</>
}

export default GenreAndMoods
