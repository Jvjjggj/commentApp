import {Component} from 'react'

// eslint-disable-next-line no-unused-vars
import {v4 as jakId} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

// eslint-disable-next-line no-unused-vars
const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

const lst = []

class Comments extends Component {
  state = {
    initialLst: lst,
    name: '',
    comment: '',
    countComment: 0,
    // eslint-disable-next-line react/no-unused-state
    isLike: false,
    cc: 0,
  }

  changeLikedImage = id1 => {
    const {initialLst} = this.state
    const filterDataOnLike = initialLst.map(i => {
      if (i.id === id1) {
        return {...i, liked: !i.liked}
      }
      return i
    })
    this.setState({initialLst: filterDataOnLike})
  }

  deleteContainer = id => {
    const {initialLst} = this.state
    const filterDataOnDelete = initialLst.filter(i => {
      if (i.id1 !== id) {
        return i
      }
      return ''
    })
    this.setState({initialLst: filterDataOnDelete})
    this.setState(prevState => ({countComment: prevState.countComment - 1}))
  }

  addComment = event => {
    event.preventDefault()
    const {name, comment, cc} = this.state
    if (cc === 6) {
      this.setState({cc: 0})
    }
    const newComment = {
      id: jakId(),
      name1: name,
      comment1: comment,
      liked: false,
      id1: cc,
    }
    this.setState(prevState => ({
      initialLst: [...prevState.initialLst, newComment],
      countComment: prevState.countComment + 1,
      cc: prevState.cc + 1,
    }))
  }

  trackName = event => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({name: event.target.value})
  }

  trackCoomment = event => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({comment: event.target.value})
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {name, comment, countComment, initialLst} = this.state
    return (
      <div className="mainContainer">
        <h1>Comments</h1>
        <div className="combineDiv">
          <form className="commentsContainer">
            <div className="inputContainer">
              <p>Say something about 4.0 Technologies</p>
              <input
                onChange={this.trackName}
                className="nameInput"
                type="text"
                placeholder="Your Name"
              />
              <br />
              <textarea
                className="textArea"
                placeholder="Your Comment"
                rows="10"
                cols="100"
                onChange={this.trackCoomment}
              />
              <button type="submit" onClick={this.addComment}>
                Add Comment
              </button>
            </div>
          </form>
          <div className="imgDiv">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>

        <div className="countComment">
          <div>
            <button type="button" className="btn">
              {countComment}
            </button>
          </div>

          <p className="para">comments</p>
        </div>
        <ul className="unorderList">
          {initialLst.map(i => (
            <CommentItem
              initialContainerBackgroundClassNames={
                initialContainerBackgroundClassNames
              }
              changeLikedImage={this.changeLikedImage}
              details={i}
              key={i.id}
              deleteContainer={this.deleteContainer}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
