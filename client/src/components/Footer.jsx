import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
      <footer className="pv-footer">
        <p className="bg-gray-300 p-10 bg-4 text-center text-3xl">
          {" "}
          kwikFolio is made with &#x2764;&#xFE0F; by PV
          <Link to="/persant">Persant</Link>{https://github.com/vasudevap}  //this doesnt go here but it is the github link//
          <Link to="/mat">Mat</Link> {https://github.com/matthewbarnes1}    //this doesnt go here but it is the github link//
          <Link to="/timothy">Timothy</Link> {shooterondeck77}               //this doesnt go here but it is the github link//
       
        </p>
      </footer>
    );
  }
  
  export default Footer;