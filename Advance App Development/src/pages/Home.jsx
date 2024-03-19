import React from 'react';
import Nav from './Nav';

import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="video-container">
        <video autoPlay muted loop className="video">
          <source src="https://www.pexels.com/video/man-talking-in-front-of-the-team-6519686/" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      
    </div>
  );
};

export default Home;