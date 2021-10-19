import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';



class LocationMap extends Component {
  static defaultProps = {
    center: {
      lat: 22.776038169751384,
      lng: 86.14626113558197,
    },
    zoom: 11,
    };
 renderMarkers = (map, maps) => {
  let marker = new maps.Marker({
    position: { lat: 22.776038169751384, lng: 86.14626113558197 },
    map,
    title: "NIT Jamshedpur new academic building",
  });
  return marker;
 };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "300px", width: "600px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "<- Add Token Here ->" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderMarkers(map, maps)}
        >
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default LocationMap;