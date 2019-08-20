import React, { Component }  from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';
import axios from 'axios';

// Material helpers
import { withStyles } from '@material-ui/core';


// Material components
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

// Component styles
import styles from './styles';

//Additional Custom Components
import AutoComplete from '../AutoComplete';
import Dropzone from '../Dropzone';


class AddJobs extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'position' : '',
            'location' : '',
            'category' : '',
            'experience' : '',
            'images' : '',
            'description' : '',
            'categoryList' : [],
            'experienceList' : [],
            'skills' : []
        }

       
    }



    
    componentDidMount() {
       

        //fetching Categories from API
        axios.post('/api/get_categories')
            .then(response => {
                this.setState({ categoryList: response.data.data });
            })
            .catch(function (error){
                console.log(error);
            })

        //fetching Categories from API
        axios.post('/api/get_experienceLevel')
            .then(response => {
                this.setState({ experienceList: response.data.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    addSkill = (x) => {
        console.log(x);
        this.setState({
            skills : [...this.state.skills, 
                {"id" : x}]
        });
    }


    addFile = (x) => {
        console.log(x);
        this.setState({ images : x });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        var data = {
            position: this.state.position,
            location: this.state.location,
            category: this.state.category,
            experienceLevel: this.state.experience,
            images: this.state.images,
            description: this.state.description,
            skills: this.state.skills,
        }

        axios.post('/api/add_jobs',data)
            .then(response => {
                console.log(response.data.data);
            })
            .catch(function (error){
                console.log(error);
            })
  
    }




    //change state by value enterd to feilds
    logChange = e => {
        this.setState({
            [e.target.name]: e.target.value //setting value edited by the admin in state.
        });
    };

    render() {
  const { classes, className} = this.props;

  const rootClassName = classNames(classes.root, className);

  return (
    <div className={rootClassName}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="subtitle1" gutterBottom>
                        Provide the information about your Job here. Try to be concise and priorities to give the most important and relevant info.
                    </Typography>
                    <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <TextField
                            id="standard-search"
                            label="Position"
                            className={classes.textField}
                            value={this.state.position}
                            name="position"
                            onChange={this.logChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="standard-location"
                            label="Location"
                            className={classes.textField}
                            value={this.state.location}
                            name="location"
                            onChange={this.logChange}
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            id="standard-category"
                            select
                            label="Select Category"
                            className={classes.textField}
                            value={this.state.category}
                            name="category"
                            onChange={this.logChange}
                            
                            helperText="Please select"
                            margin="normal"
                            variant="outlined"
                        >
                            {this.state.categoryList.map(option => (
                            <MenuItem key={option._id} value={option._id}>
                                {option.category}
                            </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-select-currency"
                            select
                            label="Select Experience Level"
                            className={classes.textField}
                            value={this.state.experience}
                            name="experience"
                            onChange={this.logChange}
                            
                            helperText="Please select"
                            margin="normal"
                            variant="outlined"
                        >
                            {this.state.experienceList.map(option => (
                            <MenuItem key={option._id} value={option._id}>
                                {option.experiencelevel}
                            </MenuItem>
                            ))}
                        </TextField>
                        <TextField
                            id="standard-multiline-static"
                            label="Description and Requirements"
                            multiline
                            rows="4"
                            value={this.state.description}
                            name="description"
                            onChange={this.logChange}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                        <div className={classes.autoComplete}>
                            <AutoComplete callbackFromParent={this.addSkill}/>
                        </div>
                        <Paper className={classes.upload}>
                            <Dropzone callbackFromParent={this.addFile}/>
                        </Paper>
                        <Button variant="contained" type="submit" color="primary" className={classes.button}>
                            Save
                        </Button>
                        
                    </form>
                </Paper>
            </Grid>
        </Grid>
      
    </div>
  );
}
}

AddJobs.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  mode: PropTypes.oneOf(['grid', 'list']),
  onChange: PropTypes.func
};

AddJobs.defaultProps = {
  mode: 'grid',
  onChange: () => {}
};

export default withStyles(styles)(AddJobs);
