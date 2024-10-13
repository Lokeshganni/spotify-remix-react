import './TrackItem.css'

const TrackItem = ({trackObj}) => {
  const {track} = trackObj
  const trackDuration = (track.duration_ms / (1000 * 60)).toFixed(2)
  return (
    <li className="track-item-li-container">
      <h1 className="track-name">{track.name}</h1>
      <p className="track-duration">{trackDuration}</p>
    </li>
  )
}

export default TrackItem
