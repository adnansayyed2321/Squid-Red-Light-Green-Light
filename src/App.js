import {BrowserRouter, Route, Switch} from 'react-router-dom'

import WelcomePage from './components/WelcomePage'
import Registration from './components/Registration'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/registration" component={Registration} />
    </Switch>
  </BrowserRouter>
)

export default App
