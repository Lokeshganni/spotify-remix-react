import {useState} from 'react'

// import {FaPlay} from 'react-icons/fa'
import {IoIosPause, IoIosPlay} from 'react-icons/io'

import './AudioPlayer.css'

const AudioPlayer = ({audioTrack, specificPlaylist}) => {
  const [isPlaying, setIsPlaying] = useState(true)
  console.log(audioTrack)
  return (
    <div className="audio-player-main-container">
      <div>
        <img
          className="audio-player-track-thumbnail"
          src={audioTrack.track.album.images[0].url}
          alt=""
        />
      </div>
      <div>
        <h1 className="audio-player-song-name">{audioTrack.track.name}</h1>
        <p className="audio-player-artist-name">
          {audioTrack.track.artists[0].name}
        </p>
      </div>
      {isPlaying ? (
        <IoIosPause className="play-icon" />
      ) : (
        <IoIosPlay className="play-icon" />
      )}
      <audio src={audioTrack.track.preview_url}>
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
