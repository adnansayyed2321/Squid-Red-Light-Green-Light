import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import WelcomePage from './components/WelcomePage'
import Registration from './components/Registration'
import Round1 from './components/Round1'
import GreenLightRedLight from './components/GreenLightRedLight'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/round1" component={Round1} />
      <Route exact path="/greenlightredlight" component={GreenLightRedLight} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
