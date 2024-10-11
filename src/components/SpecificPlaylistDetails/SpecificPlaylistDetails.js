import {useEffect, useState} from 'react'

import getApiData from '../../services/api'

import './SpecificPlaylistDetails.css'

const SpecificPlaylistDetails = props => {
  const [specificPlaylist, setSpecificPlaylist] = useState({})

  const {match} = props
  const {id} = match.params

  const getSpecificPlaylistData = async () => {
    const url = `https://apis2.ccbp.in/spotify-clone/playlists-details/${id}`
    const data = await getApiData(url)
    console.log(data)
    setSpecificPlaylist(data.apiRes)
  }

  useEffect(() => {
    getSpecificPlaylistData()
  }, [])

  return (
    <div>
      <h1>hiii</h1>
    </div>
  )
}

export default SpecificPlaylistDetails
