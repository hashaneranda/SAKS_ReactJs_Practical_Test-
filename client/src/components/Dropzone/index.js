import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import DropzoneComponent from 'react-dropzone-component';
import axios from 'axios';

import Typography from '@material-ui/core/Typography';

// Material helpers
import { withStyles } from '@material-ui/core';


// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';


// Component styles
import styles from './styles';

class Upload extends Component {
  constructor(props) {
    super(props);

    this.state = {
        "fileName" : ""
    }
   
  }

  render() {

    const { classes, className} = this.props;

    const componentConfig = {
        iconFiletypes: ['.jpg', '.png', '.gif'],
        showFiletypeIcon: true,
        postUrl: '/api/upload'
    };

    const djsConfig = { autoProcessQueue: false }
    const eventHandlers = { 
        addedfile: (file) => {
            let data = new FormData();
            data.append('file', file);
            console.log(file);
            axios.post("/api/upload", data)
                .then(response => {
                    console.log(response.data.data.filename);
                    this.setState({"fileName" : response.data.data.filename}, this.props.callbackFromParent(response.data.data.filename))
                }).catch(error => {
                    console.log("*****  "+error)
            });
        },
        success: null,    
    }


   

    return (
        <DropzoneComponent config={componentConfig}
                       eventHandlers={eventHandlers}
                       djsConfig={djsConfig} />
      
    );
  }
}

Upload.propTypes = {
    className: PropTypes.string,
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(Upload);