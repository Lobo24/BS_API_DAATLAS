import React from 'react';
import 'babel-polyfill';
import { connect } from 'react-redux';
import { map } from 'ramda';

import getAllCountries from '../../redux/actionCreators/countries'

import Aside from '../../components/aside/';
import Main from '../../components/main/';
import Loading from "../../components/loading/";

class Home extends React.Component {

  async componentDidMount() {
    this.props.getAllCountries()
  }

  render() {

    var { isLoaded, countries, error } = this.props;

    return (
      isLoaded ?
        <div className='row row--my row--mycont'>
          <div className=' offset-1 col-md-2 col-sm-2'>
            <aside>
              <Aside />
            </aside>
          </div>
          <div className='offset-1 col-md-7 col-sm-7'>
            <div className="container">
              <Main countries={countries} />
            </div>
          </div>
        </div>
        : error ? <p>Error...</p>
          : <div className="d-flex justify-content-center">
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);