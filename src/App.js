import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login/login'
import Home from './components/Home/home'
import SpecificPlaylistDetails from './components/SpecificPlaylistDetails/SpecificPlaylistDetails'
import NotFound from './components/NotFound/NotFound'

import ProtectedRoute from './services/ProtectedRoute'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute
      exact
      path="/editors-choice/:id"
      component={SpecificPlaylistDetails}
    />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
