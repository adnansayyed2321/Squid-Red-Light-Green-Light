import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'

class GreenLightRedLight extends Component {
  state = {second: 40, score: 0, gameOnOff: true, color: 'red', win: false}

  componentDidMount = () => {
    this.timerId = setInterval(this.secondChange, 1000)
    this.mainBoxColorChange()
  }

  mainBoxColorChange = () => {
    setInterval(() => {
      this.setState(prevState => ({
        color: prevState.color === 'red' ? 'green' : 'red',
      }))
    }, Math.floor(Math.random() * 1000) + 1000)
  }

  secondChange = () => {
    const {second} = this.state

    if (second !== 0) {
      this.setState(prevState => ({second: prevState.second - 1}))
    } else {
      clearInterval(this.timerId)
      this.setState({gameOnOff: false})
    }
  }

  onBoxClick = () => {
    const {color, score} = this.state
    const level = Cookies.get('level')

    if (level === 'Noob (Easy)') {
      if (score + 1 === 10 && color === 'green') {
        this.setState({win: true, gameOnOff: false})
      } else if (color === 'green') {
        this.setState(prevState => ({score: prevState.score + 1}))
      } else if (color === 'red') {
        this.setState({win: false, gameOnOff: false})
      }
    } else if (level === 'Pro (Medium)') {
      if (score + 1 === 15 && color === 'green') {
        this.setState({win: true, gameOnOff: false})
      } else if (color === 'green') {
        this.setState(prevState => ({score: prevState.score + 1}))
      } else if (color === 'red') {
        this.setState({win: false, gameOnOff: false})
      }
    } else if (level === 'Master (Hard)') {
      if (score + 1 === 25 && color === 'green') {
        this.setState({win: true, gameOnOff: false})
      } else if (color === 'green') {
        this.setState(prevState => ({score: prevState.score + 1}))
      } else if (color === 'red') {
        this.setState({win: false, gameOnOff: false})
      }
    }
  }

  onNewGame = () => {
    this.setState({gameOnOff: true, second: 40, score: 0})
  }

  render() {
    const {second, color, score, gameOnOff, win} = this.state

    const boxSecondStyle = color !== 'red' ? 'greenStyles' : ''

    const appliedStyles = `mainBox ${boxSecondStyle}`
    console.log(win)

    return (
      <div>
        {gameOnOff ? (
          <div className="greenMainContainer">
            <div className="Navbar_round_1">
              <img
                src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1694928294/fef3bc21c7a5a1de11963ead5bf6e904-fotor-bg-remover-20230917105437_e4kku8.png"
                alt="logo"
                className="logoMainContainer"
              />
              <div className="scoreTimerContainer">
                <p className="scoreStyles">Score : {score}</p>
                <p className="secondsStyles">{second} sec</p>
              </div>
            </div>
            <div className="mainBoxContainer">
              <button
                type="button"
                className={appliedStyles}
                onClick={this.onBoxClick}
              >
                <img
                  src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1694928294/fef3bc21c7a5a1de11963ead5bf6e904-fotor-bg-remover-20230917105437_e4kku8.png"
                  alt="logo"
                  className="button-logo"
                />
              </button>
            </div>
          </div>
        ) : (
          <div>
            {win ? (
              <div className="winner-main-container">
                <div className="greeting-card">
                  <h1 className="winner-heading">Winner</h1>
                  <img
                    src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1695097987/trophy-png-30582_oskni5.png"
                    alt="trophy"
                    className="trophy-image"
                  />
                  <button
                    type="button"
                    className="playAgainButton"
                    onClick={this.onNewGame}
                  >
                    Play Again
                  </button>
                </div>
              </div>
            ) : (
              <div className="winner-main-container">
                <div className="greeting-card">
                  <h1>Game Over</h1>
                  <button
                    type="button"
                    className="playAgainButton"
                    onClick={this.onNewGame}
                  >
                    Play Again
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  }
}
export default GreenLightRedLight
