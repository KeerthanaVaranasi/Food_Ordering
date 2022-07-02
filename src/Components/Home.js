import React from "react";
import { Link } from "react-router-dom";
import Background from '../images/background.jpg'
import '../styles/Home.css'
//import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${Background})` }}>
      <div className="headerContainer">
        <h1>Happy Time Pizza</h1><br /><br />
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
