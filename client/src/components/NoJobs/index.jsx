import React from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';


// Material components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Component styles
import styles from './styles';
import JobIcon from './icons8-new-copy-96.png';

const NoJobs = props => {
  const { classes, className} = props;

  const rootClassName = classNames(classes.root, className);

  return (
    <div className={rootClassName}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <div className={classes.paper}>
                    <img src={JobIcon} alt="hello"/>
                    <Typography variant="h2" gutterBottom>
                        You haven't posted any Job offers yet
                    </Typography>
                    <Typography variant="h4" gutterBottom>
                        You don't have posted any offers yet. Post your offer now to start reaching candidates
                    </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>
                        Post an offer now
                    </Button>
                </div>
            </Grid>
        </Grid>
      
    </div>
  );
};

NoJobs.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  mode: PropTypes.oneOf(['grid', 'list']),
  onChange: PropTypes.func
};

NoJobs.defaultProps = {
  mode: 'grid',
  onChange: () => {}
};

export default withStyles(styles)(NoJobs);
