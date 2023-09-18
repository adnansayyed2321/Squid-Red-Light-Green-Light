import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import './index.css'

const Round1 = () => {
  const name = Cookies.get('name')
  console.log(name)
  return (
    <div className="round1MainContainer">
      <h1 className="playerNameRound1">Hi {name} !</h1>
      <p className="paragraph1Round1">Here is your Round 1</p>
      <h1 className="gameName">
        <span className="green">Green</span> Light{' '}
        <span className="red">Red</span> Light
      </h1>
      <img
        src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1695016801/pxfuel_3_knvyxs.jpg"
        alt="glrl"
        className="glrl-image"
      />
      <Link to="/greenlightredlight">
        <button type="button" className="startGameButton">
          Start Game
        </button>
      </Link>
    </div>
  )
}

export default Round1
