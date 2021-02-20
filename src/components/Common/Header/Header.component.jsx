import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Link } from "react-router-dom";
 
import './Header.styles.scss';
import logo from "./../../../../src/assets/images/logo.png";

const Header = () => (

  <AppBar position="sticky" className="navbar" color="transparent" elevation={0}  >
    
    <Toolbar style={{ margin: 10}}>
   
      <Link to="/" className="navbar__title-link text-white">
      <img src={logo} alt="logo" width="184" height="80" ></img>
      </Link>

    </Toolbar>
  </AppBar>
)

export default Header;
