import React from 'react'
import 'babel-polyfill'
import { connect } from 'react-redux'

import getAllComments from '../../redux/actionCreators/comments'

import Loading from '../../components/loading/'
import ProComments from '../../components/provinceComments/'


class Comments extends React.Component {
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

    let shit = filteredJson.map(comm => {
      return (<ProComments comments={comm} />)
    })

    if (comments == null)
      return <div className='d-flex justify-content-center'><p className='whity-text'>There's no data available for the moment</p></div>

    return (
      isLoaded ?
        <div className='row row--my row--mycont'>
          <div className='offset-1 col-md-10 col-sm-10'>
            <div className='d-flex justify-content-center'>
              <h1 className='whity-text'>{province}</h1>
            </div>
            <div className='container'>
              {shit}
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
  getAllComments
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)
