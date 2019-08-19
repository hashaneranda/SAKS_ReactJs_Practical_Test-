import React, { Component } from 'react';

import MaterialDatatable from "material-datatable";
import DeleteIcon from '@material-ui/icons/Delete';



import axios from 'axios';
import AddKottasa from "./AddKottasa";



 

class GramaKottasaya extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columns :  [
                { name: "Grama Niladhari Kottasaya", field: "grama_niladhari_kottasaya" },
                { name: "Mathiwarana Kottasaya", field: "mathiwarana_kottasaya" },
                { name: "Chanda Pradeshaya", field: "chanda_pradeshaya" },
                { name: "Chanda Kottasaya", field: "chanda_kottasaya" },
                { name: "Grama Niladhari Number", field: "grama_niladari_number" },
                {
                    name: 'Action', 
                    field: 'salary',
                    options: {
                        headerNoWrap: true,
                        customBodyRender: (value, tableMeta, updateValue) => {
                            return <DeleteIcon onClick={(index) => this.editComponent(index)} />; 
                        }
                    },
                }
              ],
              data : [],        
              options :  {
                filterType: "dropdown",
                responsive: "scroll"
              },
              title : 'Grama Niladari Kottasaya',
              isForm : false,
              editedIndex : null
        }

        this.toggleForm = this.toggleForm.bind(this);
      

        
    }

   


    editComponent(index) {
        console.log(index);
        console.log('edit component');
        this.setState({ editedIndex: index });
      }

    

    //toggle Form when clicked show Form
    toggleForm() {
        this.setState({
            isForm: !this.state.isForm
        })
    }


    componentDidMount() {
        console.log("form mounted");

        axios.post('/api/get_kottasa')
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

                { this.state.isForm ? <AddKottasa callbackFromParent={this.myCallback}/> : null }


                <div style={divStyle}> 
                <MaterialDatatable
                    title={title}
                    data={data}
                    columns={columns}
                    options={options}
                    editable={{
                    onRowsDelete : array => 
                        console.log(array)
                    }}
                 
                />
                </div>
            </div>
        );
    }
}





export default GramaKottasaya;