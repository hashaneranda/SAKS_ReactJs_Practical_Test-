import React, { Component } from 'react';


import { withStyles  } from '@material-ui/core/styles';

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
    class AddKottasa extends Component {
        constructor(props) {
            super(props);
           

            this.state = {
                'grama_niladhari_kottasaya' : null,
                'mathiwarana_kottasaya' : null,
                'chanda_pradeshaya' : null,
                'chanda_kottasaya' : null,
                'grama_niladari_number' : null,
            }

            this.logChange = this.logChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
          }


        componentDidMount() {
            
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
                grama_niladhari_kottasaya: this.state.grama_niladhari_kottasaya,
                mathiwarana_kottasaya: this.state.mathiwarana_kottasaya,
                chanda_pradeshaya: this.state.chanda_pradeshaya,
                chanda_kottasaya: this.state.chanda_kottasaya,
                grama_niladari_number: this.state.grama_niladari_number,
            }

            axios.post('/api/add_gramaKottsaya',data)
                .then(response => {
                    // data = {...data, id : response.data.data.insertId}
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
                                <h2>Add Grama Niladari Kottasaya</h2>
                                

                                <TextField
                                    id="standard-search"
                                    label="Grama Niladari Kottasaya"
                                    type="search"
                                    name='grama_niladhari_kottasaya'
                                    onChange={this.logChange}
                                    value={this.state.grama_niladhari_kottasaya}
                                    fullWidth
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="standard-search"
                                    label="Mathiwarana Kottasaya"
                                    type="search"
                                    name='mathiwarana_kottasaya'
                                    onChange={this.logChange}
                                    value={this.state.mathiwarana_kottasaya}
                                    fullWidth
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="standard-search"
                                    label="Chanda Pradeshaya"
                                    type="search"
                                    name='chanda_pradeshaya'
                                    onChange={this.logChange}
                                    value={this.state.chanda_pradeshaya}
                                    fullWidth
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="standard-search"
                                    label="Chanda Kottasaya"
                                    type="search"
                                    name='chanda_kottasaya'
                                    onChange={this.logChange}
                                    value={this.state.chanda_kottasaya}
                                    fullWidth
                                    className={classes.textField}
                                    margin="normal"
                                />
                                <TextField
                                    id="standard-search"
                                    label="Grama Niladari Number"
                                    type="number"
                                    name='grama_niladari_number'
                                    onChange={this.logChange}
                                    value={this.state.grama_niladari_number}
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
