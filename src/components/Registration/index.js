import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class Registration extends Component {
  state = {
    name: '',
    difficultyLevel: '',
    email: '',
    mobile: '',
    incompleteDetails: false,
  }

  onChangePlayerName = event => {
    this.setState({name: event.target.value})
  }

  onChangeDifficulty = event => {
    this.setState({difficultyLevel: event.target.value})
  }

  playerEmail = event => {
    this.setState({email: event.target.value})
  }

  onMobileNo = event => {
    this.setState({mobile: event.target.value})
  }

  onRegistration = event => {
    event.preventDefault()
    const {history} = this.props

    const {name, difficultyLevel, email, mobile} = this.state
    console.log(difficultyLevel)

    if (
      name === '' ||
      email === '' ||
      difficultyLevel === '' ||
      mobile === ''
    ) {
      this.setState({incompleteDetails: true})
    } else {
      this.setState({incompleteDetails: false})
      Cookies.set('name', name, {
        expires: 30,
        path: '/',
      })
      Cookies.set('level', difficultyLevel, {
        expires: 30,
        path: '/',
      })
      history.push('/round1')
    }
  }

  render() {
    const {name, difficultyLevel, email, mobile, incompleteDetails} = this.state

    return (
      <div className="registrationMainContainer">
        <h1 className="registration-heading">Registration</h1>
        <form onSubmit={this.onRegistration}>
          <div className="input-label-container">
            <label htmlFor="playerName" className="labelStyles">
              Name <span className="star">*</span>
            </label>
            <input
              id="playerName"
              className="inputStyles"
              onChange={this.onChangePlayerName}
              value={name}
            />
          </div>

          <div className="input-label-container">
            <label htmlFor="playerEmail" className="labelStyles">
              Email <span className="star">*</span>
            </label>
            <input
              id="playerEmail"
              className="inputStyles"
              onChange={this.playerEmail}
              value={email}
            />
          </div>

          <div className="input-label-container">
            <label htmlFor="playerMobile" className="labelStyles">
              Mobile Number <span className="star">*</span>
            </label>
            <input
              id="playerMobile"
              className="inputStyles"
              onChange={this.onMobileNo}
              value={mobile}
            />
          </div>

          <div className="input-label-container">
            <label htmlFor="playerLevel" className="labelStyles">
              Difficulty Level <span className="star">*</span>
            </label>

            <select
              id="playerLevel"
              className="inputStyles"
              onChange={this.onChangeDifficulty}
              value={difficultyLevel}
            >
              <option defaultValue>select</option>
              <option>Noob (Easy)</option>
              <option>Pro (Medium)</option>
              <option>Master (Hard)</option>
            </select>

            <button type="submit" className="register-button">
              Register
            </button>
            {incompleteDetails && (
              <p className="errorMessage">Please Enter All * Details</p>
            )}
          </div>
        </form>
      </div>
    )
  }
}

export default Registration
