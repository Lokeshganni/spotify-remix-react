import Header from '../Header/Header'
import EditorsChoice from '../EditorsChoice/EditorsChoice'

import './home.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-main-container">
      <h1 className="home-page-headings">Editor&apos;s picks</h1>
      <EditorsChoice />
    </div>
  </div>
)
export default Home
