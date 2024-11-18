import SpecificPlaylistDetails from '../SpecificPlaylistDetails/SpecificPlaylistDetails'

const newReleasesDetails = props => {
  const {match} = props
  const {id} = match.params
  console.log(id)
  return <SpecificPlaylistDetails id={id} apiQueryParam="album-details" />
}
export default newReleasesDetails
