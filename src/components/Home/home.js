import Header from '../Header/Header'
import EditorsChoice from '../EditorsChoice/EditorsChoice'
import GenreAndMoods from '../GenreAndMoods/GenreAndMoods'
import NewReleases from '../NewReleases/NewReleases'

import './home.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-main-container">
      <h1 className="home-page-headings">Editor&apos;s picks</h1>
      <EditorsChoice />
      <h1 className="home-page-headings">Genres & Moods</h1>
      <GenreAndMoods />
      <h1 className="home-page-headings">New Releases</h1>
      <NewReleases />
    </div>
  </div>
)
export default Home
