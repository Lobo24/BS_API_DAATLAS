import React from "react";

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
                provinces: this.props.location.state,
                isLoaded: true
            })
        } catch (error) {
            this.setState({
                error
            })
        }
    }

    render() {
        var { isLoaded, provinces, error } = this.state;

        if (provinces == null)
            return <div className="d-flex justify-content-center"><p className='whity-text'>There's no data available for the moment</p></div>

        let items = provinces.map((province) => {
            return (
                <div key={province}>
                    <p>{province}</p>
                </div>
            )
        })

        return (
            isLoaded ?
                <div>
                    <h1 className='whity-text'>{items}</h1>
                </div>
                : error ? <h3 className='whity-text'> There's no data available for the moment </h3>
                    : <div><h1 className="whity-text">Loading...</h1></div>
        )
    }
}

export default Provinces;