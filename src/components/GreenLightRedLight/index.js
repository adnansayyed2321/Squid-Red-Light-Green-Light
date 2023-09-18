import {Component} from 'react'

import './index.css'

class GreenLightRedLight extends Component {
  state = {second: 40, score: 0, gameOnOff: true, color: 'red', win: false}

  componentDidMount = () => {
    this.timerId = setInterval(this.secondChange, 1000)
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

  render() {
    const {second} = this.state
    console.log(second)
    return (
      <div className="greenMainContainer">
        <div className="Navbar_round_1">
          <img
            src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1694928294/fef3bc21c7a5a1de11963ead5bf6e904-fotor-bg-remover-20230917105437_e4kku8.png"
            alt="logo"
            className="logoMainContainer"
          />
          <p>Score : 0</p>
          <p>{second} sec</p>
        </div>
      </div>
    )
  }
}
export default GreenLightRedLight
