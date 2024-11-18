import {useState, useRef} from 'react'

// import {FaPlay} from 'react-icons/fa'
import {IoIosPause, IoIosPlay} from 'react-icons/io'

import './AudioPlayer.css'

const AudioPlayer = ({audioTrack}) => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const togglePlayPause = () => {
    const audio = audioRef.current
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(prev => !prev)
  }
  //   console.log(audioTrack)
  console.log(isPlaying)
  return (
    <div className="audio-player-main-container">
      <div className="audio-player-thumbnail-and-name-container">
        <img
          className="audio-player-track-thumbnail"
          src={audioTrack.track.album.images[0].url}
          alt="track-thumbnail"
        />

        <div>
          <h1 className="audio-player-song-name">{audioTrack.track.name}</h1>
          <p className="audio-player-artist-name">
            {audioTrack.track.artists[0].name}
          </p>
        </div>
      </div>
      <button
        className="play-pause-btn"
        type="button"
        onClick={togglePlayPause}
      >
        {isPlaying ? (
          <IoIosPause className="play-icon" />
        ) : (
          <IoIosPlay className="play-icon" />
        )}
      </button>
      <audio ref={audioRef} src={audioTrack.track.preview_url}>
        <track
          kind="captions"
          src="captions.vtt"
          srcLang="en"
          label="English captions"
          default
        />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

export default AudioPlayer
