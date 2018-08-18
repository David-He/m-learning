import React from "react"
import PropTypes from 'prop-types';
import Learnings from "./learnings"
import Examins from "./examins";



class Content extends React.Component{

    render(){

        let view = 0;
        if (this.props.activeView)
          view = this.props.activeView;
        let examin = this.props.examin;
        console.log(view);
        let comp; 
        if (view == 0)
            comp = <Learnings></Learnings>
           
        else 
           comp = <Examins onExaminClick={this.props.onExaminClick}
            onExaminClose={this.props.onExaminClose} 
            examin = {examin}></Examins>
            
            
        return(
           comp
        );


    }


}


Content.propTypes={
    activeView: PropTypes.number.isRequired,
    examin: PropTypes.object,
    onExaminClick: PropTypes.func,
    onExaminClose: PropTypes.func,
}

export default Content;