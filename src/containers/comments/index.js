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
    document.getElementById('addcomment').value = ''
    let prov = this.props.location.state.province
    let commm = {
      "id": (Math.floor((1 + Math.random()) * 0x10000)),
      "province": prov,
      "comments": [{ "comment": inputcomment }]
    }
    this.props.addComment(commm)
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      console.log(event.keyCode)
      this.addComments()
    }
  }

  async componentDidMount() {
    this.props.getAllComments()
  }

  render() {
    var { isLoaded, comments, error } = this.props
    var { province } = this.props.location.state

    var filteredJson = comments.filter(function (row) {
      if (row.province.toLowerCase() === province.toLowerCase()) {
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
              <input id='addcomment' onKeyUp={this.handleEnter.bind(this)} type='text' className='commeds--imput' placeholder='Add Comment' />
            </div>
            <div className='container'>
              <div className="row row--my d-flex justify-content-center">
                {provcomm}
              </div>
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
