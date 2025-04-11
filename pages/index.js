// pages/index.js

import React from 'react';

const Home = () => {
  return (
    <html lang="en">
      <head>
        <title>Codo</title>
        <link rel="stylesheet" href="dist/styles.css" />
      </head>
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="AboutUs.html">About us</a></li>
              <li><a href="ContactUs.html">Contact us</a></li>
            </ul>
          </nav>
        </header>
        <p>Welcome to Codo, your friendly platform to handle
           invoicing and billing for charging your electric
           vehicles.
        </p>
      </body>
    </html>
  );
};

export default Home;