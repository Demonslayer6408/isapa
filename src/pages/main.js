import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Main() {
  return (
    <div>
      <h1>Navbar</h1>
      <ul>
        <li>
          {/* Link to the home page */}
          <Link to="home">Home</Link>
        </li>
        <li>
          {/* Link to another page */}
          <Link to="about">About</Link>
        </li>
      
      </ul>
      <Outlet/>
    </div>
  );
}

export default Main;
