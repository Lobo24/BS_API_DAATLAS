import React from 'react';
import Card from './card/';

class Countries extends React.Component {

    constructor(props) { //setea initial state and component first time
        super(props);
        this.state = {
            country: {
                flag: this.props.countries[10].flag,
                name: this.props.countries[5].name
            }, //data from api
            isLoaded: false,// isLoaded: false, //when items are loaded
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.countries.map = (country, index) => {

                        this.setState = {
                            country: {
                                
                            }
                        }
                       return <Card country={this.state.country} />
                    }
                    
                }
            </div >
        )
    }
}

export default Countries;