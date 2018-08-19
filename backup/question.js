import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
      flexGrow: 1,
      width: "100%"
    },
    paper: {
        padding: theme.spacing.unit * 2,
    },
    answer: {
      padding: theme.spacing.unit * 2,
    },
  });

  class QuestionView extends React.Component {
    state = {
      answer: ""
    };
  
    handleChange = key => (event, value) => {
      this.setState({
        [key]: value,
      });
    };
  
    render() {
      const { classes, question } = this.props;
      const { answer } = this.state;
  
      return (
        <Grid container className={classes.root} spacing={16}>
          <Grid Item xs={12}>
            <Paper className={classes.answer}>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container className={classes.demo} >
                        
                            <Paper className={classes.paper} >
                                {question.question}
                            </Paper>
                            
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.answer}>
                        
                            <FormLabel>请选择</FormLabel>
                            <RadioGroup
                                name="Answer"
                                aria-label="Answer"
                                value={answer}
                                onChange={this.handleChange('spacing')}
                                row
                            >
                            {question.selection.map(value =>(
                                <FormControlLabel key={value.num} control={<Radio/>} label={value.num +":"+value.text}>
                                </FormControlLabel> 
                            ))}
                            
                            {question.answer} 
                            </RadioGroup>
                        
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
  
  QuestionView.propTypes = {
    classes: PropTypes.object.isRequired,
    question: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(QuestionView);