import {Component} from 'react'

import './index.css'

class Registration extends Component {
  render() {
    return (
      <div className="registrationMainContainer">
        <h1 className="registration-heading">Registration</h1>
        <form onSubmit={this.onRegistration}>
          <div className="input-label-container">
            <label htmlFor="playerName" className="labelStyles">
              Name
            </label>
            <input id="playerName" className="inputStyles" />
          </div>

          <div className="input-label-container">
            <label htmlFor="playerEmail" className="labelStyles">
              Email
            </label>
            <input id="playerEmail" className="inputStyles" />
          </div>

          <div className="input-label-container">
            <label htmlFor="playerMobile" className="labelStyles">
              Mobile Number
            </label>
            <input id="playerMobile" className="inputStyles" />
          </div>

          <div className="input-label-container">
            <label htmlFor="playerLevel" className="labelStyles">
              Difficulty Level
            </label>

            <select id="playerLevel" className="inputStyles">
              <option>Noob (Easy)</option>
              <option>Pro (Medium)</option>
              <option>Master (Hard)</option>
            </select>

            <button type="submit" className="register-button">
              Register
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Registration
