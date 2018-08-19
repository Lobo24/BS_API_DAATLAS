import React from 'react';
import Loading from "./../loading/";
import DetailMenu from "./detailMenu/";
import DetailCont from "./detailCont";
import Example from './../../components/tabs/';

class countryDetail extends React.Component {

  constructor(props) { //setea initial state and component first time
    super(props);
    this.state = {
      country: [], //data from api
      isLoaded: false,// isLoaded: false, //when items are loaded
    }
  }

  componentDidMount() {

    this.setState({
      country: JSON.parse(this.props.location.query.obj),
      isLoaded: true
    })
  }

  render() {

    var { isLoaded, country } = this.state;

    return (
      !isLoaded ?
        <div className="d-flex justify-content-center">
          <Loading />
        </div>
        : <div>
          <Example country={country} />
        </div>
    );
  }
}

export default countryDetail;