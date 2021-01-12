import React from 'react';
import {Redirect} from 'react-router';

function NotFound() {
  return (
    <div>
      {/* <h2>Not found</h2> */}
      <Redirect to="/" />

    </div>
  );
}

export default NotFound;
