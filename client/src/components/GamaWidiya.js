import React, { Component } from 'react';

import MaterialDatatable from "material-datatable";



import axios from 'axios';
import AddForm from "./AddForm";

class GamaWididya extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columns :  [
                { name: "Gama / Widiya", field: "gama_widiya" },
                { name: "Grama Niladari number", field: "grame_niladari_number" },
              ],
              data : [],        
              options :  {
                filterType: "dropdown",
                responsive: "scroll"
              },
              title : 'Gama-Widiya',
              isForm : false
        }

        this.toggleForm = this.toggleForm.bind(this);

        
    }

    //toggle Form when clicked show Form
    toggleForm() {
        this.setState({
            isForm: !this.state.isForm
        })
    }


    componentDidMount() {
        console.log("form mounted");

        axios.post('/api/get_gama')
            .then(response => {
                this.setState({ data: response.data.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    myCallback = (dataFromChild) => {
        console.log(dataFromChild)
        this.setState({ data : [ ...this.state.data, dataFromChild] })

    }
    
    render() {

        const {columns, data, options , title} = this.state;

          const divStyle = {
            margin: '40px',
          };

        return (
            <div>

                <div className="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 className="h3 mb-0 text-gray-800">{title}</h1>
                    <button onClick={ this.toggleForm} className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i className="fas fa-download fa-sm text-white-50" /> Add {title}</button>
                </div>

                { this.state.isForm ? <AddForm callbackFromParent={this.myCallback}/> : null }


                <div style={divStyle}> 
                <MaterialDatatable
                    title={title}
                    data={data}
                    columns={columns}
                    options={options}
                />
                </div>
            </div>
        );
    }
}





export default GamaWididya;