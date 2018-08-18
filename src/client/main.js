import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Topbar from "./views/topbar";
import BottomNav from "./views/bottomNav";
import "./main.css";

const styles = theme =>({
  root:{
    flexgrow: 1, 
  }
});

class ClientApp extends React.Component{

  render(){
    const {classes} = this.props;
    return(
      <div className="root">
        <div className="topbar">
          <Topbar></Topbar>
        </div>
          
        <div className = "content">abc</div>
          
          
        <div className = "navbar">
          <BottomNav></BottomNav>
        </div>  
          
      </div>
    )
  }

}

export default withStyles(styles)(ClientApp);