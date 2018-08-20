import React from "react"
import PropTypes from "prop-types"
import  List  from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MonthIcon from '@material-ui/icons/DateRange';
import Badge from "@material-ui/core/Badge";
import moment from "moment";
import Learning from "./learning";

const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    margin: {
        margin: theme.spacing.unit * 2,
      },
      padding: {
        padding: `0 ${theme.spacing.unit * 2}px`,
      },
  });

class Learnings extends React.Component{
    handleClick = function(number){
        if(this.props.onLearningClick)
          this.props.onLearningClick(number);
    }

    render(){
        const classes = this.props;
        const month = [0, 1, 2, 3];
        const listItems = month.map((number)=>{
            let badgeNum =  moment().subtract(number, 'months').format('M');
            return(
            <ListItem button key={number} onClick={()=>this.handleClick(number)}>
                <ListItemIcon>
                    <Badge className={classes.margin} badgeContent={badgeNum} color="primary">
                        <MonthIcon />
                    </Badge>
                </ListItemIcon>
                <ListItemText primary= {badgeNum + "学习内容"} />
            </ListItem> 
            )
        })
        return(
            <div className={classes.root}>

                <List component="nav">
                   {listItems}
                </List>
                <Divider />
                <Learning onClose = {this.props.onLearningClose} open={this.props.learning.open}/>
            </div>
        );
    }
}

Learnings.propTypes={
    learning: PropTypes.object.isRequired,
    onLearningClose: PropTypes.func,
    onLearningClick: PropTypes.func, 
}

export default Learnings;