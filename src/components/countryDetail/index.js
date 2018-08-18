import React from 'react';
import Loading from "./../loading/";
import DetailMenu from "./detailMenu/";
import DetailCont from "./detailCont";

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
          <div>
            <div className='container'>
              <ul className="nav nav-pills mb-3" id="myTab" role="tablist">
                <li class="active">
                  <a href="#1a" data-toggle="tab">Overview</a>
                </li>
                <li><a href="#2a" data-toggle="tab">Using nav-pills</a>
                </li>
              </ul>

              <div class="tab-content clearfix">
                <div class="tab-pane active" id="1a">
                  <h3 className='whity-text'>Content's background color is the same for the tab</h3>
                </div>
                <div class="tab-pane" id="2a">
                  <h3 className='whity-text'>We use the class nav-pills instead of nav-tabs which automatically creates a background color for the tab</h3>
                </div>
              </div>
            </div>

            <DetailMenu country={country} />
            <DetailCont country={country} />
          </div>
        </div>
    );
  }
}

export default countryDetail;