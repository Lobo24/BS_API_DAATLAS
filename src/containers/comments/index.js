import React from 'react'
import 'babel-polyfill'
import { connect } from 'react-redux'

import getAllComments from '../../redux/actionCreators/comments'
import addComment from '../../redux/actionCreators/commentsadd'

import Loading from '../../components/loading/'
import ProComments from '../../components/provinceComments/'

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.addComments = this.addComments.bind(this)
  }

  addComments() {
    let inputcomment = document.getElementById('addcomment').value
    let prov = this.props.location.state
    let commm = {
      "province": prov,
      "comment": [{ "comment": inputcomment }]
    }
    this.props.addComment(commm)
  }

  async componentDidMount() {
    this.props.getAllComments()
  }

  render() {
    var { isLoaded, comments, error } = this.props
    var { province } = this.props.location.state

    var filteredJson = comments.filter(function (row) {
      if (row.province.toLowerCase() == province.toLowerCase()) {
        return true
      } else {
        return false
      }
    })

    let provcomm = filteredJson.map(comm => {
      return (<ProComments comments={comm.comments} />)
    })

    if (comments == null)
      return <div className='d-flex justify-content-center'><p className='whity-text'>There's no data available for the moment</p></div>

    return (
      isLoaded ?
        <div className='row row--my row--mycont'>
          <div className='offset-1 col-md-10 col-sm-10'>
            <div className='d-flex justify-content-center'>
              <h1 id='provname' className='whity-text'>{province}</h1>
            </div>
            <div className='d-flex justify-content-center'>
              <input id='addcomment' type='text' className='commeds--imput' placeholder='Add Comment' />
              <button onClick={this.addComments}>SEND COMMENT</button>
            </div>
            <div className='container d-flex justify-content-center'>
              {provcomm}
            </div>
          </div>
        </div>
        : error ? <p>Error...</p>
          : <div className='d-flex justify-content-center'>
            <Loading />
          </div>
    )
  }
}

const mapStateToProps = state => ({
  comments: state.comments.comments,
  isLoaded: state.comments.isLoaded,
  error: state.comments.error
})

const mapDispatchToProps = {
  getAllComments,
  addComment
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
