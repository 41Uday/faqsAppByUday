// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isActive: false}

  clickButton = () => {
    console.log('clicked')
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  showPara = () => {
    const {isActive} = this.state
    const {eachItem} = this.props
    const {answerText} = eachItem
    if (isActive) {
      return <p className="para-last">{answerText}</p>
    }
    return null
  }

  render() {
    const {isActive} = this.state
    console.log(isActive)
    const {eachItem} = this.props
    return (
      <li>
        <div className="list-item">
          <div className="list-item-2-inner">
            <h1 className="list-para-1">{eachItem.questionText}</h1>
            {isActive ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
                alt="minus"
                className="img-1"
                onClick={this.clickButton}
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
                alt="plus"
                className="img-1"
                onClick={this.clickButton}
              />
            )}
          </div>
          {isActive ? this.showPara() : ''}
        </div>
      </li>
    )
  }
}

export default FaqItem
