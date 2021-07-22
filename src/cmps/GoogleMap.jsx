import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Component } from 'react';

class _GoogleMap extends Component {

    state = {
        telAviv: {
            lat: 32.109333,
            lng: 34.855499
        },
        modiin: {
            lat: 31.89825,
            lng: 35.01051
        },
        haifa: {
            lat: 32.81841,
            lng: 34.9885
        },
        selected: {
            lat: 32.109333,
            lng: 34.855499
        }
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({ selected: this.state.modiin })
                }}>Modiin</button>
                <button onClick={() => {
                    this.setState({ selected: this.state.telAviv })
                }}>Tel Aviv</button>
                <button onClick={() => {
                    this.setState({ selected: this.state.haifa })
                }}>Haifa</button>
                <Map className="map"
                    google={this.props.google}
                    zoom={12}
                    initialCenter={this.state.selected}
                    center={this.state.selected}
                >

                </Map>
            </div>
        );
    }
}

export const GoogleMap = GoogleApiWrapper({
    apiKey: ('AIzaSyAPJKAy2rBEjt-Zkz2qXnO5x4nOqV6UwRY')
})(_GoogleMap)