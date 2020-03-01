import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import image from "../assets/youtube-logo.svg";



const NavBar = ()=>{
    return(
        <AppBar position="static" style={{ background: '#27496d' }}>
  <Toolbar>
      <img src={image} width="80px"/>
  </Toolbar>
</AppBar>
    );
}


export default NavBar;