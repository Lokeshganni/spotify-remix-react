import './AudioPlayer.css'

const AudioPlayer = ({audioUrl}) => {
  console.log(audioUrl)
  return (
    <div className="audio-player-main-container">
      <audio controls src={audioUrl}>
        {/* Add a track for captions */}
        <track kind="captions" srcLang="en" label="English captions" />
        {/* Fallback text if the browser doesn't support audio */}
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AudioPlayer
