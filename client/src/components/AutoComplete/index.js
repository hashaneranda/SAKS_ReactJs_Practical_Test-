import React, { Component } from "react";
import { render } from "react-dom";


import MultiChipSelect from "./MultiChipSelect";

class AutoComplete extends React.Component {
  allItems = [
      {
          "id" : "1",
          "name" : "test1"
      },
      {
          "id" : "2",
          "name" : "ssva"
      },
      {
          "id" : "3",
          "name" : "aadce"
      },
  ]
  state = {
    items: this.allItems,
    selectedItem: []
  };

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
    }));
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