import React from 'react';
import { Link } from 'react-router-dom';
// import not_found from '../Images/not_found.png';

function NotFoundPage() {
  return (
    <div>
      <p style={{ textAlign: 'center' }}>
        <h1>Oops! You followed a wrong link!</h1>
      </p>
      {/* <img
        alt="not found component"
        src={"../Images/not_found.png"}
        width="50%"
        height="50%"
      /> */}
      <Link to="/">Go Home </Link>
    </div>
  );
}

export default NotFoundPage;



