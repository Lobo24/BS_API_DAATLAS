import React from 'react'
import 'babel-polyfill'
import { connect } from 'react-redux'

import getAllCountries from '../../redux/actionCreators/countries'

import Main from '../../components/main/'
import Loading from '../../components/loading/'

import { Animated } from "react-animated-css";

class Home extends React.Component {
  async componentDidMount() {
    this.props.getAllCountries()
  }

  render() {

    var { isLoaded, countries, error } = this.props

    return (
      isLoaded ?
        <Animated animationIn="bounceInDown" animationOut="fadeOut" isVisible={true}>
          <div className='row row--my row--mycont'>
            <div className='offset-1 col-md-10 col-sm-10'>
              <div className='container'>
                <Main countries={countries} />
              </div>
            </div>
          </div>
        </Animated>
        : error ? <p>Error...</p>
          : <div className='d-flex justify-content-center'>
            <Loading />
          </div>
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries.countries,
  isLoaded: state.countries.isLoaded,
  error: state.countries.error
})

const mapDispatchToProps = {
  getAllCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
