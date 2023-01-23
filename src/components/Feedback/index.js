// Write your React code here.
import {Component} from 'react'
import Emoji from '../emoji'
import './index.css'

class Feedback extends Component {
  clickBtn = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <>
        <h1>Thank You</h1>
        <img src={loveEmojiUrl} alt="love emoji" />
      </>
    )
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div>
        <div>
          <h1>How satisfied are you with our customer support performance?</h1>
          <ul>
            {emojis.map(each => (
              <Emoji
                resourcesList={each}
                clickBtn={this.clickBtn}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
