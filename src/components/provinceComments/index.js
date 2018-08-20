import React from 'react'

class provinceComments extends React.Component {

  render() {
    let { comments } = this.props

    if (comments == null)
      return <div className='d-flex justify-content-center'><p className='whity-text'>There's no data available for the moment</p></div>

    let items = comments.map((comment) => {
      return (
        <li className='province-comment-li'>
          <div className='province-comment-cont'>
            <p>{comment.comment}</p>
          </div>
        </li>
      )
    })

    return (
      <ul className='non-list-style commends-non-list-style'>
        {items}
      </ul>
    )
  }
}

export default provinceComments
