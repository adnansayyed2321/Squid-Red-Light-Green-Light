import {BrowserRouter, Route, Switch} from 'react-router-dom'

import WelcomePage from './components/WelcomePage'
import Registration from './components/Registration'
import Round1 from './components/Round1'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/registration" component={Registration} />
      <Route exact path="/round1" component={Round1} />
    </Switch>
  </BrowserRouter>
)

export default App
