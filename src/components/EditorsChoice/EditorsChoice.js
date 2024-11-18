import {useEffect, useState} from 'react'

import PlaylistCard from '../PlaylistCard/PlaylistCard'
import TryAgain from '../TryAgain/TryAgain'
import Loader from '../Loader/Loader'

import getApiData from '../../services/api'
import './EditorsChoice.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const EditorsChoice = () => {
  const [playlistData, setPlaylistData] = useState([])
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)

  const getData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const url = 'https://apis2.ccbp.in/spotify-clone/featured-playlists'
    const data = await getApiData(url)

    if (data.apiRes === 'failed') {
      setApiStatus(apiStatusConstants.failure)
    } else {
      setPlaylistData(data.apiRes.playlists)
      setApiStatus(apiStatusConstants.success)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const renderEditorsChoiceLoader = () => (
    <div className="editors-choice-failure-container">
      <Loader />
    </div>
  )

  const handleTryAgain = () => {
    getData()
  }

  const renderEditorsChoiceSuccess = () => (
    <ul className="editors-choice-ul-container">
      {playlistData &&
        playlistData.items.map(each => (
          <PlaylistCard
            queryParam="editors-choice"
            key={each.id}
            playlist={each}
          />
        ))}
    </ul>
  )

  const renderEditorsChoiceFailure = () => (
    <div className="editors-choice-failure-container">
      <TryAgain handleTryAgain={handleTryAgain} />
    </div>
  )

  const renderEditorsChoice = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderEditorsChoiceLoader()
      case apiStatusConstants.success:
        return renderEditorsChoiceSuccess()
      case apiStatusConstants.failure:
        return renderEditorsChoiceFailure()
      default:
        return null
    }
  }

  return <>{renderEditorsChoice()}</>
}
export default EditorsChoice
