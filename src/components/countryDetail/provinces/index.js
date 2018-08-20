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

    let counterkey = 0

    if (provinces == null)
      return <div className='d-flex justify-content-center'><p className='whity-text'>There's no data available for the moment</p></div>

    let size = provinces.length

    let items1 = provinces.slice(0, Math.round(size / 2)).map((province) => {
      counterkey++
      return (
        <Link to={{ pathname: `/provinceComments/${province}`, state: { province } }}>
          <div key={province + counterkey}>
            <p className='whity-text'>{province}</p>
          </div>
        </Link>
      )
    })

    let items2 = provinces.slice(Math.round(size / 2), size).map((province) => {
      counterkey++
      return (
        <Link to={{ pathname: `/provinceComments/${province}`, query: { 'obj': JSON.stringify(province) } }}>
          <div key={province + counterkey}>
            <p className='whity-text'>{province}</p>
          </div>
        </Link>
      )
    })

    return (
      isLoaded ?
        <div className='row row--my'>
          <div className='col-md-6 col-sm-6'>{items1}</div>
          <div className='col-md-6 col-sm-6'>{items2}</div>
        </div>
        : error ? <h3 className='whity-text'> There's no data available for the moment </h3>
          : <div><h1 className='whity-text'>Loading...</h1></div>
    )
  }
}

export default Provinces
