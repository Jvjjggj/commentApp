import './index.css'

const CommentItem = props => {
  const {
    details,
    initialContainerBackgroundClassNames,
    changeLikedImage,
    deleteContainer,
  } = props
  const {id1, id, name1, comment1, liked} = details
  const firstName = name1[0]

  const background = initialContainerBackgroundClassNames[id1]

  const changeImage = liked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const changeImageColor = () => {
    changeLikedImage(id)
  }

  const deleteList = () => {
    deleteContainer(id1)
  }

  return (
    <li className="list">
      <div className="divv">
        <div className={background}>
          <p>{firstName}</p>
        </div>
        <div className="name">
          <div className="nameDiv">
            <h1 className="heading">{name1}</h1>
            <p className="para11">less than a minute ago</p>
          </div>
          <div>
            <p className="commentPara">{comment1}</p>
          </div>
        </div>
      </div>
      <div className="likeDeleteDiv">
        <div className="likeDiv">
          <button type="button" onClick={changeImageColor} className="btn-like">
            <img src={changeImage} alt="like" />
          </button>
          <p>like</p>
        </div>
        <div className="deleteDiv">
          <button className="btn-like" onClick={deleteList} type="button">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
              data-testid="delete"
            />
          </button>
        </div>
      </div>
    </li>
  )
}

export default CommentItem
