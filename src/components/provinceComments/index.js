import React from 'react'

class provinceComments extends React.Component {

  render() {
    let { comments } = this.props

    if (comments == null)
      return <div className='d-flex justify-content-center'><p className='whity-text'>There's no data available for the moment</p></div>

    let items = comments.map((comment) => {
      return (
        <div>
          <p className='whity-text'>{comment.comment}</p>
        </div>
      )
    })

    return (
      <div>
        {items}
      </div>
    )
  }
}

export default provinceComments