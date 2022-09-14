// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  state = {click: false}

  buttonClick = id => {
    console.log(id, 'Triggered')
    this.setState(prevState => ({
      click: !prevState.click,
    }))
  }

  render() {
    const {click} = this.state
    const {faqsList} = this.props
    console.log(click)
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="head-1">FAQs</h1>
          <ul className="list-container">
            {faqsList.map(e => (
              <FaqItem key={e.id} eachItem={e} buttonClick={this.buttonClick} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Faqs
