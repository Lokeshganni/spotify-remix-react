import {useEffect, useState} from 'react'

import PlaylistCard from '../PlaylistCard/PlaylistCard'
import TryAgain from '../TryAgain/TryAgain'
import Loader from '../Loader/Loader'

import getApiData from '../../services/api'
import './NewReleases.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const NewReleases = () => {
  const [playlistData, setPlaylistData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const url = 'https://apis2.ccbp.in/spotify-clone/new-releases'
    const data = await getApiData(url)

    if (data.apiRes === 'failed') {
      setApiStatus(apiStatusConstants.failure)
    } else {
      setPlaylistData(data.apiRes.albums)
      setApiStatus(apiStatusConstants.success)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const renderNewReleasesLoader = () => (
    <div className="editors-choice-failure-container">
      <Loader />
    </div>
  )

  const handleTryAgain = () => {
    getData()
  }

  const renderNewReleasesSuccess = () => (
    <ul className="editors-choice-ul-container">
      {playlistData &&
        playlistData.items.map(each => (
          <PlaylistCard key={each.id} playlist={each} />
        ))}
    </ul>
  )

  const renderNewReleasesFailure = () => (
    <div className="editors-choice-failure-container">
      <TryAgain handleTryAgain={handleTryAgain} />
    </div>
  )

  const renderNewReleases = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderNewReleasesLoader()
      case apiStatusConstants.success:
        return renderNewReleasesSuccess()
      case apiStatusConstants.failure:
        return renderNewReleasesFailure()
      default:
        return null
    }
  }

  return <>{renderNewReleases()}</>
}
export default NewReleases
