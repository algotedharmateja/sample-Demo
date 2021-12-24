import {Component} from 'react'
import './index.css'

class Header extends Component {
  state = {
    seconds: 60,
  }

  componentDidMount() {
    this.timerId = setInterval(this.getTimer, 1000)
  }

  getTimer = () => {
    this.setState(previous => ({
      seconds: previous.seconds - 1,
    }))
  }

  render() {
    const {seconds} = this.state
    if (seconds === 0) {
      clearInterval(this.timerId)
    }
    return (
      <div className="header">
        <nav className="nav-bar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png "
            alt="website logo"
            className="website-logo"
          />
          <div className="score-timer-container">
            <p className="score">
              Score:<span className="count">1</span>
            </p>

            <div className="timer-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
                alt="timer"
                className="timer-img"
              />
              <p className="timer-count-down">{seconds} Sec</p>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default Header
