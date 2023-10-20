import React from 'react';
import { Outlet } from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Persant from './prashantFooter';
import Mat from './MatFooter';
import Timothy from './components/TimothyFooter';
import ShoppingCart from './components/shoppingcart';
import LoginForm from './components/logInform';


const navItems = [
  {
    title: "Home",
    pagename: "#",
  },
  {
    title: "shoping cart",
    pagename: "shopping cart",
  },
  {
    title: "store",
    pagename: "store",
  },
  {
    title: "login/logout",
    pagename: "login",
  },
 
];
function App() {
  return (
    <div className="codepal-app">
      <h1>Codepal App</h1>
    
    </div>
  );
  function App() {
    return (
      <>
        <Header navItems={navItems} />
        <Outlet />
        <Footer />
      </>
    );
  }
}
export default App;
