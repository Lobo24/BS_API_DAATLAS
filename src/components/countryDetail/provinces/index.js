import React from 'react'
import { Link } from 'react-router-dom'

class Provinces extends React.Component {

  constructor(props) { //setea initial state and component first time
    super(props);
    this.state = {
      provinces: [], //data from api
      isLoaded: false,// isLoaded: false, //when items are loaded
      error: null
    }
  }

  componentDidMount() {
    try {
      this.setState({
        isLoaded: true
      })
    } catch (error) {
      this.setState({
        error
      })
    }
  }

  render() {
    var { isLoaded, error } = this.state;
    var { provinces } = this.props;

    if (provinces == null)
      return <div className='d-flex justify-content-center'><p className='whity-text'>There's no data available for the moment</p></div>

    let size = provinces.length

    let items1 = provinces.slice(0, Math.round(size / 2)).map((province) => {
      return (
        <li  key={province}>
          <Link to={{ pathname: `/provinceComments/${province}`, state: { province } }}>
            <p className='whity-text'>{province}</p>
          </Link>
        </li>
      )
    })

    let items2 = provinces.slice(Math.round(size / 2), size).map((province) => {
      return (
        <li key={province}>
          <Link to={{ pathname: `/provinceComments/${province}`, state: { province } }}>
            <p className='whity-text'>{province}</p>
          </Link>
        </li>
      )
    })

    return (
      isLoaded ?
        <div className='row row--my row-provinces'>
          <div className='col-md-6 col-sm-6'><ul className='non-list-style'>{items1}</ul></div>
          <div className='col-md-6 col-sm-6'><ul className='non-list-style'>{items2}</ul></div>
        </div>
        : error ? <h3 className='whity-text'> There's no data available for the moment </h3>
          : <div><h1 className='whity-text'>Loading...</h1></div>
    )
  }
}

export default Provinces
