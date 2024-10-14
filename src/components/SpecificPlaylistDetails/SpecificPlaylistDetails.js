import {useEffect, useState} from 'react'

import PlaylistOwnerInfo from '../PlaylistOwnerInfo/PlaylistOwnerInfo'
import TrackItem from '../TrackItem/TrackItem'
import AudioPlayer from '../AudioPlayer/AudioPlayer'
import BackArrow from '../BackArrow/BackArrow'
import TryAgain from '../TryAgain/TryAgain'
import Loader from '../Loader/Loader'

import getApiData from '../../services/api'

import './SpecificPlaylistDetails.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const SpecificPlaylistDetails = props => {
  const [specificPlaylist, setSpecificPlaylist] = useState({})
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial)
  const [audioUrl, setAudioUrl] = useState('')

  const {match} = props
  const {id} = match.params

  const getSpecificPlaylistData = async () => {
    setApiStatus(apiStatusConstants.inProgress)
    const url = `https://apis2.ccbp.in/spotify-clone/playlists-details/${id}`
    const data = await getApiData(url)

    if (data.apiRes === 'failed') {
      setApiStatus(apiStatusConstants.failure)
    } else {
      setSpecificPlaylist(data.apiRes)
      setAudioUrl(data.apiRes.tracks.items[0].track.preview_url)
      setApiStatus(apiStatusConstants.success)
    }
  }

  useEffect(() => {
    getSpecificPlaylistData()
  }, [])

  const renderSpecificPlaylistDetailsLoader = () => (
    <div className="editors-choice-failure-container">
      <Loader />
    </div>
  )

  const handleTryAgain = () => {
    getSpecificPlaylistData()
  }

  const handleAudioUrl = url => {
    setAudioUrl(url)
  }

  const renderSpecificPlaylistDetailsSuccess = () => (
    <div className="specific-playlist-details-main-container">
      <BackArrow />
      {/* {console.log(specificPlaylist)} */}
      <div className="playlist-tracks-main-container">
        <PlaylistOwnerInfo specificPlaylist={specificPlaylist} />
        <ul>
          {specificPlaylist.tracks.items.map(each => (
            <TrackItem
              handleAudioUrl={handleAudioUrl}
              key={each.track.id}
              trackObj={each}
            />
          ))}
        </ul>
      </div>
      <AudioPlayer audioUrl={audioUrl} />
    </div>
  )

  const renderSpecificPlaylistDetailsFailure = () => (
    <div className="editors-choice-failure-container">
      <TryAgain handleTryAgain={handleTryAgain} />
    </div>
  )

  const renderSpecificPlaylistDetails = () => {
    switch (apiStatus) {
      case apiStatusConstants.inProgress:
        return renderSpecificPlaylistDetailsLoader()
      case apiStatusConstants.success:
        return renderSpecificPlaylistDetailsSuccess()
      case apiStatusConstants.failure:
        return renderSpecificPlaylistDetailsFailure()
      default:
        return null
    }
  }

  return <>{renderSpecificPlaylistDetails()}</>
}

export default SpecificPlaylistDetails
