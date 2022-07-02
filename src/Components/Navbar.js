import React,{useState} from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo2.png";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

const Navbar = () => {
    const [openLinks,setOpenLinks]=useState(false)
    const toggleNavbar=()=>{
        setOpenLinks(!openLinks);
    }

  return (
    <div>
      <div className="navbar">
        <div className="left" id={openLinks ? "open" : "close"}>
          <img src={Logo} alt="" />
          <div className="hiddenLinks">
            <Link to="/">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
          </div>
        </div>
        <div className="right">
            <Link to="/">Home</Link>
            <Link to="menu">Menu</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <button onClick={toggleNavbar}>
                <ReorderIcon />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
