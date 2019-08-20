import React, {Component} from 'react';
import {Link, NavLink} from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles} from '@material-ui/core';
import {Divider, List, ListItem, ListItemIcon, ListItemText, Typography} from '@material-ui/core';

import {
  DashboardOutlined as DashboardIcon,
  LockOpenOutlined as LockOpenIcon,
  SwitchVideoOutlined as ChannelsIcon,
  CommentOutlined as ReviewsIcon
} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import styles from './styles';


class Sidebar extends Component {





  render() {
    const {classes, className} = this.props;
    const rootClassName = classNames(classes.root, className);

    return (
      <nav className={rootClassName}>
        <div className={classes.logoWrapper}>
          <Link className={classes.logoLink} to="/">
           
            <Typography variant="h3">SAKS</Typography>
          </Link>
        </div>

        <Divider className={classes.logoDivider}/>

        <List component="div" disablePadding>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink}
                    to="/job">
            <ListItemIcon className={classes.listItemIcon}>
              <DashboardIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="My Jobs"/>
          </ListItem>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink}
                    to="/candidate">
            <ListItemIcon className={classes.listItemIcon}>
              <ChannelsIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Candidate"/>
          </ListItem>

          

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink}
                    to="/search">
            <ListItemIcon className={classes.listItemIcon}>
              <LockOpenIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Search"/>
          </ListItem>

          <ListItem activeClassName={classes.activeListItem} className={classes.listItem} component={NavLink}
                    to="/chat">
            <ListItemIcon className={classes.listItemIcon}>
              <ReviewsIcon/>
            </ListItemIcon>
            <ListItemText classes={{primary: classes.listItemText}} primary="Chat"/>
          </ListItem>

       
        </List>

        <Divider className={classes.listDivider}/>

        <List component="div" disablePadding >
          <Button variant="contained" color="primary" className={classes.button}>
                Post a Job
            </Button>
        </List>

        <Divider className={classes.listDivider}/>

        <List component="div" disablePadding
          /*    subheader={
          <ListSubheader className={classes.listSubheader}>
            Language
          </ListSubheader>}*/
        >
          
        </List>

      </nav>
    );
  }
}

Sidebar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Sidebar);
