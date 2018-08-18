import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import LearningIcon from '@material-ui/icons/LiveTv';

import { Link} from "react-router-dom";


const styles = {
  root: {
    
  },
};

class SimpleBottomNavigation extends React.Component {


  handleChange = (event, value) => {
    //this.setState({ value });
    this.props.onSwitch(value);
  };

  render() {
    const { classes } = this.props;
    //const { value } = this.state;
    const value = this.props.value;
    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction label="课程" icon={<LearningIcon />}  />
        <BottomNavigationAction label="考试" icon={<RestoreIcon />} />
      </BottomNavigation>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  onSwitch: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);