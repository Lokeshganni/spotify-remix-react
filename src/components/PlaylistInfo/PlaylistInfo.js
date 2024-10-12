import './PlaylistInfo.css'

const PlaylistInfo = ({specificPlaylist}) => {
  console.log(specificPlaylist)
  return (
    <div>
      <img src={specificPlaylist.images[0].url} alt="img" />
      <div>
        <h1>{specificPlaylist.name}</h1>
        {/* <p>{}</p> */}
      </div>
    </div>
  )
}

export default PlaylistInfo
