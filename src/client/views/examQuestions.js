import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Question from "./question"

const styles = theme => ({
  root: {
    
    
    backgroundColor: theme.palette.background.paper,
  },
});

function SimpleList(props) {
  const { classes, questions } = props;

  return (
    <div className={classes.root}>
      <List component="nav">
        {
            questions.map((question)=>(
                <ListItem key = {question.number}>
                    <Question question={question}/>
                </ListItem>    
            ))
        }
      </List>
      
    </div>
  );
}

SimpleList.propTypes = {
  classes: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired
};

export default withStyles(styles)(SimpleList);