// Write your code here
import Component from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  buttonClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state
    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">thank you! Happy Learning</p>
        <button type="button" className="btn-style" onClick={this.buttonClick}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
