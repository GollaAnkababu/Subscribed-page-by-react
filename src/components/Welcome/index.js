// Write your code here

import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribed = () => {
    this.setState(preState => ({isSubscribed: !preState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thankyou!HappyLearning</p>
        <button onClick={this.onSubscribed} className="button" type="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
