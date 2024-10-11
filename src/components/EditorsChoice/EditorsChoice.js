import {useEffect, useState} from 'react'

import PlaylistCard from '../PlaylistCard/PlaylistCard'

import getApiData from '../../services/api'
import './EditorsChoice.css'

const EditorsChoice = () => {
  const [playlistData, setPlaylistData] = useState([])

  const getData = async () => {
    const url = 'https://apis2.ccbp.in/spotify-clone/featured-playlists'
    const data = await getApiData(url)
    // console.log(data.apiRes.playlists)
    setPlaylistData(data.apiRes.playlists)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <ul className="editors-choice-ul-container">
      {console.log(playlistData)}
      {playlistData.length !== 0 ? (
        playlistData.items.map(each => (
          <PlaylistCard key={each.id} playlist={each} />
        ))
      ) : (
        <p>no playlist</p>
      )}
    </ul>
  )
}
export default EditorsChoice
