import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import Topbar from "./views/topbar";
import BottomNav from "./views/bottomNav";
import { connect, Provider } from "react-redux";
import LearningStore from "./reducer/learningStore";
import Compose from "recompose/compose"


import "./main.css";
import actionCreator from "./reducer/actionCreator";
import Content from "./views/content";

const styles = theme =>({
  root:{
    flexgrow: 1, 
  }
});

class ClientApp extends React.Component{

  render(){
 
    return(
      <div className="root">
        <div className="topbar">
          <Topbar></Topbar>
        </div>
          
        <div className = "content">
          <Content activeView={this.props.activeView} 
            onExaminClick ={this.props.onExaminClick}
            onExaminClose = {this.props.onExaminClose}
            examin = {this.props.examin} 
            onLearningClick={this.props.onLearningClick}
            onLearningClose={this.props.onLearningClose}
            learning = {this.props.learning}></Content>
        </div>
          
          
        <div className = "navbar" >
          <BottomNav onSwitch={this.props.onSwitch} value={this.props.activeView}></BottomNav>
        </div>  
          
      </div>
    )
  }

}


const mapStateToProps =(state)=>{
  return {
    activeView : state.switchView,
    examin: state.examin,
    learning: state.learning,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    onSwitch:(value)=>dispatch(actionCreator.switchView(value)),
    onExaminClick:(value)=>dispatch(actionCreator.examinClick(value)),
    onExaminClose:()=>dispatch(actionCreator.examinClose()),
    onLearningClick:(value)=>dispatch(actionCreator.learningClick(value)),
    onLearningClose:()=>dispatch(actionCreator.learningClose())
  }
}

const ComposedApp = Compose(withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps))(ClientApp);




export default ComposedApp;