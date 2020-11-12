import React from 'react';
import GoogleMapReact from 'google-map-react';

function Location(props) {
class SimpleMap{
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };
}


    return (
        
        <div>
        {SimpleMap}
            <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCS3XZZPyrj_biwDK1zZ0T0i5ovyPrbj4s" }}
        //   defaultCenter={this.props.center}
        //   defaultZoom={this.props.zoom}
        >
          <Location
            lat={59.955413}
            lng={30.337844}
            text="Encompass HealthCare"
          />
        </GoogleMapReact>
      </div>
        </div>
    );
}

export default Location;