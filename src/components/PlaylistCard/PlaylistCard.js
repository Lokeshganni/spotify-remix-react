import {Link} from 'react-router-dom'

import './PlaylistCard.css'

const PlaylistCard = ({playlist, queryParam}) => {
  const {name, images, id} = playlist
  return (
    <li className="playlist-card-li-container">
      <Link className="playlist-link-ele" to={`/${queryParam}/${id}`}>
        <img
          className="playlist-card-thumbnail-img"
          src={images[0].url}
          alt={
            queryParam === 'new-releases'
              ? 'new release album'
              : 'featured playlist'
          }
        />
        <p className="playlist-name">{name}</p>
      </Link>
    </li>
  )
}
export default PlaylistCard
