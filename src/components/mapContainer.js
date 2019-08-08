import React, {Component} from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
// ...
 
class MapContainer extends Component {
    render() {
        
        return (
          <Map 
            google={this.props.google} 
            zoom={14}
            initialCenter={{
              lat: 20.701470, 
              lng: -103.359416
            }}
          >
            <Marker name={'Manofacturing'} />
          </Map>
        );
      }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyA4RWScAQSTS5CQ-pznQMNIhMwqvM9Dang')
})(MapContainer)