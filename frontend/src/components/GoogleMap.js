import React from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';


function GoogleMap(props) {
    return (
        <div>
            {/* <Map google={this.props.google} /> */}

            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.892337624119!2d-83.44041754877367!3d42.55757893049483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8824a520d4edb1ef%3A0x3e3c600b75dfa1d5!2sEncompass%20Healthcare!5e0!3m2!1sen!2sus!4v1605801940663!5m2!1sen!2sus" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> */}
        </div>
    );
}
export default GoogleApiWrapper({
    apiKey: ('AIzaSyCS3XZZPyrj_biwDK1zZ0T0i5ovyPrbj4s')
   })(GoogleMap);
// export default GoogleMap;