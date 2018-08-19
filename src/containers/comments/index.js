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
    var { isLoaded, comments, error, province } = this.props

    alert(province + ' fuck')

    return (
      isLoaded ?
        <div className='row row--my row--mycont'>
          <div className='offset-1 col-md-10 col-sm-10'>
            <div className='container'>
              <ProComments comments={comments} />
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
