import {Switch, Route, Redirect} from 'react-router-dom'

import Login from './components/Login/login'
import Home from './components/Home/home'
import editorsChoiceDetails from './components/editorsChoiceDetails/editorsChoiceDetails'
import newReleasesDetails from './components/newReleasesDetails/newReleasesDetails'
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
      component={editorsChoiceDetails}
    />
    <ProtectedRoute
      exact
      path="/new-releases/:id"
      component={newReleasesDetails}
    />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
