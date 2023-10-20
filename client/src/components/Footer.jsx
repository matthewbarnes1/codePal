import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="pv-footer">
        <p className="bg-gray-300 p-10 bg-4 text-center text-3xl">
          {" "}
          kwikFolio is made with &#x2764;&#xFE0F; by PV
          <Link to="https://github.com/vasudevap">Prashant</Link> 
          <Link to="https://github.com/matthewbarnes1">Matt</Link>     
          <Link to="https://github.com/shooterondeck77" >Tim</Link>     
        </p>
      </footer>
    );
  }
  
  export default Footer;