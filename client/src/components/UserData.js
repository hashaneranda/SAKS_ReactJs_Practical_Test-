import React, { Component } from 'react';

import MaterialDatatable from "material-datatable";



import axios from 'axios';


class UserData extends Component {

    constructor(props) {
        super(props);
       

        this.state = {
            columns :  [
                { name: "Nationality", field: "nationality" },
                { name: "Gender", field: "gender" },
                { name: "Niwasa Ankaya", field: "niwasa_ankaya" },
                { name: "Anu Ankaya", field: "anu_ankaya" },
                { name: "Gama/Widiya ", field: "gama_widiya" },
                { name: "Grama Niladari Kottasaya ", field: "grama_niladhari_kottasaya" },
                { name: "Mathiwarana Kottasaya ", field: "mathiwarana_kottasaya" },
                { name: "Chanda Pradeshaya ", field: "chanda_pradeshaya" },
                { name: "Chanda kottasaya ", field: "chanda_kottasaya" },
                
              ],
              data : [],        
              options :  {
                filterType: "dropdown",
                responsive: "scroll"
              },
              title : 'User Data',
              isForm : false
        }

     

        
    }

   


    componentDidMount() {
        console.log("form mounted");

        axios.post('/api/get_userData')
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
                    
                </div>

               


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





export default UserData;