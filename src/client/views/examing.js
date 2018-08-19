import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import ExamQuestions from "./examQuestions";

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

const  tempquestions = [
  {
      "number":"1",
      "question":"驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？",
      "selection":[{"num": "A",
                    "text":"违章行为"},
                    {"num": "B",
                      "text":"违法行为"},
                    {"num": "C",
                      "text":"过失行为"},
                    {"num": "D",
                      "text":"违规行为"}
                  ] , 
      "answer":"A"
  },
  {
      "number":"2",
      "question":"驾驶机动车在道路上违反道路交通安全法的行为，属于什么行为？",
      "selection":[{"num": "A",
          "text":"违章行为"},
          {"num": "B",
            "text":"违法行为"},
          {"num": "C",
            "text":"过失行为"},
          {"num": "D",
            "text":"违规行为"}
        ] , 
      "answer":"A"
  }
]

class FullScreenDialog extends React.Component {

  constructor(){
    super();
    this.state = {
      questions:tempquestions
    }
  }
  render() {
    const { classes } = this.props;
    let open = false;
    if (this.props.open)
      open = this.props.open;
    
    return (
      <div>
        
        <Dialog
          fullScreen
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.props.onClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Sound
              </Typography>
              <Button color="inherit" onClick={this.props.onClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>
          <ExamQuestions questions ={this.state.questions}/>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
  month: PropTypes.number,
  onClose: PropTypes.func.isRequired,
};

export default withStyles(styles)(FullScreenDialog);