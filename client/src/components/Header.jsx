import React from 'react';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
    <header>
      <nav className="navbar">
      
      
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">LoginForm</Link>
          </li>
          <li>
            <Link to="/services">store</Link>
          </li>
          <li>
            <Link to="/contact">footer</Link>
          </li>
       {/* // heres where i would put in the links to are github ? */}
       
       
        </ul>
      </nav>
    </header>
  );
}

export default Header;
