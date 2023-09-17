import {BsArrowRight} from 'react-icons/bs'

import {Link} from 'react-router-dom'

import './index.css'

const WelcomePage = () => (
  <div className="welcomePageMainContainer">
    <img
      src="https://res.cloudinary.com/adnansayyed2321/image/upload/v1694928294/fef3bc21c7a5a1de11963ead5bf6e904-fotor-bg-remover-20230917105437_e4kku8.png"
      alt="squid-game-title"
      className="title-squid-game"
    />

    <Link to="/registration">
      <button type="button" className="wonButton">
        <p>Win 45.6 Billion</p>
        <BsArrowRight className="arrowStyle" />
      </button>
    </Link>
  </div>
)

export default WelcomePage
