import './TrackItem.css'

const TrackItem = ({trackObj, handleAudioUrl}) => {
  const {track} = trackObj
  //   console.log(track)
  const trackDuration = (track.duration_ms / (1000 * 60)).toFixed(2)
  return (
    <li
      onClick={() => handleAudioUrl(track.preview_url)}
      className="track-item-li-container"
    >
      <h1 className="track-name">{track.name}</h1>
      <p className="track-duration">{trackDuration}</p>
    </li>
  )
}

export default TrackItem
