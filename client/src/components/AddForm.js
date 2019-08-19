import React, { Component } from 'react';


import { withStyles  } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';


const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
     marginLeft: '10px',
      width: "80%",
    },
    dense: {
      marginTop: 19,
    },
    menu: {
      width: 200,
    },
    card: {
        padding: "5vw"
    },
    button: {
        margin: '5px',
      },
  }


  

  export default withStyles(styles) (
    class AddForm extends Component {
        constructor(props) {
            super(props);

            this.state = {
                'gama_widiya' : null,
                'grama_niladari_number' : null,
                'gramaData' : [],
                'selected_num' : null
            }

            this.logChange = this.logChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }


        componentDidMount() {
            console.log("form mounted");

            axios.post('/api/get_kottasa')
                .then(response => {
                    this.setState({ gramaData: response.data.data });
                })
                .catch(function (error){
                    console.log(error);
                })
        }


        //change state by value enterd to feilds
        logChange(e) {
            this.setState({
                [e.target.name]: e.target.value //setting value edited by the admin in state.
            });
        }

        handleSubmit(event) {
            event.preventDefault()
            var data = {
                grame_niladari_number: this.state.grama_niladari_number,
                gama_widiya: this.state.gama_widiya
            }

            axios.post('/api/add_gama',data)
                .then(response => {
                    var newData = {
                        ...data,
                        id : response.data.data.insertId
                    }
                  
                    this.props.callbackFromParent(newData);
                })
                .catch(function (error){
                    console.log(error);
                })




            
        }
        
        render() {

            const { classes } = this.props;

            return (
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="card" className={classes.card}>
                                <h2>Add Gama Wididya</h2>
                                <TextField
                                    id="standard-select-currency"
                                    select
                                    label="Select Grama Niladari Number"
                                    className={classes.textField}
                                    value={this.state.grama_niladari_number}
                                    name="grama_niladari_number"
                                    onChange={this.logChange}
                                    
                                    helperText="Please select your currency"
                                    margin="normal"
                                >
                                    {this.state.gramaData.map(option => (
                                    <MenuItem key={option.id} value={option.grama_niladari_number}>
                                        {option.grama_niladari_number}
                                    </MenuItem>
                                    ))}
                                </TextField>

                                <TextField
                                    id="standard-search"
                                    label="Gama-Widiya"
                                    type="search"
                                    name='gama_widiya'
                                    onChange={this.logChange}
                                    value={this.state.gama_widiya}
                                    fullWidth
                                    className={classes.textField}
                                    margin="normal"
                                />
                                        <br />
                                <Button variant="contained" color="primary" className={classes.button} onClick={this.handleSubmit}> 
                                        Submit
                                    </Button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
  )
