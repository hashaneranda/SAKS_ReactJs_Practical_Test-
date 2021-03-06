import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { Dashboard as DashboardLayout } from 'layouts';




const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  item: {
    height: '100%'
  }
});

class Candidate extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Candidate">
        <div className={classes.root}>
        </div>
      </DashboardLayout>
    );
  }
}

Candidate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Candidate);
