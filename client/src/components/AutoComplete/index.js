import React, { Component } from "react";
import axios from 'axios';


import MultiChipSelect from "./MultiChipSelect";

class AutoComplete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      itemsRaw: [],
      selectedItem: []
    };
  }

  componentDidMount() {
    
    //fetching Skills from API
    axios.post('/api/get_skills')
        .then(response => {

          //Mapping the array objects in a way that Library supports
            this.setState(
              { items: response.data.data.map( ({_id,skill,...otherProps}) => {
              return {
                "id" : _id,
                "name" : skill,
                ...otherProps
              }
              }) }, 
              () => {
                this.setState({ itemsRaw:  this.state.items});
              })
          })
        .catch(function (error){
            console.log(error);
        })
    }


 
  

  handleChange = selectedItem => {
    if (this.state.selectedItem.includes(selectedItem)) {
      this.removeSelectedItem(selectedItem);
    } else {
      this.addSelectedItem(selectedItem);
    }
  };

  addSelectedItem(item) {
    this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: [...selectedItem, item],
      items: items.filter(i => i.name !== item)
    }),() => {
      //getting the id from the selected skill name
      const val = this.state.itemsRaw.find((skill) => {
        return skill.name === item
      }).id
      this.props.callbackFromParent(val)

    });

  }

  removeSelectedItem = item => {
    this.setState(({ selectedItem, items }) => ({
      inputValue: "",
      selectedItem: selectedItem.filter(i => i !== item),
      items: [...items, { name: item, id: item.toLowerCase() }]
    }));
  };

  handleChangeInput = inputVal => {
    const t = inputVal.split(",");
    if (JSON.stringify(t) !== JSON.stringify(this.state.selectedItem)) {
      this.setState({ inputValue: inputVal });
    }
  };

  render() {
    const { selectedItem, items } = this.state;

    
    return (
      
          <MultiChipSelect
            onInputValueChange={this.handleChangeInput}
            inputValue={this.state.inputValue}
            availableItems={items}
            selectedItem={selectedItem}
            onChange={this.handleChange}
            onRemoveItem={this.removeSelectedItem}
          />
        
    );
  }
}


export default (AutoComplete);