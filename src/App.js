import {BrowserRouter, Route, Switch} from 'react-router-dom'

import WelcomePage from './components/WelcomePage'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={WelcomePage} />
    </Switch>
  </BrowserRouter>
)

export default App
