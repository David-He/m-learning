import React from "react"
import  List  from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MonthIcon from '@material-ui/icons/EventAvailable';
import Badge from "@material-ui/core/Badge";
import moment from "moment";
import PropTypes from 'prop-types';
import Examing from "./examing";


const styles = theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    margin: {
        margin: theme.spacing.unit * 1.2,
      },
      padding: {
        padding: `0 ${theme.spacing.unit * 2}px`,
      },
  });


class Examins extends React.Component{
    handleClick = function(number){
        if(this.props.onExaminClick)
          this.props.onExaminClick(number);
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
                <ListItemText primary= {badgeNum + "月考试试题"} />
            </ListItem> 
            )
        })
        return(
            <div className={classes.root}>

                <List component="nav">
                   {listItems}
                </List>
                <Divider />
                <Examing onClose = {this.props.onExaminClose} open={this.props.examin.open}
                  month={this.props.examin.month}/>
            </div>
        );
    }
}

Examins.propTypes = {
    onExaminClick: PropTypes.func.isRequired,
    onExaminClose: PropTypes.func.isRequired,
    examin: PropTypes.object,
}

export default Examins;