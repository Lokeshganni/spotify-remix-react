import './PlaylistOwnerInfo.css'

const PlaylistOwnerInfo = ({specificPlaylist}) => (
  <div className="playlist-owner-info-container">
    <img
      className="playlist-image"
      src={specificPlaylist.images[0].url}
      alt="playlist"
    />
    <div>
      <p className="editors-picks-para">Editor&apos;s picks</p>
      <h1 className="playlist-name-heading">{specificPlaylist.name}</h1>
    </div>
  </div>
)
export default PlaylistOwnerInfo
