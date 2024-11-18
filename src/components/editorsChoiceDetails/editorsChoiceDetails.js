import SpecificPlaylistDetails from '../SpecificPlaylistDetails/SpecificPlaylistDetails'

const editorsChoiceDetails = props => {
  const {match} = props
  const {id} = match.params
  return <SpecificPlaylistDetails id={id} apiQueryParam="playlists-details" />
}
export default editorsChoiceDetails
